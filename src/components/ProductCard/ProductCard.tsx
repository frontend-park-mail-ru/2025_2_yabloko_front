import { defineComponent } from '../../framework/component'
import { API } from '../../modules/api'
import styles from './ProductCard.module.scss'

interface Product {
	id: string
	name: string
	description: string
	price: number
	card_img: string
}

interface ProductCardProps {
	product: Product
	onAddToCart?: (productId: string) => void
}

export const ProductCard = defineComponent({
	render() {
		const props = this.props as ProductCardProps
		const { product, onAddToCart } = props

		const handleAddClick = (e: Event) => {
			e.stopPropagation()
			e.preventDefault()
			onAddToCart?.(product.id)
		}

		return (
			<div class={styles.productCard}>
				<div class={styles.productCard__imageWrapper}>
					{product.card_img && (
						<img
							class={styles.productCard__image}
							src={`${API.BASE_URL}/image${product.card_img}`}
							alt={product.name}
						/>
					)}
				</div>

				<div class={styles.productCard__content}>
					<h3 class={styles.productCard__name}>{product.name}</h3>

					{product.description && (
						<p class={styles.productCard__description}>{product.description}</p>
					)}

					<div class={styles.productCard__footer}>
						<div class={styles.productCard__price}>{product.price} ₽</div>
						<button
							class={styles.productCard__addBtn}
							{...{
								on: {
									click: handleAddClick,
								},
							}}
						>
							+
						</button>
					</div>
				</div>
			</div>
		)
	},
})
