type StoreKey = 'auth.isAuthenticated' | 'auth.user' | 'cart.count'

class Store {
	private data: { [key in StoreKey]: any } = {
		'auth.isAuthenticated': false,
		'auth.user': null,
		'cart.count': null,
	}

	private listeners: { [key in StoreKey]: (() => void)[] } = {
		'auth.isAuthenticated': [],
		'auth.user': [],
		'cart.count': [],
	}

	get(key: StoreKey): any {
		return this.data[key]
	}

	set(key: StoreKey, value: any): void {
		this.data[key] = value
		this.listeners[key].forEach(fn => fn())
	}

	subscribe(key: StoreKey, callback: () => void): () => void {
		this.listeners[key].push(callback)
		return () => {
			this.listeners[key] = this.listeners[key].filter(fn => fn !== callback)
		}
	}
}

export const store = new Store()
