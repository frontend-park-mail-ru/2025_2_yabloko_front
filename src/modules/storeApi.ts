'use strict'

import { API } from '../modules/api'

export interface Store {
	id: string
	name: string
	card_img: string
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
	 * @param {GetStoresParams} params - параметры запроса
	 * @returns {Promise<Store[]>} - список магазинов
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

		const response = await API.fetch('/stores', {
			method: 'POST',
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data = await response.json()

		if (Array.isArray(data)) {
			return data
		} else if (data && Array.isArray(data.stores)) {
			return data.stores
		} else {
			return []
		}
	}

	/**
	 * Получить магазин по ID
	 * @param {string} storeId - ID магазина
	 * @returns {Promise<Store | null>} - магазин
	 */
	static async getStoreById(storeId: string): Promise<Store | null> {
		const response = await API.fetch(`/stores/${storeId}`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Получить типы товаров магазина
	 * @param {string} storeId - ID магазина
	 * @returns {Promise<ItemType[]>} - список типов товаров
	 */
	static async getStoreItemTypes(storeId: string): Promise<ItemType[]> {
		const response = await API.fetch(`/stores/${storeId}/item-types`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Получить товары по типу товара
	 * @param {string} typeId - ID типа товара
	 * @returns {Promise<Item[]>} - список товаров
	 */
	static async getItemsByType(typeId: string): Promise<Item[]> {
		const response = await API.fetch(`/stores/${typeId}/items`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Получить все товары магазина
	 * @param {string} storeId - ID магазина
	 * @returns {Promise<Item[]>} - список всех товаров магазина
	 */
	static async getStoreItems(storeId: string): Promise<Item[]> {
		try {
			const response = await API.fetch(`/stores/${storeId}/items`, {
				method: 'GET',
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()
			return Array.isArray(data) ? data : []
		} catch (error) {
			console.error('Error loading store items:', error)
			return []
		}
	}

	/**
	 * Получить отзывы магазина
	 * @param {string} storeId - ID магазина
	 * @returns {Promise<StoreReview[]>} - список отзывов
	 */
	static async getStoreReviews(storeId: string): Promise<StoreReview[]> {
		const response = await API.fetch(`/stores/${storeId}/reviews`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Получить список городов
	 * @returns {Promise<City[]>} - список городов
	 */
	static async getCities(): Promise<City[]> {
		const response = await API.fetch('/stores/cities', {
			method: 'GET',
			headers: {},
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Получить список тегов
	 * @returns {Promise<Tag[]>} - список тегов
	 */
	static async getTags(): Promise<Tag[]> {
		const response = await API.fetch('/stores/tags', {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		return await response.json()
	}

	/**
	 * Поиск магазинов
	 * @param {string} query - поисковый запрос
	 * @param {number} limit - лимит результатов
	 * @returns {Promise<Store[]>} - список магазинов
	 */
	static async searchStores(
		query: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ search: query, limit })
	}

	/**
	 * Получить магазины по категории
	 * @param {string} category - категория
	 * @param {number} limit - лимит результатов
	 * @returns {Promise<Store[]>} - список магазинов
	 */
	static async getStoresByCategory(
		category: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ category, limit })
	}

	/**
	 * Получить магазины по городу
	 * @param {string} cityId - ID города
	 * @param {number} limit - лимит результатов
	 * @returns {Promise<Store[]>} - список магазинов
	 */
	static async getStoresByCity(
		cityId: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ cityID: cityId, limit })
	}

	/**
	 * Получить магазины по тегу
	 * @param {string} tagId - ID тега
	 * @param {number} limit - лимит результатов
	 * @returns {Promise<Store[]>} - список магазинов
	 */
	static async getStoresByTag(
		tagId: string,
		limit: number = 12,
	): Promise<Store[]> {
		return this.getStores({ tagId, limit })
	}

	// В StoreApi.ts

	/**
	 * Получить корзину пользователя
	 */
	static async getUserCart(userId: string): Promise<Cart[]> {
		const response = await API.fetch(`/users/${userId}/cart`, {
			method: 'GET',
		})
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`)
		}
		return await response.json()
	}

	/**
	 * Обновить корзину
	 */
	static async updateCart(
		cartId: string,
		cartUpdate: CartUpdate,
	): Promise<UpdateResponse> {
		const response = await API.fetch(`/carts/${cartId}`, {
			method: 'PUT',
			body: JSON.stringify(cartUpdate),
		})
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`)
		}
		return await response.json()
	}

	static async syncCity(userId: string, cityId: string): Promise<void> {
		await API.fetch(`/users/${userId}/city`, {
			method: 'POST',
			body: JSON.stringify({ city_id: cityId }),
		})
	}
}
