import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Carousel.module.scss'

export const Carousel = defineComponent({
	state() {
		return {
			items: [] as any[],
			loading: false,
			currentIndex: 0,
		}
	},

	async onMounted() {
		this.loadRecommendations()
	},

	async loadRecommendations() {
		this.updateState({ loading: true })
		try {
			const items = await StoreApi.getRecommendedItems(5)
			this.updateState({
				items,
				loading: false,
			})
		} catch (error) {
			this.updateState({
				loading: false,
			})
		}
	},

	nextItem() {
		const { items, currentIndex } = this.state
		if (items.length === 0) return
		console.log('Next clicked')

		const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
		this.updateState({ currentIndex: nextIndex })
	},

	prevItem() {
		const { items, currentIndex } = this.state
		if (items.length === 0) return
		console.log('Prev clicked') 

		const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
		this.updateState({ currentIndex: prevIndex })
	},

	handleItemClick(itemId: string, storeId: string) {
		navigate(`/store/${storeId}`)
	},

	render() {
		const { items, loading, currentIndex } = this.state

		if (!loading && (!items || items.length === 0)) {
			return <div></div>
		}

		const currentItem = items[currentIndex]

		return (
			<div class={styles.carouselContainer}>
				<h3 class={styles.title}>Рекомендуем</h3>

				<div class={styles.wrapper}>
					<button
						class={`${styles.button} ${styles.buttonLeft}`}
						onClick={(e: Event) => {
							e.preventDefault()
							e.stopPropagation()
							this.prevItem()
						}}
					>
						‹
					</button>

					<div class={styles.center}>
						{loading ? (
							<div class={styles.loading}>Загрузка...</div>
						) : (
							<div
								class={styles.item}
								onClick={() =>
									this.handleItemClick(currentItem.id, currentItem.store_id)
								}
							>
								<ProductCard
									product={{
										id: currentItem.id,
										name: currentItem.name,
										description: '',
										price: currentItem.price,
										card_img: `/images/items/${currentItem.card_img}`,
									}}
									large={true}
								/>
							</div>
						)}
					</div>

					<button
						class={`${styles.button} ${styles.buttonRight}`}
						onClick={(e: Event) => {
							e.preventDefault()
							e.stopPropagation()
							this.nextItem()
						}}
					>
						›
					</button>
				</div>
			</div>
		)
	},
})
