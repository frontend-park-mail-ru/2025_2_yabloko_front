'use strict'

import { API } from '../modules/api'

export interface Store {
	id: string
	name: string
	card_img?: string
	rating: number | string
	description?: string
	address?: string
	open_at?: string
	closed_at?: string
	city_id?: string
	tags?: string[]
	delivery_time?: string
}

export interface Item {
	id: string
	name: string
	description: string
	price: number
	card_img: string
	types_id?: string[]
}

export interface ItemType {
	id: string
	name: string
}

export interface StoreReview {
	comment: string
	created_at: string
	rating: number
	user_name: string
}

export interface City {
	id: string
	name: string
}

export interface Tag {
	id: string
	name: string
}

export interface GetStoresParams {
	limit?: number
	lastId?: string
	tagId?: string
	sorted?: string
	desc?: boolean
	search?: string
	category?: string
	cityID?: string
}

export interface StoresResponse {
	stores: Store[]
	total?: number
	hasMore?: boolean
	lastId?: string
}

export interface CartUpdate {
	items: { id: string; quantity: number }[]
}

export interface UpdateResponse {
	id: string
}

export interface CartItem {
	id: string
	name: string
	price: number
	quantity: number
	options: Array<{
		name: string
		value: string
	}>
	card_img: string
}

export interface Cart {
	id: string
	items: CartItem[]
}

export class StoreApi {
	/**
	 * Получить список магазинов
	 */
	static async getStores(params: GetStoresParams = {}): Promise<Store[]> {
		const queryParams = new URLSearchParams()

		if (params.limit) queryParams.append('limit', params.limit.toString())
		if (params.lastId) queryParams.append('last_id', params.lastId)
		if (params.tagId) queryParams.append('tag_id', params.tagId)
		if (params.sorted) queryParams.append('sorted', params.sorted)
		if (params.desc !== undefined)
			queryParams.append('desc', params.desc.toString())
		if (params.search) queryParams.append('search', params.search)
		if (params.category) queryParams.append('category', params.category)
		if (params.cityID) queryParams.append('city_id', params.cityID)

		const queryString = queryParams.toString()
		const url = `/stores${queryString ? `?${queryString}` : ''}`

		const response = await API.get('STORE', url)
		const data = response.body

		return data
	}

	/**
	 * Получить магазин по ID
	 */
	static async getStoreById(storeId: string): Promise<Store | null> {
		const response = await API.get('STORE', `/stores/${storeId}`)
		return response.body ?? null
	}

	/**
	 * Поиск магазинов
	 */
	static async searchStores(
		query: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ search: query, limit })
	}

	/**
	 * Получить магазины по категории
	 */
	static async getStoresByCategory(
		category: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ category, limit })
	}

	/**
	 * Получить магазины по городу
	 */
	static async getStoresByCity(
		cityId: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ cityID: cityId, limit })
	}

	/**
	 * Получить магазины по тегу
	 */
	static async getStoresByTag(
		tagId: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ tagId, limit })
	}

	/**
	 * Получить список товаров магазина по его ID
	 * @param storeId - UUID магазина
	 * @returns Массив товаров магазина
	 */
	static async getStoreItems(storeId: string): Promise<Item[]> {
		const response = await API.get('STORE', `/stores/${storeId}/items`)
		return Array.isArray(response.body) ? response.body : []
	}

	/**
	 * Получить корзину пользователя
	 */
	static async getUserCart(): Promise<{
		user_id: string
		items: CartItem[]
		total_price: number
	}> {
		const response = await API.get('STORE', '/cart')
		if (response.body && typeof response.body === 'object') {
			return {
				user_id: response.body.user_id || '',
				items: Array.isArray(response.body.items) ? response.body.items : [],
				total_price: response.body.total_price || 0,
			}
		}
		return {
			user_id: '',
			items: [],
			total_price: 0,
		}
	}

	/**
	 * Обновить корзину
	 */
	static async updateCart(
		items: { item_id: string; store_id: string; quantity: number }[],
	): Promise<void> {
		await API.put('STORE', '/cart', { items })
	}
	/**
	 * Синхронизировать выбранный город пользователя
	 */
	static async syncCity(userId: string, cityId: string): Promise<void> {
		await API.post('STORE', `/users/${userId}/city`, { city_id: cityId })
	}

	static async getCities(): Promise<City[]> {
		const response = await API.get('STORE', `/stores/cities`)
		return response.body ?? []
	}
}
