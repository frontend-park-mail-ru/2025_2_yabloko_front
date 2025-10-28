'use strict'

export interface APIresponse {
	service22: {
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
}
