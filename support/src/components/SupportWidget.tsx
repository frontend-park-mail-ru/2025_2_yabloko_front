import { defineComponent } from '@antiquemouse/framework'
import { CreateTicketRequest, supportApi } from '../modules/api'

export const SupportApp = defineComponent({
	state() {
		return {
			currentTab: 'create' as 'create' | 'list' | 'ticket',
			formData: {
				category: '' as CreateTicketRequest['category'],
				title: '',
				description: '',
			},
			tickets: [] as any[],
			currentTicket: null as any,
			loading: false,
			error: '',
		}
	},

	async createTicket() {
		this.updateState({ loading: true, error: '' })

		try {
			await supportApi.createTicket(this.state.formData)
			this.updateState({
				formData: { category: '', title: '', description: '' },
				currentTab: 'list',
			})
			await this.loadTickets()
		} catch (error) {
			this.updateState({ error: error.message })
		} finally {
			this.updateState({ loading: false })
		}
	},

	async loadTickets() {
		try {
			const tickets = await supportApi.getMyTickets()
			this.updateState({ tickets })
		} catch (error) {
			this.updateState({ error: error.message })
		}
	},

	render() {
		return (
			<div style={{ padding: '20px' }}>
				<h2>🛟 Техподдержка</h2>

\				{this.state.currentTab === 'create' && (
					<div>
						<select
							value={this.state.formData.category}
							onChange={(e: any) =>
								this.updateState({
									formData: {
										...this.state.formData,
										category: e.target.value,
									},
								})
							}
						>
							<option value="">Выберите категорию</option>
							<option value="bug">🐛 Баг</option>
							<option value="feature">💡 Предложение</option>
							<option value="complaint">😠 Жалоба</option>
						</select>

						<input
							type="text"
							placeholder="Тема"
							value={this.state.formData.title}
							onChange={(e: any) =>
								this.updateState({
									formData: { ...this.state.formData, title: e.target.value },
								})
							}
						/>

						<textarea
							placeholder="Описание"
							value={this.state.formData.description}
							onChange={(e: any) =>
								this.updateState({
									formData: {
										...this.state.formData,
										description: e.target.value,
									},
								})
							}
						/>

						<button
							onClick={() => this.createTicket()}
							disabled={this.state.loading}
						>
							{this.state.loading ? 'Отправка...' : 'Создать тикет'}
						</button>
					</div>
				)}
			</div>
		)
	},
})
