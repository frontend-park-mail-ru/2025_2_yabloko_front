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
		AUTH: 'http://localhost:8082/api/v0',
		PROFILE: 'http://localhost:8081/api/v0',
		STORE: 'http://localhost:8080/api/v0',
	}

	public static getCsrfToken(): string | null {
		const name = 'csrf_token'
		const value = `; ${document.cookie}`
		const parts = value.split(`; ${name}=`)
		if (parts.length === 2) {
			return parts.pop()!.split(';').shift() || null
		}
		return null
	}

	static async fetch(
		service: keyof typeof API.SERVICES,
		inputRelative: string,
		init?: RequestInit,
	): Promise<Response> {
		if (!init) init = {}

		const headers = new Headers(init.headers)

		if (init.method && ['POST', 'PUT', 'DELETE'].includes(init.method)) {
			await this.ensureCSRFToken(service)
			const csrfToken = this.getCsrfToken()
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

	private static async ensureCSRFToken(
		service: keyof typeof API.SERVICES,
	): Promise<void> {
		if (service === 'AUTH') {
			try {
				await this.get('AUTH', '/csrf')
			} catch (error) {
				console.warn('CSRF token request failed:', error)
			}
		}
	}
}
