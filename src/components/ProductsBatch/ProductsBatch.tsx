import { defineComponent } from '../../framework/component'
import { Item } from '../../modules/storeApi'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductsBatch.css'

interface ProductsBatchProps {
	products: Item[]
	onAddToCart?: (productId: string) => void
}

export const ProductsBatch = defineComponent({
	render() {
		const props = this.props as ProductsBatchProps
		const { products, onAddToCart } = props

		return (
			<div class="store-products">
				<div class="store-products__grid">
					{products.map(product => (
						<ProductCard product={product} onAddToCart={onAddToCart} />
					))}
				</div>
			</div>
		)
	},
})
