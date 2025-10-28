'use strict'

import { withoutNulls } from './utils/arrays'

export enum DOM_TYPES {
	TEXT = 'text',
	ELEMENT = 'element',
	FRAGMENT = 'fragment',
	COMPONENT = 'component',
}

export interface TextVNode {
	type: DOM_TYPES.TEXT
	value: string
	el?: Text
}

export interface ElementVNode {
	type: DOM_TYPES.ELEMENT
	tag: string
	props: Record<string, any>
	children: VNode[]
	el?: HTMLElement
	listeners?: Record<string, EventListener>
}

export interface FragmentVNode {
	type: DOM_TYPES.FRAGMENT
	children: VNode[]
	el?: HTMLElement
}

export interface ComponentVNode {
	type: DOM_TYPES.COMPONENT
	tag: any
	props: Record<string, any>
	children: VNode[]
	component?: any
	el?: HTMLElement
}

export type VNode = ElementVNode | TextVNode | FragmentVNode | ComponentVNode

export function h(
	tag: string,
	props: Record<string, any> = {},
	...children: any[]
): VNode {
	const type = typeof tag === 'string' ? DOM_TYPES.ELEMENT : DOM_TYPES.COMPONENT

	return {
		tag,
		props,
		type,
		children: mapTextNodes(withoutNulls(children)),
	}
}

function deepFlattenAndClean(arr: any[]): any[] {
	return arr.flat(Infinity).filter(item => item != null)
}

function mapTextNodes(children: any[]): VNode[] {
	return children
		.filter(child => child != null) // Дополнительная защита
		.map(child => {
			if (child == null) {
				return null
			}

			if (typeof child === 'string') {
				return { type: DOM_TYPES.TEXT, value: String(child) }
			}

			if (typeof child === 'number') {
				return { type: DOM_TYPES.TEXT, value: String(child) }
			}

			if (
				Array.isArray(child) &&
				child.every(
					item => item.type && Object.values(DOM_TYPES).includes(item.type),
				)
			) {
				return {
					type: DOM_TYPES.FRAGMENT,
					children: child,
				}
			}

			if (child.type && Object.values(DOM_TYPES).includes(child.type)) {
				return child
			}

			// Если что-то непонятное - пропускаем с предупреждением
			console.warn(
				'Unexpected child type in mapTextNodes:',
				typeof child,
				child,
			)
			return null
		})
		.filter(child => child != null) as VNode[]
}

export function hString(str: string): TextVNode {
	return { type: DOM_TYPES.TEXT, value: str }
}

export function hFragment(children: VNode[]): FragmentVNode {
	return {
		type: DOM_TYPES.FRAGMENT,
		children: mapTextNodes(deepFlattenAndClean(children)),
	}
}

export function extractChildren(vNode: VNode): VNode[] {
	if (!hasChildren(vNode)) {
		return []
	}

	const children: VNode[] = []

	for (const child of vNode.children) {
		if (child.type === DOM_TYPES.FRAGMENT) {
			children.push(...extractChildren(child))
		} else {
			children.push(child)
		}
	}

	return children
}

function hasChildren(node: VNode): node is ElementVNode | FragmentVNode {
	return 'children' in node && node.children !== undefined
}
