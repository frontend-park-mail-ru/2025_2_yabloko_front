'use strict'

export interface APIresponse {
	service: {
		success: string
		error: string
	}
	body: any
}

export class API {
	public static readonly BASE_URL = 'ENV_API_ORIGIN/api/ENV_API_VERSION'

	static async fetch(
		inputRelative: string,
		init?: RequestInit,
	): Promise<Response> {
		if (!init) {
			init = {}
		}

		if (!init.headers) {
			init.headers = { 'Content-Type': 'application/json' }
		}

		init.credentials = 'include'
		const response = await fetch(API.BASE_URL + inputRelative, init)
		return response
	}

	static async post( url: string,data?: any,): Promise<APIresponse> {
		const response = await API.fetch(url, {
			method: 'POST',
			body: data ? JSON.stringify(data) : undefined,
		})
		return this.parseResponse(response)
	}

	static async get(url: string): Promise<APIresponse> {
		const response = await API.fetch(url, {
			method: 'GET',
		})
		return this.parseResponse(response)
	}

	static async put(url: string, data?: any): Promise<APIresponse> {
		const response = await this.fetch(url, {
			method: 'PUT',
			body: data ? JSON.stringify(data) : undefined,
		})
		return this.parseResponse(response)
	}

	static async del(url: string): Promise<APIresponse> {
		const response = await this.fetch(url, { method: 'DELETE' })
		return this.parseResponse(response)
	}

	private static async parseResponse(response: Response): Promise<APIresponse> {
		try {
			const rawData = await response.json()
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
