'use strict'

export interface APIresponse {
	service: {
		success: string
		error: string
	}
	body: any
}

export class API {
	public static readonly SERVICES = {
		AUTH: 'http://127.0.0.1:8082/api/v0',
		PROFILE: 'http://127.0.0.1:8081/api/v0',
		STORE: 'http://127.0.0.1:8080/api/v0',
	}

	private static csrfRequest: Promise<string> | null = null

	public static getCsrfToken(): string | null {
		const name = 'csrf_token'
		const value = `; ${document.cookie}`
		const parts = value.split(`; ${name}=`)
		if (parts.length === 2) {
			return parts.pop()!.split(';').shift() || null
		}
		return null
	}

	static async ensureCsrfToken(): Promise<string> {
		// Если уже есть активный запрос на получение CSRF, ждем его
		if (this.csrfRequest) {
			return await this.csrfRequest
		}

		// Проверяем, есть ли уже токен в куках
		let csrfToken = this.getCsrfToken()
		if (csrfToken) {
			return csrfToken
		}

		// Если токена нет, запрашиваем новый
		this.csrfRequest = this.requestNewCsrfToken()
		try {
			csrfToken = await this.csrfRequest
			return csrfToken
		} finally {
			this.csrfRequest = null
		}
	}

	static async requestNewCsrfToken(): Promise<string> {
		try {
			const response = await fetch(`${this.SERVICES.AUTH}/csrf`, {
				method: 'GET',
				credentials: 'include',
			})

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: Failed to get CSRF token`)
			}

			const data = await response.json()
			const newCsrfToken = data.csrf_token || this.getCsrfToken()

			if (!newCsrfToken) {
				throw new Error('CSRF token not received')
			}

			return newCsrfToken
		} catch (error) {
			console.error('Failed to get CSRF token:', error)
			throw error
		}
	}

	static async fetch(
		service: keyof typeof API.SERVICES,
		inputRelative: string,
		init?: RequestInit,
	): Promise<Response> {
		if (!init) init = {}

		const headers = new Headers(init.headers)

		// Для методов, требующих CSRF защиту
		if (init.method && ['POST', 'PUT', 'DELETE'].includes(init.method)) {
			let csrfToken = this.getCsrfToken()

			// Если токена нет, запрашиваем новый
			if (!csrfToken) {
				csrfToken = await this.ensureCsrfToken()
			}

			if (csrfToken) {
				headers.set('X-CSRF-Token', csrfToken)
			}
		}

		if (!(init.body instanceof FormData) && !headers.has('Content-Type')) {
			headers.set('Content-Type', 'application/json')
		}

		const finalInit: RequestInit = {
			...init,
			headers,
			credentials: 'include',
		}

		const baseUrl = API.SERVICES[service]
		const fullUrl = baseUrl + inputRelative

		const response = await fetch(fullUrl, finalInit)
		return response
	}

	static async post(
		service: keyof typeof API.SERVICES,
		url: string,
		data?: any,
	): Promise<APIresponse> {
		const response = await API.fetch(service, url, {
			method: 'POST',
			body: data ? JSON.stringify(data) : undefined,
		})
		return this.parseResponse(response)
	}

	static async get(
		service: keyof typeof API.SERVICES,
		url: string,
	): Promise<APIresponse> {
		const response = await API.fetch(service, url, {
			method: 'GET',
		})
		return this.parseResponse(response)
	}

	static async put(
		service: keyof typeof API.SERVICES,
		url: string,
		data?: any,
	): Promise<APIresponse> {
		const response = await this.fetch(service, url, {
			method: 'PUT',
			body: data ? JSON.stringify(data) : undefined,
		})
		return this.parseResponse(response)
	}

	static async del(
		service: keyof typeof API.SERVICES,
		url: string,
	): Promise<APIresponse> {
		const response = await this.fetch(service, url, { method: 'DELETE' })
		return this.parseResponse(response)
	}

	public static async parseResponse(response: Response): Promise<APIresponse> {
		const isError = !response.ok

		try {
			const rawData = await response.json()

			if (isError) {
				const errorMessage =
					typeof rawData === 'object' && rawData !== null
						? rawData.message || rawData.error || `HTTP ${response.status}`
						: `HTTP ${response.status}`

				return {
					service: {
						success: '',
						error: errorMessage,
					},
					body: rawData,
				}
			}

			return {
				service: { success: 'OK', error: '' },
				body: rawData,
			}
		} catch {
			return {
				service: {
					success: '',
					error: `HTTP ${response.status}: failed to parse response`,
				},
				body: null,
			}
		}
	}
}
