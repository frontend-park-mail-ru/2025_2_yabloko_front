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
			scrollPosition: 0,
		}
	},

	async onMounted() {
		this.loadRecommendations()
	},

	async loadRecommendations() {
		this.updateState({ loading: true })
		try {
			const items = await StoreApi.getRecommendedItems(20)
			this.updateState({ items, loading: false })
		} catch (error) {
			this.updateState({ loading: false })
		}
	},

	scrollLeft() {
		const container = this.refs.carousel as HTMLElement
		container.scrollLeft -= 300
		this.updateState({ scrollPosition: container.scrollLeft })
	},

	scrollRight() {
		const container = this.refs.carousel as HTMLElement
		container.scrollLeft += 300
		this.updateState({ scrollPosition: container.scrollLeft })
	},

	handleItemClick(itemId: string, storeId: string) {
		navigate(`/store/${storeId}`)
	},

	render() {
		const { items, loading } = this.state

		return (
			<div class={styles.carouselContainer}>
				<h3 class={styles.title}>Рекомендуем</h3>

				<div class={styles.carouselWrapper}>
					<button class={styles.scrollButton} onClick={() => this.scrollLeft()}>
						‹
					</button>

					<div ref="carousel" class={styles.carousel}>
						{loading ? (
							<div class={styles.loading}>Загрузка...</div>
						) : items.length === 0 ? (
							<div class={styles.empty}>Нет рекомендаций</div>
						) : (
							items.map(item => (
								<div
									key={item.id}
									class={styles.item}
									onClick={() => this.handleItemClick(item.id, item.store_id)}
								>
									<ProductCard
										product={{
											id: item.id,
											name: item.name,
											description: '',
											price: item.price,
											card_img: item.card_img,
										}}
									/>
								</div>
							))
						)}
					</div>

					<button
						class={styles.scrollButton}
						onClick={() => this.scrollRight()}
					>
						›
					</button>
				</div>
			</div>
		)
	},
})
