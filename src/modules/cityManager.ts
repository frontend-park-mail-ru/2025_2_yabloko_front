export interface City {
	id: string
	name: string
}

const CITY_KEY = 'selected_city'

export function loadSelectedCity(): City | null {
	try {
		const data = localStorage.getItem(CITY_KEY)
		return data ? JSON.parse(data) : null
	} catch (error) {
		console.warn(error)
		return null
	}
}

export function saveSelectedCity(city: City): void {
	try {
		localStorage.setItem(CITY_KEY, JSON.stringify(city))
	} catch (e) {
		console.error('Failed to save city', e)
	}
}

export function clearSelectedCity(): void {
	localStorage.removeItem(CITY_KEY)
}
