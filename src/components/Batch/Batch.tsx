import { defineComponent } from '@antiquemouse/framework'
import { Store, StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from './Batch.module.scss'

interface BatchState {
	stores: Store[]
	isLoading: boolean
	tagId: string | null
}

export const Batch = defineComponent({
	state(): BatchState {
		return {
			stores: [],
			isLoading: true,
			tagId: null,
		}
	},

	async onMounted() {
		await this.loadStores()
	},

	async loadStores() {
		this.updateState({ isLoading: true })

		try {
			const params: any = {
				limit: 12,
			}

			if (this.props.tagId) {
				params.tag_id = [this.props.tagId]
			}
			else if (this.props.filter && this.props.filter !== 'all') {
				params.search = this.props.filter
			}

			const stores = await StoreApi.getStores(params)
			this.updateState({ stores, isLoading: false })
		} catch (error) {
			console.warn('Error loading stores:', error)
			this.updateState({ isLoading: false })
		}
	},

	async componentDidUpdate(prevProps: any) {
		if (
			prevProps.tagId !== this.props.tagId ||
			prevProps.filter !== this.props.filter
		) {
			await this.loadStores()
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
