'use strict';

import { API, APIresponse } from '../modules/api';

// (ваши интерфейсы остаются без изменений)
export interface Store {
	id: string;
	name: string;
	card_img: string;
	rating: number | string;
	description?: string;
	address?: string;
	open_at?: string;
	closed_at?: string;
	city_id?: string;
	tags?: string[];
	delivery_time?: string;
}

export interface GetStoresParams {
	limit?: number;
	lastId?: string;
	tagId?: string;
	sorted?: string;
	desc?: boolean;
	search?: string;
	category?: string;
	cityID?: string;
}

export interface StoresResponse {
	stores: Store[];
	total?: number;
	hasMore?: boolean;
	lastId?: string;
}

export interface CartUpdate {
	items: { id: string; quantity: number }[];
}

export interface UpdateResponse {
	id: string;
}

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	card_img: string;
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
		};

		const response = await API.post('/stores', body);
		// Сервер возвращает { service: ..., body: StoresResponse | Store[] }
		const data = response.body;

		return data
	}

	/**
	 * Получить магазин по ID
	 */
	static async getStoreById(storeId: string): Promise<Store | null> {
		const response = await API.get(`/stores/${storeId}`);
		// Предполагаем, что при 404 сервер может вернуть body: null или {}
		return response.body ?? null;
	}

	/**
	 * Поиск магазинов
	 */
	static async searchStores(query: string, limit: number = 12): Promise<Store[]> {
		return this.getStores({ search: query, limit });
	}

	/**
	 * Получить магазины по категории
	 */
	static async getStoresByCategory(category: string, limit: number = 12): Promise<Store[]> {
		return this.getStores({ category, limit });
	}

	/**
	 * Получить магазины по городу
	 */
	static async getStoresByCity(cityId: string, limit: number = 12): Promise<Store[]> {
		return this.getStores({ cityID: cityId, limit });
	}

	/**
	 * Получить магазины по тегу
	 */
	static async getStoresByTag(tagId: string, limit: number = 12): Promise<Store[]> {
		return this.getStores({ tagId, limit });
	}
}