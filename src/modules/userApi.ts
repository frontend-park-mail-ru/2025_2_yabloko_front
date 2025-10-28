'use strict'

import { API, APIresponse } from './api'

export interface UserData {
	email: string
	password: string
}

export class UserAPI {
	async register(userdata: UserData): Promise<APIresponse> {
		const response = await API.fetch('/auth/signup', {
			method: 'POST',
			body: JSON.stringify({
				service22: {
					email: userdata.email,
					password: userdata.password,
				},
			}),
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await response.text(),
			}
		}

		return response.json()
	}

	async login(userdata: UserData): Promise<APIresponse> {
		const response = await API.fetch('/auth/login', {
			method: 'POST',
			body: JSON.stringify({
				email: userdata.email,
				password: userdata.password,
			}),
		})

		if (!response.ok) {
			const errorText = await response.text()
			let errorResponse
			try {
				errorResponse = JSON.parse(errorText)
			} catch {
				errorResponse = errorText
			}

			throw {
				status: response.status,
				response: errorResponse,
			}
		}

		return response.json()
	}

	async logout(): Promise<APIresponse> {
		const response = await API.fetch('/auth/logout', {
			method: 'POST',
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await response.text(),
			}
		}

		return response.json()
	}

	async refresh(): Promise<APIresponse> {
		const response = await API.fetch('/auth/refresh', {
			method: 'POST',
		})

		if (!response.ok) {
			throw {
				status: response.status,
				response: await response.text(),
			}
		}

		return response.json()
	}
}

export const userApi = new UserAPI()
