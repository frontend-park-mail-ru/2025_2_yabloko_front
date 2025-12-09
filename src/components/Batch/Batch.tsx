import { defineComponent } from '@antiquemouse/framework'
import { Store, StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from './Batch.module.scss'

interface BatchState {
	stores: Store[]
	isLoading: boolean
	currentFilterType: string
	currentFilterId: string
}

export const Batch = defineComponent({
	state(): BatchState {
		return {
			stores: [],
			isLoading: true,
			currentFilterType: this.props.filterType || 'all',
			currentFilterId: this.props.filterId || 'all',
		}
	},

	async onMounted() {
		await this.loadStores()
	},

	async loadStores() {
		try {
			const params: any = { limit: 12 }

			const filterType = this.state.currentFilterType
			const filterId = this.state.currentFilterId

			console.log('Current filter:', filterType, filterId)

			if (filterType === 'tag' && filterId !== 'all') {
				params.tag_id = [filterId]
			} else if (filterType === 'category' && filterId !== 'all') {
				params.category_id = [filterId]
			}

			console.log('Loading stores with params:', params)
			const stores = await StoreApi.getStores(params)
			this.updateState({ stores, isLoading: false })
		} catch (error) {
			console.warn('Error loading stores:', error)
			this.updateState({ isLoading: false })
		}
	},

	async updateFilter() {
		const newType = this.props.filterType || 'all'
		const newId = this.props.filterId || 'all'

		if (
			newType !== this.state.currentFilterType ||
			newId !== this.state.currentFilterId
		) {
			this.updateState({
				currentFilterType: newType,
				currentFilterId: newId,
				isLoading: true,
				stores: [],
			})
			await this.loadStores()
		}
	},

	render() {
		this.updateFilter()

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
			</div>
		)
	},
})
