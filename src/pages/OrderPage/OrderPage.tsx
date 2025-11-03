import { Button } from '../../components/Button/Button'
import { CartItem as CartItemComponent } from '../../components/CartItem/CartItem'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PaymentSummaryForm } from '../../components/PaymentForm/PaymentForm'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '../../framework/component'
import {
	getCartFromStorage,
	removeFromCart,
	updateQuantity,
} from '../../modules/cartManager'
import { navigate } from '../../modules/router'
import styles from './OrderPage.module.scss'

interface CheckoutPageState {
	email: string
	fullName: string
	region: string
	city: string
	street: string
	house: string
	building: string
	apartment: string
	comment: string
	paymentMethod: 'card' | 'cash' | 'online'
	promoCode: string
	items: ReturnType<typeof getCartFromStorage>
}

export const CheckoutPage = defineComponent({
	state(): CheckoutPageState {
		return {
			email: '',
			fullName: '',
			region: '',
			city: '',
			street: '',
			house: '',
			building: '',
			apartment: '',
			comment: '',
			paymentMethod: 'card',
			promoCode: '',
			items: getCartFromStorage(),
		}
	},

	onMounted() {
		this.updateState({ items: getCartFromStorage() })
	},

	handleFieldChange(field: string, value: string) {
		this.updateState({ [field]: value } as Partial<CheckoutPageState>)
	},

	handlePaymentChange(method: 'card' | 'cash' | 'online') {
		this.updateState({ paymentMethod: method })
	},

	handlePromoChange(code: string) {
		this.updateState({ promoCode: code })
	},

	handleApplyPromo() {
		console.log('Применён промокод:', this.state.promoCode)
	},

	togglePaymentMethod() {
		const methods = ['card', 'cash', 'online'] as const
		const i = methods.indexOf(this.state.paymentMethod)
		this.updateState({ paymentMethod: methods[(i + 1) % methods.length] })
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
		if (!item) return
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

	handleSubmit(e: Event) {
		e.preventDefault()
		const { email, fullName, region, city, street, house, items } = this.state
		if (
			!email ||
			!fullName ||
			!region ||
			!city ||
			!street ||
			!house ||
			items.length === 0
		) {
			alert('Заполните обязательные поля и добавьте товары.')
			return
		}
		console.log('Заказ отправлен', { ...this.state, total: this.getTotal() })
		navigate('/order/success')
	},

	render() {
		const { items } = this.state
		const total = this.getTotal()

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
							<h2>Условия доставки</h2>
							<div class={styles.checkoutPage__conditional}>
								<Button type="button" variant="accent" text="Стандар 0Р" />
								<Button type="button" variant="success" text="Быстро 100Р" />
							</div>
							<PersonalInfo
								email={this.state.email}
								fullName={this.state.fullName}
								region={this.state.region}
								city={this.state.city}
								street={this.state.street}
								house={this.state.house}
								building={this.state.building}
								apartment={this.state.apartment}
								comment={this.state.comment}
								onFieldChange={(f, v) => this.handleFieldChange(f, v)}
							/>
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

							<PaymentSummaryForm
								paymentMethod={this.state.paymentMethod}
								total={total}
								promoCode={this.state.promoCode}
								onPromoChange={code => this.handlePromoChange(code)}
								onApplyPromo={() => this.handleApplyPromo()}
								onChangePayment={() => this.togglePaymentMethod()}
							/>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		)
	},
})
