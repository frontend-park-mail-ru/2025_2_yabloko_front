import { destroyDOM } from './destroy-dom'
import {
	ComponentVNode,
	DOM_TYPES,
	type ElementVNode,
	type TextVNode,
	type VNode,
	extractChildren,
} from './h'
import {
	mountDOM,
	removeAttribute,
	removeStyle,
	setAttribute,
	setStyle,
} from './mount-dom'
import { areNodesEqual } from './nodes-equal'
import {
	ARRAY_DIFF_OP,
	arrayDiff,
	arrayDiffSequence,
	isNotBlankOrEmptyString,
} from './utils/arrays'
import { addEventListener } from './utils/events'
import { objectDiff } from './utils/objects'
import { extractPropsAndEvents } from './utils/props'

export function patchDOM(
	oldVNode: VNode,
	newVNode: VNode,
	parentEl: HTMLElement,
	hostComponent: any = null,
): VNode {
	if (!areNodesEqual(oldVNode, newVNode)) {
		let index: number | null = null
		if (oldVNode !== undefined && oldVNode.el) {
			index = findIndexInParent(parentEl, oldVNode.el)
		}
		destroyDOM(oldVNode)
		mountDOM(newVNode, parentEl, index, hostComponent)
		return newVNode
	}

	newVNode.el = oldVNode.el

	switch (newVNode.type) {
		case DOM_TYPES.TEXT: {
			patchText(oldVNode as TextVNode, newVNode as TextVNode)
			break
		}
		case DOM_TYPES.ELEMENT: {
			patchElement(
				oldVNode as ElementVNode,
				newVNode as ElementVNode,
				hostComponent,
			)
			break
		}
		case DOM_TYPES.COMPONENT: {
			patchComponent(oldVNode as ComponentVNode, newVNode as ComponentVNode)
			break
		}
	}

	patchChildren(oldVNode, newVNode, hostComponent)

	return newVNode
}

function findIndexInParent(
	parentEl: HTMLElement,
	el: HTMLElement | Text | undefined,
): number | null {
	if (!el) {
		return null
	}

	const index = Array.from(parentEl.childNodes).indexOf(el)
	if (index < 0) {
		return null
	}

	return index
}

function patchText(oldVNode: TextVNode, newVNode: TextVNode): void {
	const el = oldVNode.el
	const { value: oldText } = oldVNode
	const { value: newText } = newVNode

	if (oldText !== newText && el) {
		el.nodeValue = newText
	}
}

function patchElement(
	oldVNode: ElementVNode,
	newVNode: ElementVNode,
	hostComponent: any,
): void {
	if (!oldVNode || !newVNode) {
		return
	}

	const el = oldVNode.el
	if (!el) {
		return
	}

	const oldProps = oldVNode.props || {}
	const newProps = newVNode.props || {}

	const oldClass = oldProps.class
	const oldStyle = oldProps.style
	const oldEvents = oldProps.on
	const newClass = newProps.class
	const newStyle = newProps.style
	const newEvents = newProps.on

	const oldAttrs = { ...oldProps }
	delete oldAttrs.class
	delete oldAttrs.style
	delete oldAttrs.on

	const newAttrs = { ...newProps }
	delete newAttrs.class
	delete newAttrs.style
	delete newAttrs.on

	const oldListeners = oldVNode.listeners || {}

	patchAttrs(el, oldAttrs, newAttrs)
	patchStyles(el, oldStyle, newStyle)
	patchClasses(el, oldClass, newClass)
	newVNode.listeners = patchEvents(
		el,
		oldListeners,
		oldEvents,
		newEvents,
		hostComponent,
	)
}

function patchComponent(oldVNode: ComponentVNode, newVNode: ComponentVNode) {
	const { component } = oldVNode
	const { props } = extractPropsAndEvents(newVNode)
	component.updateProps(props)
	newVNode.component = component
	newVNode.el = component.firstElement
}

