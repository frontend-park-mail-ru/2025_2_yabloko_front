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


}
