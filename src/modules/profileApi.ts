'use strict'

import { AUTH_USER } from '../utils/auth'
import { API, APIresponse } from './api'
import { User } from './authManager'
import { store } from './store'

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

/**
 * Класс для взаимодействия с API профиля пользователя.
 */
export class ProfileAPI {
	/**
	 * Создаёт профиль пользователя.
	 * @param profileData - Данные для создания профиля.
	 * @returns Ответ API.
	 */
	async createProfile(profileData: CreateProfileRequest): Promise<APIresponse> {
		return API.post('PROFILE', '/profiles', profileData)
	}

	/**
	 * Получает профиль пользователя по ID.
	 * @param userId - Идентификатор пользователя.
	 * @returns Ответ API с профилем.
	 */
	async getProfile(userId: string): Promise<APIresponse> {
		return API.get('PROFILE', `/profiles/${userId}`)
	}

	/**
	 * Обновляет профиль пользователя.
	 * @param userId - Идентификатор пользователя.
	 * @param updates - Объект с обновляемыми полями.
	 * @returns Ответ API.
	 */
	async updateProfile(
		userId: string,
		updates: UpdateProfileRequest,
	): Promise<APIresponse> {
		return API.put('PROFILE', `/profiles/${userId}`, updates)
	}

	/**
	 * Удаляет профиль пользователя.
	 * @param userId - Идентификатор пользователя.
	 * @returns Ответ API.
	 */
	async deleteProfile(userId: string): Promise<APIresponse> {
		return API.del('PROFILE', `/profiles/${userId}`)
	}

	/**
	 * Загружает аватар пользователя.
	 * @param userId - Идентификатор пользователя.
	 * @param avatarFile - Файл аватара.
	 * @returns Ответ API.
	 */
	async uploadAvatar(userId: string, avatarFile: File): Promise<APIresponse> {
		const formData = new FormData()
		formData.append('avatar', avatarFile)

		const headers = new Headers()
		const csrfToken = API.getCsrfToken()

		if (csrfToken) {
			headers.set('X-CSRF-Token', csrfToken)
		}

		const response = await fetch(
			`${API.SERVICES.PROFILE}/profiles/${userId}/avatar`,
			{
				method: 'POST',
				headers,
				body: formData,
				credentials: 'include',
			},
		)

		return API.parseResponse(response)
	}

	/**
	 * Сохраняет гостевой город из localStorage в профиль текущего пользователя,
	 * если в профиле город не задан.
	 */
	async saveGuestCityToProfile(): Promise<void> {
		const user = store.get(AUTH_USER) as User | null
		if (!user) {
			console.log('User not found, skipping city save')
			return
		}

		const guestCityJson = localStorage.getItem('selected_city')
		if (!guestCityJson) {
			return
		}

		try {
			const guestCity = JSON.parse(guestCityJson)
			if (!guestCity.id || guestCity.id.trim() === '') {
				return
			}

			const profileResponse = await this.getProfile(user.id)
			if (profileResponse.service.success && profileResponse.body) {
				const profile = profileResponse.body as Profile
				if (!profile.city_id || profile.city_id.trim() === '') {
					await this.updateProfile(user.id, { city_id: guestCity.id })
				}
			}

			localStorage.removeItem('selected_city')
		} catch (error) {
			localStorage.removeItem('selected_city')
		}
	}
}

export const profileApi = new ProfileAPI()
