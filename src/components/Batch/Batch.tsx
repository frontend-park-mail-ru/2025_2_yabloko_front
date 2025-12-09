import { defineComponent } from '@antiquemouse/framework'
import { StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from './Batch.module.scss'

export const Batch = defineComponent({
	state() {
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

			if (this.props.filterType === 'tag' && this.props.filterId !== 'all') {
				params.tagId = this.props.filterId 
			} else if (
				this.props.filterType === 'category' &&
				this.props.filterId !== 'all'
			) {
				params.category = this.props.filterId 
			}

			console.log('Batch params:', params)
			const stores = await StoreApi.getStores(params)
			this.updateState({ stores, isLoading: false })
		} catch (error) {
			console.error('Error loading stores:', error)
			this.updateState({ isLoading: false })
		}
	},

	render() {
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
