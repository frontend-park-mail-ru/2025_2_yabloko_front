import { AUTH_IS_AUTHENTICATED, AUTH_USER } from '../utils/auth'
import { profileManager } from './profileManager'
import { store } from './store'
import { userApi } from './userApi'

export interface User {
	id: string
	email: string
}

export class AuthManager {
	async login(email: string, password: string): Promise<void> {
		const response = await userApi.login({ email, password })
		const userData = response.body as User

		store.set(AUTH_USER, userData)
		store.set(AUTH_IS_AUTHENTICATED, true)
		await profileManager.syncGuestData()
	}

	async register(email: string, password: string): Promise<void> {
		await userApi.register({ email, password })
		await this.login(email, password)
	}

	async logout(): Promise<void> {
		try {
			await userApi.logout()
		} catch (e) {
			console.warn('Logout API failed', e)
		}

		store.set(AUTH_USER, null)
		store.set(AUTH_IS_AUTHENTICATED, false)
	}

	async checkAuth(): Promise<boolean> {
		try {
			const response = await userApi.refresh()
			const userData = response.body as User

			store.set(AUTH_USER, userData)
			store.set(AUTH_IS_AUTHENTICATED, true)
			return true
		} catch (error) {
			this.logout()
			console.warn(error)
			return false
		}
	}

	getUser(): User | null {
		return store.get(AUTH_USER) as User | null
	}

	isAuthenticated(): boolean {
		return store.get('auth.isAuthenticated') as boolean
	}
}

export const authManager = new AuthManager()
