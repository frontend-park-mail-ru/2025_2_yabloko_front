import { defineComponent } from '@antiquemouse/framework'
import { StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from './Batch.module.scss'

export const Batch = defineComponent({
	state() {
		return {
			stores: [],
			isLoading: true,
			currentFilter: { type: 'all', id: 'all' },
		}
	},

	async onMounted() {
		await this.loadStores()
	},

	async loadStores() {
		try {
			const params: any = { limit: 12 }

			const filterType = this.state.currentFilter.type
			const filterId = this.state.currentFilter.id

			if (filterType === 'tag' && filterId !== 'all') {
				params.tagId = filterId
			} else if (filterType === 'category' && filterId !== 'all') {
				params.category = filterId
			}

			console.log('Loading stores with:', params)
			const stores = await StoreApi.getStores(params)
			this.updateState({ stores, isLoading: false })
		} catch (error) {
			console.error('Error loading stores:', error)
			this.updateState({ isLoading: false })
		}
	},

	async checkAndUpdate() {
		const newType = this.props.filterType || 'all'
		const newId = this.props.filterId || 'all'

		if (
			newType !== this.state.currentFilter.type ||
			newId !== this.state.currentFilter.id
		) {
			console.log('Filter changed, reloading...')
			this.updateState({
				currentFilter: { type: newType, id: newId },
				isLoading: true,
				stores: [],
			})
			await this.loadStores()
		}
	},

	render() {
		this.checkAndUpdate()

		const { stores, isLoading } = this.state

		if (isLoading) {
			return (
				<div style={{ padding: '40px', textAlign: 'center' }}>Загрузка...</div>
			)
		}

		return (
			<div class={styles.batch}>
				<div class={styles.batch__grid}>
					{stores.map(store => (
						<Card
							key={store.id}
							store={store}
							onCardClick={() => this.props.onCardClick?.(store.id)}
						/>
					))}
				</div>

				{stores.length === 0 && (
					<div style={{ padding: '40px', textAlign: 'center' }}>
						Нет ресторанов по выбранному фильтру
					</div>
				)}
			</div>
		)
	},
})
