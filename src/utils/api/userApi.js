'use strict'
import { URL } from "../const.js";
import {ajax} from './API.js';

/**
 * API для работы с пользователем
 */
export class UserAPI {
    /**
     * Создает экземпляр UserAPI
     * @constructor
     */
    constructor() {
        this.baseURL = URL;
    }

    /**
     * Выполняет вход пользователя в систему
     * @async
     * @param {string} email - Email пользователя
     * @param {string} password - Пароль пользователя
     * @returns {Promise<Object|string>} Промис с данными пользователя или текстовым ответом
     * @throws {Object} Объект ошибки с полями status и response
     */
    login(email, password) {
        return new Promise((resolve, reject) => {
            ajax(
                "POST",
                `${this.baseURL}/api/v0/auth/login`,
                { email, password },
                (status, responseText) => {
                    if (status >= 200 && status < 300) {
                        try {
                            const response = JSON.parse(responseText);
                            resolve(response);
                        } catch (e) {
                            resolve(responseText);
                        }
                    } else {
                        try {
                            const errorResponse = JSON.parse(responseText);
                            reject({ status, response: errorResponse });
                        } catch (e) {
                            reject({ status, response: responseText });
                        }
                    }
                }
            );
        });
    }

    /**
     * Регистрирует нового пользователя
     * @async
     * @param {string} email - Email пользователя
     * @param {string} password - Пароль пользователя
     * @returns {Promise<Object|string>} Промис с данными пользователя или текстовым ответом
     * @throws {Object} Объект ошибки с полями status и responseText
     */
    register(email, password) {
        return new Promise((resolve, reject) => {
            ajax(
                "POST",
                `${this.baseURL}/api/v0/auth/signup`,
                { email, password },
                (status, responseText) => {
                    if (status >= 200 && status < 300) {
                        try {
                            resolve(JSON.parse(responseText));
                        } catch (e) {
                            resolve(responseText);
                        }
                    } else {
                        console.error('Registration failed:', status, responseText);
                        reject({ status, responseText });
                    }
                }
            );
        });
    }

    /**
     * Выполняет выход пользователя из системы
     * @async
     * @returns {Promise<string>} Промис с текстовым ответом сервера
     * @throws {Object} Объект ошибки с полями status и responseText
     */
    logout() {
        return new Promise((resolve, reject) => {
            ajax(
                "POST",
                `${this.baseURL}/api/v0/auth/logout`,
                null,
                (status, responseText) => {
                    if (status >= 200 && status < 300) {
                        resolve(responseText);
                    } else {
                        reject({ status, responseText });
                    }
                }
            );
        });
    }

    /**
     * Обновляет access token с помощью refresh token
     * @async
     * @returns {Promise<Object|string>} Промис с новыми токенами или текстовым ответом
     * @throws {Object} Объект ошибки с полями status и responseText
     */
    refreshToken() {
        return new Promise((resolve, reject) => {
            ajax(
                "POST", 
                `${this.baseURL}/api/v0/auth/refresh`,
                null,
                (status, responseText) => {                
                    if (status >= 200 && status < 300) {
                        try {
                            const response = JSON.parse(responseText);
                            resolve(response);
                        } catch (e) {
                            resolve(responseText);
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
 * Глобальный экземпляр API клиента для работы с пользователем
 * @type {UserAPI}
 */
export const userApi = new UserAPI();