'use strict'

import {ajax} from './API.js';

export class StoreApi {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

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

export const storeApi = new StoreApi();