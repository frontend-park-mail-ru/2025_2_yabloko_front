import { Button } from '../../components/Button/Button'
import { CartItem as CartItemComponent } from '../../components/CartItem/CartItem'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PaymentForm } from '../../components/PaymentForm/PaymentForm'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import {
	getCartFromStorage,
	removeFromCart,
	updateQuantity,
} from '../../modules/cartManager'
import { Profile, profileApi } from '../../modules/profileApi'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
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
	items: any[]
	isLoading: boolean
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
			isLoading: false,
		}
	},

	async onMounted() {
		await Promise.all([this.loadCartItems(), this.loadUserProfile()])
	},

	async loadCartItems() {
		const items = await getCartFromStorage()
		this.updateState({ items })
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		if (!user) {
			this.updateState({ isLoading: false })
			return
		}

		this.updateState({ isLoading: true })

		try {
			const response = await profileApi.getProfile(user.id)

			if (response.service.success) {
				const profile = response.body as Profile

				const addressParts = this.parseAddress(profile.address || '')
				let cityName = ''
				if (profile.city_id) {
					cityName = await this.getCityName(profile.city_id)
				}

				this.updateState({
					email: profile.email || '',
					fullName: profile.name || '',
					city: cityName || '',
					street: addressParts.street,
					house: addressParts.house,
					building: addressParts.building,
					apartment: addressParts.apartment,
					comment: '',
					isLoading: false,
				})
			} else {
				this.updateState({ isLoading: false })
			}
		} catch (error) {
			console.error('Failed to load user profile:', error)
			this.updateState({ isLoading: false })
		}
	},

	async getCityName(id: string) {
		try {
			const cities = await StoreApi.getCities()
			const city = cities.find(city => city.id === id)
			return city ? city.name : ''
		} catch (error) {
			console.error('Failed to get city name:', error)
			return ''
		}
	},

	parseAddress(address: string) {
		const parts = address.split(',')
		return {
			city: '',
			street: parts[0]?.trim() || '',
			house: parts[1]?.trim() || '',
			building: parts[2]?.trim() || '',
			apartment: parts[3]?.trim() || '',
		}
	},

	handleFieldChange(field: string, value: string) {
		this.updateState({ [field]: value } as Partial<CheckoutPageState>)
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
								city={this.state.city}
								street={this.state.street}
								house={this.state.house}
								building={this.state.building}
								apartment={this.state.apartment}
								comment={this.state.comment}
								onFieldChange={(f, v) => this.handleFieldChange(f, v)}
								readonly={true} 
							/>
							<div class={styles.checkoutPage__editNotice}>
								<small>
									Для изменения данных профиля перейдите в{' '}
									<a
										href="/profile"
										onClick={e => {
											e.preventDefault()
											navigate('/profile')
										}}
									>
										личный кабинет
									</a>
								</small>
							</div>
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
								onPromoChange={code =>
									this.handleFieldChange('promoCode', code)
								}
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
