import { defineComponent } from '../../framework/component'
import {
	getCartFromStorage,
	removeFromCart,
	updateQuantity,
} from '../../modules/cartManager'
import { CartItem as CartItemComponent } from '../CartItem/CartItem'
import './Cart.css'

interface CartProps {
	onClose: () => void
}

export const Cart = defineComponent({
	state() {
		return {
			items: getCartFromStorage(),
		}
	},

	onMounted() {
		this.updateState({ items: getCartFromStorage() })
	},

	handleIncrease(id: string) {
		const item = this.state.items.find(i => i.id === id)
		if (item) {
			updateQuantity(id, item.quantity + 1)
			this.updateState({ items: getCartFromStorage() })
		}
	},

	handleDecrease(id: string) {
		const item = this.state.items.find(i => i.id === id)
		if (!item) {
			return
		}

		if (item.quantity <= 1) {
			removeFromCart(id)
			this.updateState({ items: getCartFromStorage() })
		} else {
			updateQuantity(id, item.quantity - 1)
			this.updateState({ items: getCartFromStorage() })
		}
	},

	handleRemove(id: string) {
		removeFromCart(id)
		this.updateState({ items: getCartFromStorage() })
	},

	getTotal(): number {
		return this.state.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0,
		)
	},

	render() {
		const props = this.props as CartProps
		const { items } = this.state
		const total = this.getTotal()

		return (
			<div
				class="cart-overlay"
				on={{
					click: (e: Event) => {
						if (e.target === e.currentTarget) {
							props.onClose()
						}
					},
				}}
			>
				<div class="cart-panel">
					<div class="cart-header">
						<h3 class="cart-title">Корзина</h3>
						<div class="cart-total">Итого: {total} ₽</div>
						<button class="cart-close" on={{ click: props.onClose }}>
							✕
						</button>
					</div>

					<div class="cart-body">
						<div class="cart-items">
							{items.length > 0 ? (
								items.map(item => (
									<CartItemComponent
										key={item.id}
										id={item.id}
										name={item.name}
										price={item.price}
										quantity={item.quantity}
										card_img={item.card_img}
										onIncrease={() => this.handleIncrease(item.id)}
										onDecrease={() => this.handleDecrease(item.id)}
										onRemove={() => this.handleRemove(item.id)}
									/>
								))
							) : (
								<p class="cart-empty">Корзина пуста</p>
							)}
						</div>
					</div>

					<div class="cart-footer">
						<button class="cart-checkout">Перейти к оформлению</button>
					</div>
				</div>
			</div>
		)
	},
})
