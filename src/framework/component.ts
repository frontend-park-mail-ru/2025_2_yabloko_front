import { destroyDOM } from './destroy-dom'
import { dispatcher } from './dispatcher'
import { DOM_TYPES, extractChildren, VNode } from './h'
import { mountDOM } from './mount-dom'
import { patchDOM } from './patch-dom'
import { hasOwnProperty } from './utils/objects'

interface ComponentDefinition {
	render: () => VNode
	state?: (props: any) => any
	onMounted?: () => any
	onUnmounted?: () => any
	[key: string]: any
}

const emptyFn = () => {}

export function defineComponent({
	render,
	state,
	onMounted = emptyFn,
	onUnmounted = emptyFn,
	...methods
}: ComponentDefinition) {
	class Component {
		props: any
		state: any
		#isMounted = false
		#vdom: VNode | null = null
		#hostEl: HTMLElement | null = null
		#eventHandlers: any = null
		#parentComponent: any = null
		#dispatcher = dispatcher
		#subscriptions: any[] = []

		constructor(props: any = {}, eventHandlers = {}, parentComponent = null) {
			this.props = props
			this.state = state ? state(props) : {}
			this.#eventHandlers = eventHandlers
			this.#parentComponent = parentComponent
		}

		onMounted() {
			return Promise.resolve(onMounted.call(this))
		}

		onUnmounted() {
			return Promise.resolve(onUnmounted.call(this))
		}

		get elements() {
			if (this.#vdom == null) {
				return []
			}

			if (this.#vdom.type == DOM_TYPES.FRAGMENT) {
				return extractChildren(this.#vdom).flatMap(child => {
					if (child.type === DOM_TYPES.COMPONENT) {
						return child.component.elements
					}

					return [child.el]
				})
			}

			return [this.#vdom.el]
		}

		get firstElement() {
			return this.elements[0]
		}

		get offset() {
			if (this.#vdom?.type === DOM_TYPES.FRAGMENT) {
				return 0
			}
			return undefined
		}

		#wireEventsHandlers() {
			this.#subscriptions = Object.entries(this.#eventHandlers).map(
				([eventName, handler]) => this.#wireEventHandler(eventName, handler),
			)
		}

		#wireEventHandler(eventName: string, handler: any) {
			return this.#dispatcher.subscribe(eventName, payload => {
				if (this.#parentComponent) {
					handler.call(this.#parentComponent, payload)
				} else {
					handler(payload)
				}
			})
		}

		updateProps(props: any) {
			this.props = { ...this.props, ...props }
			this.#patch()
		}

		updateState(state: any) {
			this.state = { ...this.state, ...state }
			this.#patch()
		}

		emit(eventName: string, payload: any) {
			this.#dispatcher.dispatch(eventName, payload)
		}

		render(): VNode {
			return render.call(this)
		}

		mount(hostEl: HTMLElement, index: number | null = null) {
			if (this.#isMounted === true) {
				throw new Error('Component is already mounted')
			}
			this.#vdom = this.render()
			mountDOM(this.#vdom, hostEl, index, this)
			this.#wireEventsHandlers()

			this.#hostEl = hostEl
			this.#isMounted = true
		}

		unmount() {
			if (this.#isMounted === false) {
				throw new Error('Component is not mounted')
			}
			if (this.#vdom) {
				destroyDOM(this.#vdom)
				this.#subscriptions.forEach(unsubscribe => unsubscribe())
				this.#vdom = null
				this.#hostEl = null
				this.#isMounted = false
				this.#subscriptions = []
			}
		}

		#patch() {
			if (this.#isMounted === false) {
				throw new Error('Component is not mounted')
			}
			if (this.#vdom && this.#hostEl) {
				const vdom = this.render()
				this.#vdom = patchDOM(this.#vdom, vdom, this.#hostEl, this)
			}
		}
	}

	for (const methodName in methods) {
		if (hasOwnProperty(Component.prototype, methodName)) {
			throw new Error(`Method '${methodName}' already exists in this component`)
		}

		;(Component.prototype as any)[methodName] = (methods as any)[methodName]
	}

	return Component
}
