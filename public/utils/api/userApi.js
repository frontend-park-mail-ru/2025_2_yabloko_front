'use strict'
import { URL } from "../const.js";


import {ajax} from './API.js';

export class UserAPI {
constructor() {
    this.baseURL = URL;

}

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

export const userApi = new UserAPI();