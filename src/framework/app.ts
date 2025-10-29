import { destroyDOM } from './destroy-dom'
import { h, type VNode } from './h'
import { mountDOM } from './mount-dom'

export function createApp(RootComponent: any, props: any = {}) {
	let parentEl: HTMLElement | null = null
	let isMounted = false
	let vdom: VNode | null = null

	function reset() {
		parentEl = null
		isMounted = false
		vdom = null
	}

	if (typeof RootComponent !== "function") {
    throw new Error(
      `RootComponent must be a component class`
    );
  }

	return {
		mount(_parentEl: HTMLElement) {
			if (isMounted) {
				throw new Error('app is already mounted')
			}
			parentEl = _parentEl
			vdom = h(RootComponent, props)
			mountDOM(vdom, parentEl, null)
			isMounted = true
		},
		unmount() {
			if (!isMounted) {
				throw new Error('app is already unmounted')
			}
			if (vdom) {
				destroyDOM(vdom)
			}
			reset()
		},
	}
}
