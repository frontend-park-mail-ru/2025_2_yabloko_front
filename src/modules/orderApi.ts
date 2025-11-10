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

export interface FakePaymentParams {
    order_id?: string,
    price?: string,
    return_url?: string,
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

    static async createOrder(): Promise<OrderInfo>{
        const response = await API.post('STORE', `/orders`)
		return response.body ?? null
    }

	static async getOrderStatusById(id: string): Promise<string> {
		const response = await API.get('STORE', `/orders/${id}/status`)
		return response.body ?? null
	}

	static async fakePayment(params: FakePaymentParams): Promise<void> {

        const queryParams = new URLSearchParams()
        queryParams.append('order_id', params.order_id)
        queryParams.append('return_url', params.return_url)
        if (params.price) queryParams.append('price', params.price)

        const url = `/api/v0/fake-payment?${queryParams.toString()}`
        window.open(url, '_blank', 'width=600,height=700')
	}
}