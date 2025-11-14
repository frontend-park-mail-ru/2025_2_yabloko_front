'use strict'

import { API, APIresponse } from './api'

export interface UserData {
	email: string
	password: string
}

export interface AuthResponse {
	user_id: string
	email: string
	token: string
	expires: string
}

/**
 * Класс для взаимодействия с API аутентификации и управления пользователем.
 */
export class UserAPI {
	/**
	 * Регистрирует нового пользователя.
	 * @param {UserData} userdata - Данные пользователя: email и пароль.
	 * @returns {Promise<APIresponse>} Ответ API, содержащий статус операции и, при успехе, дополнительные данные в `body`.
	 */
	async register(userdata: UserData): Promise<APIresponse> {
		return API.post('AUTH', '/auth/signup', {
			email: userdata.email,
			password: userdata.password,
		})
	}

	/**
	 * Выполняет вход пользователя в систему.
	 * @param {UserData} userdata - Данные для входа: email и пароль.
	 * @returns {Promise<APIresponse>} Ответ API. При успехе в `body` может содержаться токен или профиль пользователя.
	 */
	async login(userdata: UserData): Promise<APIresponse> {
		return API.post('AUTH', '/auth/login', {
			email: userdata.email,
			password: userdata.password,
		})
	}

	/**
	 * Выполняет выход пользователя из системы (уничтожает сессию на сервере).
	 * @returns {Promise<APIresponse>} Ответ API, подтверждающий завершение сессии.
	 */
	async logout(): Promise<APIresponse> {
		return API.post('AUTH', '/auth/logout')
	}

	/**
	 * Обновляет access-токен с использованием refresh-токена.
	 * @returns {Promise<APIresponse>} Ответ API с новым токеном (обычно в `body.token`).
	 */
	async refresh(): Promise<APIresponse> {
		return API.post('AUTH', '/auth/refresh')
	}
}

/**
 * Экземпляр API для работы с пользователем.
 * @type {UserAPI}
 */
export const userApi = new UserAPI()
