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

export interface GetOrderParams {
	limit?: number
	lastId?: string
	status?: string
	desc?: boolean
}

export class OrderApi {
	static async getOrders(params: GetOrderParams = {}): Promise<Order[]> {
		const queryParams = new URLSearchParams()

		if (params.limit) queryParams.append('limit', params.limit.toString())
		if (params.lastId) queryParams.append('lastId', params.lastId)
		if (params.status) queryParams.append('status', params.status)
		if (params.desc !== undefined)
			queryParams.append('desc', params.desc.toString())

		const queryString = queryParams.toString()
		const url = `/orders${queryString ? `?${queryString}` : ''}`

		const response = await API.get('ORDER', url)
		return response.body ?? []
	}

	static async getOrderById(id: string): Promise<Order> {
		const response = await API.get('ORDER', `/orders/${id}`)
		return response.body ?? null
	}

	static async createOrder(): Promise<OrderInfo> {
		const response = await API.post('ORDER', `/orders`)
		return response.body ?? null
	}

	static async getOrderStatusById(id: string): Promise<string> {
		const response = await API.get('ORDER', `/orders/${id}/status`)
		return response.body ?? null
	}

	static async fakePayment(params: FakePaymentParams): Promise<void> {
		const queryParams = new URLSearchParams()
		queryParams.append('order_id', params.order_id)
		queryParams.append('return_url', params.return_url)
		if (params.price) queryParams.append('price', params.price)

		const url = `http://90.156.218.233:8084/api/v0/fake-payment?${queryParams.toString()}`
		window.location.href = url
	}

	static async yooKassaPayment(params: FakePaymentParams): Promise<void> {
		const response = await API.post('ORDER', `/payments`, params)

		if (response.service.success) {
			window.location.href = response.body.return_url
		}
	}
}