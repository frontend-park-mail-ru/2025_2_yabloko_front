import { defineComponent } from '../../framework/component'
import { Store, StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import styles from  './Batch.module.scss'

interface BatchState {
	stores: Store[]
	isLoading: boolean
	hasMore: boolean
	lastId: string | null
}

export const Batch = defineComponent({
	state(): BatchState {
		return {
			stores: [],
			isLoading: false,
			hasMore: true,
			lastId: null,
		}
	},

	observer: null as IntersectionObserver | null,

	async loadStores(isLoadMore: boolean = false) {
		if (this.state.isLoading) {
			return
		}

		this.updateState({ isLoading: true })

		try {
			const response = await StoreApi.getStores({
				limit: this.props.batchSize || 12,
				lastId: isLoadMore ? this.state.lastId : null,
			})

			if (response && Array.isArray(response)) {
				const newStores = response
				const newLastId = newStores[newStores.length - 1]?.id || null

				this.updateState({
					stores: isLoadMore ? [...this.state.stores, ...newStores] : newStores,
					lastId: newLastId,
					hasMore: newStores.length === (this.props.batchSize || 12),
					isLoading: false,
				})
			}
		} catch (error) {
			console.warn(error)
			this.updateState({ isLoading: false })
		}
	},

	loadMore() {
		if (this.state.hasMore && !this.state.isLoading) {
			this.loadStores(true)
		}
	},

	onMounted() {
		this.loadStores()

		queueMicrotask(() => {
			const trigger = document.getElementById('loadTrigger')
			if (trigger && this.state.hasMore) {
				this.observer = new IntersectionObserver(entries => {
					if (
						entries[0].isIntersecting &&
						this.state.hasMore &&
						!this.state.isLoading
					) {
						this.loadMore()
					}
				})
				this.observer.observe(trigger)
			}
		})
	},

	onUnmounted() {
		if (this.observer) {
			this.observer.disconnect()
		}
	},

	render() {
		const { stores, isLoading, hasMore } = this.state

		return (
			<div class={styles.batch}>
				<div class={styles.batch__grid}>
					{stores.map(store => (
						<Card
							key={store.store_id}
							store={store}
							onCardClick={this.props.onCardClick}
						/>
					))}
				</div>
				<div
					id="loadTrigger"
					class="batch-trigger"
					style={{ display: hasMore && !isLoading ? 'block' : 'none' }}
				></div>
			</div>
		)
	},
})
