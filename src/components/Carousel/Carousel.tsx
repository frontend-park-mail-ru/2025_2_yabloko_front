import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Carousel.module.scss'
import { addToCart } from '../../modules/cartManager'

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
		console.log('Next item, current:', currentIndex, 'total:', items.length)

		const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
		console.log('Next index:', nextIndex)
		this.updateState({ currentIndex: nextIndex })
	},

	prevItem() {
		const { items, currentIndex } = this.state
		if (items.length === 0) return
		console.log('Prev item, current:', currentIndex, 'total:', items.length)

		const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
		console.log('Prev index:', prevIndex)
		this.updateState({ currentIndex: prevIndex })
	},

	handleItemClick(itemId: string, storeId: string) {
		navigate(`/store/${storeId}`)
	},

    
	render() {
		const { items, loading, currentIndex } = this.state
		console.log(
			'Render carousel, currentIndex:',
			currentIndex,
			'items:',
			items.length,
		)

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
						{...{
							on: {
								click: (e: Event) => {
									e.preventDefault()
									e.stopPropagation()
									this.prevItem()
								},
							},
						}}
					>
						‹
					</button>

					<div class={styles.center}>
						{loading ? (
							<div class={styles.loading}>Загрузка...</div>
						) : currentItem ? (
							<div
								class={styles.item}
								{...{
									on: {
										click: () =>
											this.handleItemClick(
												currentItem.id,
												currentItem.store_id,
											),
									},
								}}
							>
								<ProductCard
									product={{
										id: currentItem.id,
										name: currentItem.name,
										description: '',
										price: currentItem.price,
										card_img: `/images/items/${currentItem.card_img}`,
									}}
									onAddToCart={(productId: string) => {
										const itemToAdd = items.find(item => item.id === productId)
										if (itemToAdd) {
											addToCart({
												id: itemToAdd.id,
												name: itemToAdd.name,
												price: itemToAdd.price,
												quantity: 1,
												card_img: itemToAdd.card_img,
												options: [],
											})
										}
									}}
									large={true}
								/>
							</div>
						) : (
							<div class={styles.loading}>Нет товаров</div>
						)}
					</div>

					<button
						class={`${styles.button} ${styles.buttonRight}`}
						{...{
							on: {
								click: (e: Event) => {
									e.preventDefault()
									e.stopPropagation()
									this.nextItem()
								},
							},
						}}
					>
						›
					</button>
				</div>
			</div>
		)
	},
})
