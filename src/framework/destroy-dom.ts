import { DOM_TYPES, ElementVNode, FragmentVNode, TextVNode, VNode } from './h'
import { enqueueJob } from './scheduler'
import { removeEventListeners } from './utils/events'

export function destroyDOM(vNode: VNode) {
	switch (vNode.type) {
		case DOM_TYPES.TEXT: {
			destroyTextNode(vNode)
			break
		}
		case DOM_TYPES.ELEMENT: {
			destroyElementNode(vNode)
			break
		}
		case DOM_TYPES.FRAGMENT: {
			destroyFragmentNode(vNode)
			break
		}
		case DOM_TYPES.COMPONENT: {
			vNode.component.unmount()
			enqueueJob(() => vNode.component.onUnmounted())
			break
		}
		default: {
			throw new Error(`Invalid type to destroy DOM: ${(vNode as VNode).type}`)
		}
	}
}

function destroyTextNode(vNode: TextVNode) {
	const { el } = vNode
	if (el) {
		el.remove()
	}
}

function destroyElementNode(vNode: ElementVNode) {
	const { el, children, listeners } = vNode

	if (el) {
		el.remove()

		if (listeners) {
			removeEventListeners(listeners, el)
			delete vNode.listeners
		}
	}

	children.forEach(destroyDOM)
}

function destroyFragmentNode(vNode: FragmentVNode) {
	const { el, children } = vNode

	children.forEach(destroyDOM)

	if (el) {
		delete vNode.el
	}
}
