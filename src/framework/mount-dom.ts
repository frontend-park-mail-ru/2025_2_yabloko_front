import {
	ComponentVNode,
	DOM_TYPES,
	type ElementVNode,
	type FragmentVNode,
	type TextVNode,
	type VNode,
} from './h'
import { enqueueJob } from './scheduler'
import { addEventListeners } from './utils/events'
import { extractPropsAndEvents } from './utils/props'

export function mountDOM(
	vNode: VNode,
	parentEl: HTMLElement,
	index?: number | null,
	hostComponent: any = null,
): void {
	switch (vNode.type) {
		case DOM_TYPES.TEXT: {
			createTextNode(vNode as TextVNode, parentEl, index)
			break
		}
		case DOM_TYPES.ELEMENT: {
			createElementNode(vNode as ElementVNode, parentEl, index, hostComponent)
			break
		}
		case DOM_TYPES.FRAGMENT: {
			createFragmentNode(vNode as FragmentVNode, parentEl, index, hostComponent)
			break
		}
		case DOM_TYPES.COMPONENT: {
			createComponentNode(
				vNode as ComponentVNode,
				parentEl,
				index,
				hostComponent,
			)
			enqueueJob(() => vNode.component.onMounted())
			break
		}
		default: {
			throw new Error(`Invalid type to mount DOM: ${(vNode as VNode).type}`)
		}
	}
}

function createTextNode(
	vNode: TextVNode,
	parentEl: HTMLElement,
	index?: number | null,
): void {
	const { value } = vNode
	const textNode = document.createTextNode(value)
	vNode.el = textNode
	insert(textNode, parentEl, index)
}

function createElementNode(
	vNode: ElementVNode,
	parentEl: HTMLElement,
	hostComponent: any,
	index?: number | null,
): void {
	const { tag, children } = vNode

	const element = document.createElement(tag)
	addProps(element, vNode, hostComponent)
	vNode.el = element

	children.forEach(child => mountDOM(child, element, null, hostComponent))
	insert(element, parentEl, index)
}

function createFragmentNode(
	vNode: FragmentVNode,
	parentEl: HTMLElement,
	hostComponent: any,
	index?: number | null,
): void {
	const { children } = vNode
	vNode.el = parentEl
	children.forEach((child, i) =>
		mountDOM(
			child,
			parentEl,
			index !== null && index !== undefined ? index + i : null,
			hostComponent,
		),
	)
}

function createComponentNode(
	vNode: ComponentVNode,
	parentEl: HTMLElement,
	hostComponent: any,
	index?: number | null,
) {
	const Component = vNode.tag
	const { props, events } = extractPropsAndEvents(vNode)
	const component = new Component(props, events, hostComponent)

	component.mount(parentEl, index)
	vNode.component = component
	vNode.el = component.firstElement
}

function addProps(
	element: HTMLElement,
	vNode: ElementVNode,
	hostComponent: any,
): void {
	const { props: attrs, events } = extractPropsAndEvents(vNode)

	vNode.listeners = addEventListeners(events, element, hostComponent)
	setAttributes(element, attrs)
}

function setAttributes(element: HTMLElement, attrs: Record<string, any>): void {
	const { class: className, style, ...otherAttrs } = attrs

	if (className) {
		setClass(element, className)
	}

	if (style) {
		Object.entries(style).forEach(([prop, value]) => {
			setStyle(element, prop, value)
		})
	}

	for (const [name, value] of Object.entries(otherAttrs)) {
		if (value !== false) {
			setAttribute(element, name, value)
		}
	}
}

export function setClass(element: HTMLElement, className: any): void {
	element.className = ''

	if (typeof className === 'string') {
		element.className = className
	}

	if (Array.isArray(className)) {
		element.classList.add(...className)
	}
}

export function setStyle(element: HTMLElement, name: string, value: any): void {
	if (value == null || value === '') {
		element.style.removeProperty(name)
	} else {
		element.style.setProperty(name, String(value))
	}
}

export function removeStyle(element: HTMLElement, name: string): void {
	element.style.removeProperty(name)
}

export function setAttribute(
	element: HTMLElement,
	name: string,
	value: string,
): void {
	if (value == null) {
		element.removeAttribute(name)
	} else {
		element.setAttribute(name, value)
	}
}

export function removeAttribute(element: HTMLElement, name: string): void {
	element.removeAttribute(name)
}

function insert(
	element: Node,
	parentEl: HTMLElement,
	index?: number | null,
): void {
	if (index == null) {
		parentEl.append(element)
		return
	}

	if (index < 0) {
		throw new Error('index must be positive')
	}

	const children = parentEl.childNodes

	if (index >= children.length) {
		parentEl.append(element)
	} else {
		parentEl.insertBefore(element, children[index])
	}
}
