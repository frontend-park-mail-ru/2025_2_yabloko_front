import { AUTH_IS_AUTHENTICATED, AUTH_USER } from '../utils/auth'
import { syncCart } from './cartManager'
import { store } from './store'
import { AuthResponse, userApi } from './userApi'

export interface User {
	id: string
	email: string
}

export class AuthManager {
	async login(email: string, password: string): Promise<void> {
		try {
			const response = await userApi.login({ email, password })

			if (response.service.error) {
				throw new Error(`Login failed: ${response.service.error}`)
			}

			if (!response.body) {
				throw new Error('Empty response body from server')
			}

			const authData = response.body as AuthResponse
			const userData: User = {
				id: authData.user_id,
				email: authData.email,
			}

			if (userData.id && userData.email) {
				store.set(AUTH_USER, userData)
				store.set(AUTH_IS_AUTHENTICATED, true)
			}

			await syncCart()
		} catch (error) {
			throw error
		}
	}

	async register(email: string, password: string): Promise<void> {
		try {
			const response = await userApi.register({ email, password })

			if (response.service.error) {
				throw new Error(response.service.error)
			}

			await this.login(email, password)
		} catch (error) {
			throw error
		}
	}

	async logout(): Promise<void> {
		try {
			await userApi.logout()
		} catch (e) {
			console.warn('Logout API failed', e)
		} finally {
			store.set(AUTH_USER, null)
			store.set(AUTH_IS_AUTHENTICATED, false)
			
		}
	}

	async checkAuth(): Promise<boolean> {
		try {
			const response = await userApi.refresh()

			if (response.service.error || !response.body) {
				store.set(AUTH_USER, null)
				store.set(AUTH_IS_AUTHENTICATED, false)
				return false
			}

			const authData = response.body as AuthResponse
			const userData: User = {
				id: authData.user_id,
				email: authData.email,
			}

			store.set(AUTH_USER, userData)
			store.set(AUTH_IS_AUTHENTICATED, true)
			return true
		} catch (error) {
			store.set(AUTH_USER, null)
			store.set(AUTH_IS_AUTHENTICATED, false)
			return false
		}
	}

	getUser(): User | null {
		return store.get(AUTH_USER) as User | null
	}

	isAuthenticated(): boolean {
		return store.get(AUTH_IS_AUTHENTICATED) as boolean
	}
}

export const authManager = new AuthManager()
