const API_BASE = 'http://localhost:8085'

export interface CreateTicketRequest {
	category: 'bug' | 'feature' | 'complaint'
	title: string
	description: string
	user_name?: string
	user_email?: string
}

export interface Ticket {
	id: string
	category: string
	status: 'open' | 'in_progress' | 'closed'
	title: string
	description: string
	created_at: string
	updated_at: string
}

export interface Message {
	id: string
	content: string
	user_role: 'user' | 'admin' | 'support'
	created_at: string
}

class SupportApi {
	private guestId: string

	constructor() {
		this.guestId = localStorage.getItem('guest_id') || this.generateGuestId()
	}

	private generateGuestId(): string {
		const id = 'guest_' + Math.random().toString(36).substr(2, 9)
		localStorage.setItem('guest_id', id)
		return id
	}

	private getHeaders(): HeadersInit {
		const headers: HeadersInit = {
			'Content-Type': 'application/json',
			'X-Guest-ID': this.guestId,
		}

		const token = localStorage.getItem('auth_token')
		if (token) {
			headers['Authorization'] = `Bearer ${token}`
		}

		return headers
	}

	async createTicket(ticketData: CreateTicketRequest): Promise<Ticket> {
		const response = await fetch(`${API_BASE}/tickets`, {
			method: 'POST',
			headers: this.getHeaders(),
			body: JSON.stringify(ticketData),
		})

		if (!response.ok) {
			throw new Error(`Failed to create ticket: ${response.statusText}`)
		}

		return response.json()
	}

	async getMyTickets(): Promise<Ticket[]> {
		const response = await fetch(`${API_BASE}/tickets`, {
			method: 'GET',
			headers: this.getHeaders(),
		})

		if (!response.ok) {
			throw new Error(`Failed to get tickets: ${response.statusText}`)
		}

		return response.json()
	}

	async getTicket(
		ticketId: string,
	): Promise<{ ticket: Ticket; messages: Message[] }> {
		const response = await fetch(`${API_BASE}/tickets/${ticketId}`, {
			method: 'GET',
			headers: this.getHeaders(),
		})

		if (!response.ok) {
			throw new Error(`Failed to get ticket: ${response.statusText}`)
		}

		return response.json()
	}

	async sendMessage(ticketId: string, content: string): Promise<void> {
		const response = await fetch(`${API_BASE}/tickets/${ticketId}/messages`, {
			method: 'POST',
			headers: this.getHeaders(),
			body: JSON.stringify({ content }),
		})

		if (!response.ok) {
			throw new Error(`Failed to send message: ${response.statusText}`)
		}
	}

	async rateTicket(
		ticketId: string,
		rating: number,
		comment?: string,
	): Promise<void> {
		const response = await fetch(`${API_BASE}/tickets/${ticketId}/rating`, {
			method: 'POST',
			headers: this.getHeaders(),
			body: JSON.stringify({ rating, comment }),
		})

		if (!response.ok) {
			throw new Error(`Failed to rate ticket: ${response.statusText}`)
		}
	}
}

export const supportApi = new SupportApi()
