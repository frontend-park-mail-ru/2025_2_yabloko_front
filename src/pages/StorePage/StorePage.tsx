import { Cart } from '../../components/Cart/Cart'
import { Navbar } from '../../components/Navbar/Navbar'
import { ProductsBatch } from '../../components/ProductsBatch/ProductsBatch'
import { StoreInfo } from '../../components/StoreInfo/StoreInfo'
import { defineComponent } from '@antiquemouse/framework'
import { addToCart } from '../../modules/cartManager'
import { navigate } from '../../modules/router'
import { Item, Store, StoreApi } from '../../modules/storeApi'
import styles from './StorePage.module.scss'

interface StorePageState {
	store: Store | null
	products: Item[]
	isCartOpen: boolean
}

export const StorePage = defineComponent({
	state(): StorePageState {
		return {
			store: null,
			products: [],
			isCartOpen: false,
		}
	},

	openCart() {
		this.updateState({ isCartOpen: true })
	},

	closeCart() {
		this.updateState({ isCartOpen: false })
	},

	async onMounted() {
		await this.loadStore()
	},

	async loadStore() {
		const pathParts = window.location.pathname.split('/')
		const storeId = pathParts[pathParts.length - 1]

		if (!storeId || storeId === 'undefined') {
			return
		}

		try {
			const store = await StoreApi.getStoreById(storeId)
			const products = await StoreApi.getStoreItems(storeId)
			if (store) {
				this.updateState({ store, products })
			}
		} catch (error) {
			console.error('Error loading store:', error)
		}
	},

	render() {
		const { store, products, isCartOpen } = this.state

		if (!store) {
			return (
				<div class={styles.storePage}>
					<Navbar
						userAuthed={false}
						onLogoClick={() => {
							navigate('/')
						}}
						onLoginClick={() => {
							navigate('/auth')
						}}
						onCartClick={() => this.openCart()}
					/>
					<div class={styles.storePage__container}></div>
					{isCartOpen ? <Cart onClose={() => this.closeCart()} /> : null}
				</div>
			)
		}

		return (
			<div class={styles.storePage}>
				<Navbar
					onLogoClick={() => {
						navigate('/')
					}}
					onLoginClick={() => {
						navigate('/auth')
					}}
					onCartClick={() => this.openCart()}
				/>
				<div class={styles.storePage__container}
				>
					<StoreInfo store={store} />
					
					<ProductsBatch
						products={products}
						onAddToCart={productId => {
							const product = products.find(p => p.id === productId)
							if (product) {
								addToCart({
									id: product.id,
									name: product.name,
									price: product.price,
									quantity: 1,
									card_img: product.card_img,
									options: []
								})
							}
						}}
					/>

				</div>
				{isCartOpen ? <Cart onClose={() => this.closeCart()} /> : null}
			</div>
		)
	},
})
