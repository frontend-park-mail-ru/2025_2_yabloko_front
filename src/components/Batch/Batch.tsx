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

			const filterType = this.props.filterType || 'all'
			const filterId = this.props.filterId || 'all'

			if (filterType === 'tag' && filterId !== 'all') {
				params.tagId = filterId
			} else if (filterType === 'category' && filterId !== 'all') {
				params.category = filterId
			}

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
			return (
				<div style={{ padding: '40px', textAlign: 'center' }}></div>
			)
		}

		return (
			<div class={styles.batch}>
				<div class={styles.batch__grid}>
					{stores.map(store => (
						<Card
							key={store.id}
							store={store}
							onCardClick={this.props.onCardClick() && (() => this.props.onCardClick.store.id)}
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
