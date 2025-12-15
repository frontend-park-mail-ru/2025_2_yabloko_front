import { Button } from '../../components/Button/Button'
import { CartItem as CartItemComponent } from '../../components/CartItem/CartItem'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PaymentForm } from '../../components/PaymentForm/PaymentForm'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '@antiquemouse/framework'
import {
	getCartFromStorage,
	removeFromCart,
	updateQuantity,
} from '../../modules/cartManager'
import { navigate } from '../../modules/router'
import styles from './CheckoutPage.module.scss'

interface CheckoutPageState {
	isFast: boolean;
	promoCode: string
	items: any[]
	isLoading: boolean
}

export const CheckoutPage = defineComponent({
	state(): CheckoutPageState {
		return {
			isFast: false,
			promoCode: '',
			items: [],
			isLoading: false,
		}
	},

	async onMounted() {
		await this.loadCartItems()
	},

	async loadCartItems() {
		const items = await getCartFromStorage()
		this.updateState({ items })
	},

	async handleIncrease(id: string) {
		const item = this.state.items.find(i => i.id === id)
		if (item) {
			await updateQuantity(id, item.quantity + 1)
			const items = await getCartFromStorage()
			this.updateState({ items })
		}
	},

	async handleDecrease(id: string) {
		const item = this.state.items.find(i => i.id === id)
		if (!item) return
		if (item.quantity <= 1) {
			await removeFromCart(id)
			const items = await getCartFromStorage()
			this.updateState({ items })
		} else {
			await updateQuantity(id, item.quantity - 1)
			const items = await getCartFromStorage()
			this.updateState({ items })
		}
	},

	async handleRemove(id: string) {
		await removeFromCart(id)
		const items = await getCartFromStorage()
		this.updateState({ items })
	},

	getTotal(): number {
		let total = this.state.items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0,
		)
		if (this.state.isFast) {
			total += 100
		}
		return total
	},

	handleSubmit(e: Event) {
		e.preventDefault()
		navigate('/order/success')
	},

	render() {
		const { items, isLoading } = this.state
		const total = this.getTotal()

		if (isLoading) {
			return (
				<div class={styles.checkoutPage}>
					<Navbar
						onLogoClick={() => navigate('/')}
						onLoginClick={() => navigate('/auth')}
					/>
					<div class={styles.checkoutPage__loading}>
						<h2>Загрузка данных...</h2>
					</div>
					<Footer />
				</div>
			)
		}

		return (
			<div class={styles.checkoutPage}>
				<Navbar
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
				/>

				<div class={styles.checkoutPage__container}>
					<h1>Оформление заказа</h1>
					<div class={styles.checkoutPage__form}>
						<form on={{ submit: (e: Event) => this.handleSubmit(e) }}>
							<h2>Контактные данные</h2>
							{/* <div class={styles.checkoutPage__conditional}>
								<div class={styles.checkoutPage__conditional}>
									<Button
										type="button"
										variant={!this.state.isFast ? 'accent' : 'secondary'}
										text="Стандарт 0₽"
										onClick={() => this.updateState({ isFast: false })}
									/>
									<Button
										type="button"
										variant={this.state.isFast ? 'success' : 'secondary'}
										text="Быстро 100₽"
										onClick={() => this.updateState({ isFast: true })}
									/>
								</div>
							</div> */}
							<PersonalInfo readonly={true} />
						</form>

						<div class={styles.checkoutPage__order}>
							<div class={styles.checkoutPage__orderCard}>
								<h2 class={styles.checkoutPage__orderTitle}>Ваш заказ</h2>
								<div class={styles.checkoutPage__cartBody}>
									<div class={styles.checkoutPage__cartItems}>
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
							</div>

							<PaymentForm
								total={total}
								isFast={this.state.isFast}
								promoCode={this.state.promoCode}
								onPromoChange={code => this.updateState({ promoCode: code })}
								onApplyPromo={() => {}}
								onChangePayment={() => {}}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	},
})
