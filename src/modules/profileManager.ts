import { authManager } from './authManager'
import { clearCart, getCartFromStorage } from './cartManager'
import { clearSelectedCity, loadSelectedCity } from './cityManager'
import { StoreApi } from './storeApi'

export class ProfileManager {
	async syncGuestData(): Promise<void> {
		if (!authManager.isAuthenticated()) {
			return
		}

		await this.syncCart()
		await this.syncCity()
	}

	private async syncCart(): Promise<void> {
		const cartItems = getCartFromStorage()
		if (cartItems.length === 0) {
			return
		}

		try {
			const userId = authManager.getUser()?.id
			if (!userId) {
				throw new Error('User ID not found')
			}

			const cartUpdate = {
				items: cartItems.map(item => ({
					id: item.id,
					quantity: item.quantity,
				})),
			}

			await StoreApi.updateCart(userId, cartUpdate)
			clearCart()
		} catch (error) {
			console.error('Cart sync failed', error)
		}
	}

	private async syncCity(): Promise<void> {
		const savedCity = loadSelectedCity()
		if (!savedCity) {
			return
		}

		try {
			const userId = authManager.getUser()?.id
			if (!userId) {
				throw new Error('User ID not found')
			}

			await StoreApi.syncCity(userId, savedCity.id)
			clearSelectedCity()
		} catch (error) {
			console.error('City sync failed', error)
		}
	}
}

export const profileManager = new ProfileManager()
