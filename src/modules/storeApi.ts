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
		const body = {
			limit: params.limit || 12,
			last_id: params.lastId || '',
			tag_id: params.tagId || '',
			sorted: params.sorted || '',
			desc: params.desc || false,
			search: params.search || '',
			category: params.category || '',
			cityID: params.cityID || '',
		}

		const response = await API.post('/stores', body)
		const data = response.body

		return data
	}

	/**
	 * Получить магазин по ID
	 */
	static async getStoreById(storeId: string): Promise<Store | null> {
		const response = await API.get(`/stores/${storeId}`)
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
		const response = await API.get(`/stores/${storeId}/items`)
		return Array.isArray(response.body) ? response.body : []
	}

	/**
	 * Получить корзину пользователя
	 */
	static async getUserCart(userId: string): Promise<Cart[]> {
		const response = await API.get(`/users/${userId}/cart`)
		return Array.isArray(response.body) ? response.body : []
	}

	/**
	 * Обновить корзину
	 */
	static async updateCart(
		cartId: string,
		cartUpdate: CartUpdate,
	): Promise<UpdateResponse> {
		const response = await API.put(`/carts/${cartId}`, cartUpdate)
		return response.body
	}

	/**
	 * Синхронизировать выбранный город пользователя
	 */
	static async syncCity(userId: string, cityId: string): Promise<void> {
		await API.post(`/users/${userId}/city`, { city_id: cityId })
	}

	static async getCities(): Promise<City[]> {
		const response = await API.get(`/stores/cities`)
		return response.body ?? []
	}
}
