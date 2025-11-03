import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import {
	getCartFromStorage,
	removeFromCart,
	updateQuantity,
} from '../../modules/cartManager'
import { navigate } from '../../modules/router'
import { store } from '../../modules/store'
import { AUTH_IS_AUTHENTICATED } from '../../utils/auth'
import { Button } from '../Button/Button'
import { CartItem as CartItemComponent } from '../CartItem/CartItem'
import styles from './Cart.module.scss'

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
				class={styles.cart}
				on={{
					click: (e: Event) => {
						if (e.target === e.currentTarget) {
							props.onClose()
						}
					},
				}}
			>
				<div class={styles.cart__container}>
					<div class={styles.cart__header}>
						<h3 class={styles.cart__title}>Корзина</h3>
						<div class={styles.cart__total}>Итого: {total} ₽</div>
						<button class={styles.cart__close} on={{ click: props.onClose }}>
							✕
						</button>
					</div>

					<div class={styles.cart__body}>
						<div>
							{items.length > 0 ? (
								items.map(item => (
									<CartItemComponent
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
								<p class={styles.cartEmpty}>Корзина пуста</p>
							)}
						</div>
					</div>

					<div class={styles.cart__footer}>
						<Button
							variant="accent"
							text="Перейти к оформлению"
							className={styles.cart__button}
							onClick={() => {
								if (store.get(AUTH_IS_AUTHENTICATED) === true) {
									navigate('/checkout')
								} else {
									navigate('/auth')
								}
							}}
						/>
					</div>
				</div>
			</div>
		)
	},
})
