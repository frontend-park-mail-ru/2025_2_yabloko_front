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

type ComponentType = (props: any) => VNode;

export function h(
  tag: string | ComponentType,
  props: Record<string, any> = {},
  ...children: any[]
): VNode {
	if (typeof tag === 'string') {
    return {
      type: DOM_TYPES.ELEMENT,
      tag,
      props,
      children:  mapTextNodes(withoutNulls(children)),
    }
  } else {
    return {
      type: DOM_TYPES.COMPONENT,
      tag,
      props,
      children:  mapTextNodes(withoutNulls(children)),
    }
  };
}

function deepFlattenAndClean(arr: any[]): any[] {
	return arr.flat(Infinity).filter(item => item != null)
}

function mapTextNodes(children: any[]): VNode[] {
	return children.reduce<VNode[]>((acc, child) => {
		if (child == null) {
			return acc;
		}

		let vnode: VNode | null = null;

		if (typeof child === 'string' || typeof child === 'number') {
			vnode = { type: DOM_TYPES.TEXT, value: String(child) };
		} else if (
			Array.isArray(child) &&
			child.every(item => item?.type && Object.values(DOM_TYPES).includes(item.type))
		) {
			vnode = { type: DOM_TYPES.FRAGMENT, children: child };
		} else if (child.type && Object.values(DOM_TYPES).includes(child.type)) {
			vnode = child;
		} else {
			console.warn('Unexpected child type in mapTextNodes:', typeof child, child);
			return acc;
		}

		if (vnode != null) {
			acc.push(vnode);
		}

		return acc;
	}, []);
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
