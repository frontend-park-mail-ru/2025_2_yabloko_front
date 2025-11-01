import { defineComponent } from '../../framework/component'
import { API } from '../../modules/api'
import './ProductCard.css'

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
			<div class="product-card">
				<div class="product-card__image-wrapper">
					{product.card_img && (
						<img
							class="product-card__image"
							src={`${API.BASE_URL}/image${product.card_img}`}
							alt={product.name}
						/>
					)}
				</div>

				<div class="product-card__content">
					<h3 class="product-card__name">{product.name}</h3>

					{product.description && (
						<p class="product-card__description">{product.description}</p>
					)}

					<div class="product-card__footer">
						<div class="product-card__price">{product.price} ₽</div>
						<button
							class="product-card__add-btn"
							{...{
								on: {
									click: handleAddClick,
								}
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
