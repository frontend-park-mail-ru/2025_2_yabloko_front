import { defineComponent } from '@antiquemouse/framework'
import { Item } from '../../modules/storeApi'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductsBatch.module.scss'

interface ProductsBatchProps {
	products: Item[]
	onAddToCart?: (productId: string) => void
}

export const ProductsBatch = defineComponent({
	render() {
		const props = this.props as ProductsBatchProps
		const { products, onAddToCart } = props

		return (
			<div class={styles.storeProducts}>
				<div class={styles.storeProducts__grid}>
					{products.map(product => (
						<ProductCard product={product} onAddToCart={onAddToCart} />
					))}
				</div>
			</div>
		)
	},
})
