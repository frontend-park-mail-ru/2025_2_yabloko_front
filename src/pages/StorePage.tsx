import { Cart } from '../components/Cart/Cart'
import { Navbar } from '../components/Navbar/Navbar'
import { ProductsBatch } from '../components/ProductsBatch/ProductsBatch'
import { StoreInfo } from '../components/StoreInfo/StoreInfo'
import { defineComponent } from '../framework/component'
import { navigate } from '../modules/router'
import { addToCart } from '../modules/cartManager'
import { Item, Store, StoreApi } from '../modules/storeApi'

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
				<div class="store-page">
					<Navbar
						userAuthed={false}
						onLogoClick={() => {
							import('../modules/router').then(router => router.navigate('/'))
						}}
						//Search={query => console.log('Search:', query)}
						onLoginClick={() => {
							import('../modules/router').then(router =>
								router.navigate('/auth'),
							)
						}}
						onCartClick={() => this.openCart()}
					/>
					<div
						style={{
							width: '90%',
							minHeight: '80vh',
							padding: '2rem',
							boxSizing: 'border-box',
							margin: '0 auto',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<button
							style={{ marginTop: '16px' }}
							onClick={() => window.history.back()}
						>
							Назад
						</button>
					</div>
					{isCartOpen ? <Cart onClose={() => this.closeCart()} /> : null}
				</div>
			)
		}

		return (
			<div class="store-page">
				<Navbar
					userAuthed={false}
					onLogoClick={() => {
						navigate('/')
					}}
					//onSearch={query => console.log('Search:', query)}
					onLoginClick={() => {
						navigate('/auth')
					}}
					onCartClick={() => this.openCart()}
				/>
				<div
					style={{
						width: '90%',
						minHeight: '80vh',
						padding: '2rem',
						boxSizing: 'border-box',
						margin: '0 auto',
					}}
				>
					<StoreInfo store={store} />

					<div style={{ marginTop: '24px' }}>
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
									})
								}
							}}
						/>
					</div>
				</div>
				{isCartOpen ? <Cart onClose={() => this.closeCart()} /> : null}
			</div>
		)
	},
})
