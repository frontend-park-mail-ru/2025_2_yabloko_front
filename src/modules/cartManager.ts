import { authManager } from './authManager'
import { CartItem, StoreApi } from './storeApi'

const CART_KEY = 'guest_cart'

export async function getCartFromStorage(): Promise<CartItem[]> {
	try {
		if (authManager.checkAuth()) {
			const cart = await StoreApi.getUserCart()
			return cart.items as CartItem[]
		} else {
			const data = localStorage.getItem(CART_KEY)
			return data ? JSON.parse(data) : []
		}
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

export async function addToCart(item: CartItem): Promise<void> {
	const cart = await getCartFromStorage()
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

export async function updateQuantity(
	id: string,
	quantity: number,
): Promise<void> {
	if (quantity <= 0) {
		await removeFromCart(id)
		return
	}

	const cart = await getCartFromStorage()
	const newCart = cart.map(item =>
		item.id === id ? { ...item, quantity } : item,
	)
	saveCartToStorage(newCart)
}

export async function removeFromCart(id: string): Promise<void> {
	const cart = await getCartFromStorage()
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
