import { CART_COUNT } from '../utils/auth'
import { authManager } from './authManager'
import { store } from './store'
import { CartItem, StoreApi } from './storeApi'

const CART_KEY = 'guest_cart'

export async function getCartFromStorage(): Promise<CartItem[]> {
	try {
		if (await authManager.checkAuth()) {
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

export async function syncCart(): Promise<void> {
	try {
		const localData = localStorage.getItem(CART_KEY)
		const localCart: CartItem[] = localData ? JSON.parse(localData) : []

		const userCart = await StoreApi.getUserCart()

		if (localCart.length > 0 && userCart.items.length === 0) {
			const updateItems = localCart.map(item => ({
				id: item.id,
				store_id: 'c45a7b64-df32-4e84-b2cb-85a3b8e6b0fc',
				quantity: Number(item.quantity),
			}))
			await StoreApi.updateCart(updateItems)
            const totalCount = updateItems.reduce((sum, item) => sum + item.quantity, 0)
            store.set(CART_COUNT, totalCount)
        } else {
            const totalCount = userCart.items.reduce((sum, item) => sum + item.quantity, 0)
            store.set(CART_COUNT, totalCount)
		}
		clearCart()
		
	} catch (e) {
		console.error('Cart sync error', e)
	}
}

export async function saveCartToStorage(items: CartItem[]): Promise<void> {
	try {
		if (await authManager.checkAuth()) {
			const updateItems = items.map(item => ({
				id: item.id,
				store_id: 'c45a7b64-df32-4e84-b2cb-85a3b8e6b0fc',
				quantity: Number(item.quantity),
			}))
			await StoreApi.updateCart(updateItems)
			console.log('Save to backend:', items)
		} else {
			localStorage.setItem(CART_KEY, JSON.stringify(items))
		}
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

	const totalCount = newCart.reduce((sum, item) => sum + item.quantity, 0)
	store.set(CART_COUNT, totalCount)
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

	const totalCount = newCart.reduce((sum, item) => sum + item.quantity, 0)
	store.set(CART_COUNT, totalCount)
}

export async function removeFromCart(id: string): Promise<void> {
	const cart = await getCartFromStorage()
	const newCart = cart.filter(item => item.id !== id)
	saveCartToStorage(newCart)

	const totalCount = newCart.reduce((sum, item) => sum + item.quantity, 0)
	store.set(CART_COUNT, totalCount)
}

export function clearCart(): void {
	try {
		localStorage.removeItem(CART_KEY)

		store.set(CART_COUNT, 0)
	} catch (e) {
		console.error('Cart clear error', e)
	}
}
