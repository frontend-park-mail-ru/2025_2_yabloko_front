'use strict'

import { API } from '../modules/api'


export interface Order {
    id: string,
    status: string,
    total: number,
    created_at: string,
}

export interface OrderInfo {
	id: string
	status: string
	total: number
	created_at: string
	items: OrderItem[]
}

export interface OrderItem {

    id: string,
    name: string,
    card_img: string,
    price: string,
    quantity: number,
}

export class OrderApi {
	static async getOrders(): Promise<Order[]> {
		const response = await API.get('STORE', '/orders')
		return response.body ?? []
	}

	static async getOrderById(id: string): Promise<Order> {
		const response = await API.get('STORE', `/orders/${id}`)
		return response.body ?? null
	}

    static async createOrder() {
        const response = await API.post('STORE', `/orders`)
		return response.body ?? null
    }

	static async getOrderStatusById(id: string): Promise<string> {
		const response = await API.get('STORE', `/order/${id}/status`)
		return response.body ?? null
	}

	static async fakePayment(): Promise<void> {
		await API.get('STORE', '/fake-payment')
	}
}