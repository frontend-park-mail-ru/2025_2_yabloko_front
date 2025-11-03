type StoreKey = 'auth.isAuthenticated' | 'auth.user'

class Store {
	private data: { [key in StoreKey]: any } = {
		// 'auth.isAuthenticated': false,
		// 'auth.user': null,
		'auth.isAuthenticated': true, // ← меняем на true
		'auth.user': {
			id: '1',
			email: 'test@mail.com'
		},
	}

	private listeners: { [key in StoreKey]: (() => void)[] } = {
		'auth.isAuthenticated': [],
		'auth.user': [],
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
