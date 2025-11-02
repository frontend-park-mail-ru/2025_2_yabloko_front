'use strict'

import { AUTH_USER } from '../utils/auth'
import { API } from './api'
import { User } from './authManager'
import { store } from './store'

// Типы для профиля
export interface Profile {
	id: string
	email: string
	name: string
	phone: string
	address: string
	city_id: string
	avatar_url: string
	created_at: string
	updated_at: string
}

export interface CreateProfileRequest {
	email: string
	password: string
}

export interface CreateProfileResponse {
	id: string
}

export interface UpdateProfileRequest {
	name?: string
	phone?: string
	address?: string
	city_id?: string
	avatar_url?: string
	current_password?: string
	new_password?: string
}

export interface City {
	id: string
	name: string
}

export interface APIResponse<T = any> {
	data?: T
	error?: string
	status: number
}

export class ProfileAPI {
	// Создание профиля
	async createProfile(
		profileData: CreateProfileRequest,
	): Promise<APIResponse<CreateProfileResponse>> {
		const response = await API.fetch('/profiles', {
			method: 'POST',
			body: JSON.stringify(profileData),
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		const data = await response.json()
		return { data, status: response.status }
	}

	// Получение профиля
	async getProfile(userId: string): Promise<APIResponse<Profile>> {
		const response = await API.fetch(`/profiles/${userId}`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		const data = await response.json()
		return { data, status: response.status }
	}

	// Обновление профиля
	async updateProfile(
		userId: string,
		updates: UpdateProfileRequest,
	): Promise<APIResponse<void>> {
		const response = await API.fetch(`/profiles/${userId}`, {
			method: 'PUT',
			body: JSON.stringify(updates),
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		return { status: response.status }
	}

	// Удаление профиля
	async deleteProfile(userId: string): Promise<APIResponse<void>> {
		const response = await API.fetch(`/profiles/${userId}`, {
			method: 'DELETE',
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		return { status: response.status }
	}

	async uploadAvatar(
		userId: string,
		avatarFile: File,
	): Promise<APIResponse<void>> {
		const formData = new FormData()
		formData.append('avatar', avatarFile)

		const response = await API.fetch(`/profiles/${userId}/avatar`, {
			method: 'POST',
			body: formData,
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		return { status: response.status }
	}

	async getCities(): Promise<APIResponse<City[]>> {
		const response = await API.fetch('/stores/cities', {
			method: 'GET',
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await this.parseError(response),
			}
		}

		const data = await response.json()
		return { data, status: response.status }
	}

	private async parseError(response: Response): Promise<any> {
		const errorText = await response.text()
		try {
			return JSON.parse(errorText)
		} catch {
			return errorText
		}
	}

	/**
	 * Сохраняет гостевой город в профиль текущего пользователя, если в профиле город пустой
	 */
	/**
	 * Сохраняет гостевой город в профиль текущего пользователя, если в профиле город пустой
	 */
	async saveGuestCityToProfile(): Promise<void> {
		const user = store.get(AUTH_USER) as User | null
		if (!user) {
			console.log('User not found, skipping city save')
			return
		}

		// Получаем гостевой город прямо из localStorage
		const guestCityJson = localStorage.getItem('selected_city')
		if (!guestCityJson) {
			console.log('No guest city found, skipping save')
			return
		}

		try {
			const guestCity = JSON.parse(guestCityJson)

			// Проверяем что cityId не пустой
			if (!guestCity.id || guestCity.id.trim() === '') {
				console.log('City ID is empty, skipping save')
				return
			}

			// Сначала получаем текущий профиль
			const profileResponse = await this.getProfile(user.id)
			if (profileResponse.data) {
				const profile = profileResponse.data

				// Проверяем что в профиле город пустой
				if (!profile.city_id || profile.city_id.trim() === '') {
					// Только тогда сохраняем гостевой город
					await this.updateProfile(user.id, { city_id: guestCity.id })
					console.log('Guest city saved to profile')
				} else {
					console.log('Profile already has city, skipping save')
				}

				// Всегда очищаем гостевой город после логина
				localStorage.removeItem('selected_city')
			}
		} catch (error) {
			console.error('Failed to save city to profile:', error)
			// Все равно очищаем гостевой город даже при ошибке
			localStorage.removeItem('selected_city')
		}
	}
}

export const profileApi = new ProfileAPI()