function patchAttrs(
	el: HTMLElement | undefined,
	oldAttrs: Record<string, any>,
	newAttrs: Record<string, any>,
): void {
	if (!el) {
		return
	}

	const { added, removed, updated } = objectDiff(oldAttrs, newAttrs)

	for (const attr of removed) {
		removeAttribute(el, attr)
	}

	for (const attr of added.concat(updated)) {
		setAttribute(el, attr, newAttrs[attr])
	}
}

function patchStyles(
	el: HTMLElement | undefined,
	oldStyle: Record<string, any>,
	newStyle: Record<string, any>,
): void {
	if (!el) {
		return
	}

	const { added, removed, updated } = objectDiff(oldStyle, newStyle)

	for (const style of removed) {
		removeStyle(el, style)
	}

	for (const style of added.concat(updated)) {
		setStyle(el, style, newStyle[style])
	}
}

function patchClasses(
	el: HTMLElement | undefined,
	oldClass: any,
	newClass: any,
): void {
	if (!el) {
		return
	}

	const oldClasses = toClassList(oldClass)
	const newClasses = toClassList(newClass)

	const { removed, added } = arrayDiff(oldClasses, newClasses)

	if (removed.length > 0) {
		el.classList.remove(...removed)
	}

	if (added.length > 0) {
		el.classList.add(...added)
	}

	function toClassList(classes: any = ''): string[] {
		if (!classes) {
			return []
		}
		return Array.isArray(classes)
			? classes.filter(isNotBlankOrEmptyString)
			: String(classes).split(/(\s+)/).filter(isNotBlankOrEmptyString)
	}
}

function patchEvents(
	el: HTMLElement | undefined,
	oldListeners: Record<string, EventListener> = {},
	oldEvents: Record<string, EventListener> = {},
	newEvents: Record<string, EventListener> = {},
	hostComponent: any,
): Record<string, EventListener> {
	if (!el) {
		return {}
	}

	const { removed, added, updated } = objectDiff(oldEvents, newEvents)

	for (const eventName of removed.concat(updated)) {
		el.removeEventListener(eventName, oldListeners[eventName])
	}

	const addedListeners: Record<string, EventListener> = {}

	for (const eventName of added.concat(updated)) {
		const listener = addEventListener(
			eventName,
			newEvents[eventName],
			el,
			hostComponent,
		)

		addedListeners[eventName] = listener
	}

	return { ...oldListeners, ...addedListeners }
}

function patchChildren(
	oldVNode: VNode,
	newVNode: VNode,
	hostComponent: any,
): void {
	const oldChildren = extractChildren(oldVNode)
	const newChildren = extractChildren(newVNode)
	const parentEl = oldVNode.el as HTMLElement

	const diffSeq = arrayDiffSequence(oldChildren, newChildren, areNodesEqual)

	for (const operation of diffSeq) {
		const { op, fromIndex, index, item } = operation as any
		const offset = hostComponent?.offset ?? 0
		switch (op) {
			case ARRAY_DIFF_OP.ADD: {
				mountDOM(item, parentEl, index + offset, hostComponent)
				break
			}
			case ARRAY_DIFF_OP.REMOVE: {
				destroyDOM(item)
				break
			}
			case ARRAY_DIFF_OP.NOOP: {
				const oldChild = oldChildren[index]
				const newChild = newChildren[index]
				if (oldChild != null && newChild != null) {
					patchDOM(oldChild, newChild, parentEl, hostComponent)
				}
				break
			}

			case ARRAY_DIFF_OP.MOVE: {
				const oldChild = oldChildren[fromIndex]
				const newChild = newChildren[index]
				if (oldChild != null && newChild != null) {
					const el = oldChild.el
					const elAtTargetIndex = parentEl.childNodes[index + offset]

					if (el) {
						parentEl.insertBefore(el, elAtTargetIndex || null)
					}
					patchDOM(oldChild, newChild, parentEl, hostComponent)
				}
				break
			}
		}
	}
}
