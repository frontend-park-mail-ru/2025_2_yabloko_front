import { CartItem } from './storeApi'

const CART_KEY = 'guest_cart'

export function getCartFromStorage(): CartItem[] {
	try {
		const data = localStorage.getItem(CART_KEY)
		return data ? JSON.parse(data) : []
	} catch (e) {
		console.error('Cart parse error', e)
		return []
	}
}

export function saveCartToStorage(items: CartItem[]): void {
	try {
		localStorage.setItem(CART_KEY, JSON.stringify(items))
	} catch (e) {
		console.error('Cart save error', e)
	}
}

export function addToCart(item: CartItem): void {
	const cart = getCartFromStorage()
	const existing = cart.find(i => i.id === item.id)

	let newCart: CartItem[]

	if (existing) {
		newCart = cart.map(i =>
			i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
		)
	} else {
		newCart = [...cart, item]
	}

	saveCartToStorage(newCart)
}

export function updateQuantity(id: string, quantity: number): void {
	if (quantity <= 0) {
		removeFromCart(id)
		return
	}

	const cart = getCartFromStorage()
	const newCart = cart.map(item =>
		item.id === id ? { ...item, quantity } : item,
	)
	saveCartToStorage(newCart)
}

export function removeFromCart(id: string): void {
	const cart = getCartFromStorage()
	const newCart = cart.filter(item => item.id !== id)
	saveCartToStorage(newCart)
}

export function clearCart(): void {
	try {
		localStorage.removeItem(CART_KEY)
	} catch (e) {
		console.error('Cart clear error', e)
	}
}
