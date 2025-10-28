'use strict'

import {ajax} from './API.js';

/**
 *  API клиент для работы с магазинами
 */
export class StoreApi {
    /**
     * Создает экземпляр StoreApi
     * @constructor
     * @param {string} baseURL - Базовый URL для API запросов
     */
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    /**
     * Получает список магазинов/ресторанов
     * @async
     * @param {Object} [params={}] - Параметры запроса
     * @param {number} [params.limit=12] - Количество магазинов для возврата
     * @param {string} [params.lastId=""] - ID последнего магазина
     * @param {string} [params.tagId=""] - ID тега
     * @param {string} [params.sorted=""] - Поле для сортировки
     * @param {boolean} [params.desc=false] - Направление сортировки (true - по убыванию)
     * @returns {Promise<Object>} Промис с данными магазинов
     * @throws {Object} Объект ошибки с полями status и error/responseText
     */
    getStores(params = {}) {
        return new Promise((resolve, reject) => {
            const url = `${this.baseURL}/api/v0/stores`;
            
            const body = {
                limit: params.limit || 12,
                last_id: params.lastId || "",
                tag_id: params.tagId || "",
                sorted: params.sorted || "",
                desc: params.desc || false
            };

            ajax(
                "POST",
                url,
                body,
                (status, responseText) => {
                    if (status >= 200 && status < 300) {
                        try {
                            const response = JSON.parse(responseText);
                            resolve(response);
                        } catch (e) {
                            reject({ status, error: "Invalid JSON response" });
                        }
                    } else {
                        reject({ status, responseText });
                    }
                }
            );
        });
    }
}

/**
 * Экземпляр API клиента для работы с магазинами
 * @type {StoreApi}
 */
export const storeApi = new StoreApi();