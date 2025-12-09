import { defineComponent } from '@antiquemouse/framework'
import { Store, StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from './Batch.module.scss'

interface BatchState {
	stores: Store[]
	isLoading: boolean
}

export const Batch = defineComponent({
	state(): BatchState {
		return {
			stores: [],
			isLoading: true,
		}
	},

	async onMounted() {
		await this.loadStores()
	},

	async loadStores() {
		try {
			const params: any = { limit: 12 }

			const { filterType, filterId } = this.props

			if (filterType === 'tag' && filterId !== 'all') {
				params.tag_id = [filterId]
			} else if (filterType === 'category' && filterId !== 'all') {
				params.category_id = [filterId]
			}

			const stores = await StoreApi.getStores(params)
			this.updateState({ stores, isLoading: false })
		} catch (error) {
			console.warn('Error loading stores:', error)
			this.updateState({ isLoading: false })
		}
	},

	previousFilter: null as string | null,

	async checkAndReload() {
		const currentFilter = `${this.props.filterType}-${this.props.filterId}`
		if (currentFilter !== this.previousFilter) {
			this.previousFilter = currentFilter
			await this.loadStores()
		}
	},

	render() {
		this.checkAndReload()

		const { stores, isLoading } = this.state

		if (isLoading) {
			return <div>Загрузка...</div>
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
