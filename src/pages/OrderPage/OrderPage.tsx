import { Button } from '../../components/Button/Button'
import { CartItem as CartItemComponent } from '../../components/CartItem/CartItem'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PaymentForm } from '../../components/PaymentForm/PaymentForm'
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
	city: string
	street: string
	house: string
	building: string
	apartment: string
	comment: string
	promoCode: string
	items: []
}

export const CheckoutPage = defineComponent({
	state(): CheckoutPageState {
		return {
			email: '',
			fullName: '',
			city: '',
			street: '',
			house: '',
			building: '',
			apartment: '',
			comment: '',
			promoCode: '',
			items: [],
		}
	},

	async onMounted() {
		const items = await getCartFromStorage()
		this.updateState({ items })
	},

	handleFieldChange(field: string, value: string) {
		this.updateState({ [field]: value } as Partial<CheckoutPageState>)
	},

	async handleIncrease(id: string) {
		const item = this.state.items.find(i => i.id === id)
		if (item) {
			updateQuantity(id, item.quantity + 1)
			this.updateState({ items: getCartFromStorage() })
		}
	},

	async handleDecrease(id: string) {
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

	async handleRemove(id: string) {
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
		const { email, fullName, city, street, house, apartment } = this.state
		if (!email || !fullName || !city || !street || !house || !apartment) {
			alert('Заполните обязательные поля и добавьте товары.')
			return
		}
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
								<Button
									type="button"
									variant="accent"
									disabled={true}
									text="Стандар 0₽"
								/>
								<Button
									type="button"
									variant="success"
									disabled={true}
									text="Быстро 100₽"
								/>
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

							<PaymentForm
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
