interface Address {
	value: string
	data: {
		city: string
		street: string
		house: string
		flat: string
	}
}

export class SuggestApi {
	private static API_KEY = '9cac2298e78980a1f52ef2ebf849cc76305a405b'
	private static BASE_URL =
		'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'

	static async suggestAddress(query: string, city: string): Promise<any[]> {
		const request = {
			query: query,
			count: 5,
			locations: [{ city: city }],
			from_bound: { value: 'street' },
			to_bound: { value: 'house' },
		}

		const response = await fetch(this.BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Token ${this.API_KEY}`,
			},
			body: JSON.stringify(request),
		})

		const data = await response.json()

        console.log('Raw suggestions:', data.suggestions)

		return (
			data.suggestions?.map((suggestion: any) => ({
				...suggestion,
				displayValue: this.removeCityFromAddress(suggestion.value, city),
			})) || []
		)
	}

	private static removeCityFromAddress(address: string, city: string): string {
		if (!address || !city) return address

		const pattern = `г ${city}, `
		return address.startsWith(pattern) ? address.slice(pattern.length) : address
	}
}
