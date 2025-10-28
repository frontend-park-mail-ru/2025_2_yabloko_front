export function addEventListeners(
	events: Record<string, EventListener>,
	element: HTMLElement,
	hostComponent: object | null = null,
): Record<string, EventListener> {
	const listeners: Record<string, EventListener> = {}

	Object.entries(events).forEach(([eventName, eventHandler]) => {
		const listener = addEventListener(
			eventName,
			eventHandler,
			element,
			hostComponent,
		)
		listeners[eventName] = listener
	})

	return listeners
}

export function addEventListener(
	eventName: string,
	eventHandler: EventListener,
	element: HTMLElement,
	hostComponent: object | null = null,
): EventListener {
	function boundHandler(event: Event) {
		if (hostComponent) {
			eventHandler.call(hostComponent, event)
		} else {
			eventHandler(event)
		}
	}

	element.addEventListener(eventName, boundHandler)
	return boundHandler
}

export function removeEventListeners(
	listeners: Record<string, EventListener> = {},
	element: HTMLElement,
): void {
	Object.entries(listeners).forEach(([eventName, eventHandler]) => {
		element.removeEventListener(eventName, eventHandler)
	})
}
