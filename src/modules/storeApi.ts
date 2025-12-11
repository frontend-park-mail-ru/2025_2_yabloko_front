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
	tags_id?: string[]
	categories_id?: string[]
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

export interface Category {
	id: string
	name: string
}

export interface SearchStoresWithItemsParams {
	search?: string
	limit?: number
	last_id?: string
	tag_id?: string[]
	category_id?: string[]
	city_id?: string
	item_type?: string[]
	min_price?: number
	max_price?: number
}

export interface StoreWithItems {
	store: Store
	items: Item[]
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
		if (params.category) queryParams.append('category_id', params.category)
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
		items: { id: string; quantity: number }[],
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

	static async getTags(): Promise<Tag[]> {
		const response = await API.get('STORE', '/stores/tags')
		return response.body ?? []
	}

	/**
	 * Получить список категорий
	 */
	static async getCategories(): Promise<Category[]> {
		const response = await API.get('STORE', '/stores/categories')
		return response.body ?? []
	}

	// В файле StoreApi добавляем:

/**
 * Поиск магазинов с товарами
 * Эластик-серч по магазинам и товарам одновременно
 */
static async searchStoresWithItems(
  params: SearchStoresWithItemsParams = {}
): Promise<StoreWithItems[]> {
  const queryParams = new URLSearchParams()

  if (params.search) queryParams.append('search', params.search)
  if (params.limit) queryParams.append('limit', params.limit.toString())
  if (params.last_id) queryParams.append('last_id', params.last_id)
  if (params.city_id) queryParams.append('city_id', params.city_id)
  if (params.min_price) queryParams.append('min_price', params.min_price.toString())
  if (params.max_price) queryParams.append('max_price', params.max_price.toString())
  
  // Массивы параметров
  if (params.tag_id?.length) {
    params.tag_id.forEach(tag => queryParams.append('tag_id', tag))
  }
  if (params.category_id?.length) {
    params.category_id.forEach(cat => queryParams.append('category_id', cat))
  }
  if (params.item_type?.length) {
    params.item_type.forEach(type => queryParams.append('item_type', type))
  }

  const url = `/stores/search/items${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
  
  try {
    const response = await API.get('STORE', url)
    // Предполагаем, что бекенд возвращает массив магазинов с товарами
    return response.body || []
  } catch (error) {
    console.error('Search stores with items error:', error)
    return []
  }
}
}
