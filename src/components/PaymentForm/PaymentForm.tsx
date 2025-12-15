import { defineComponent } from '@antiquemouse/framework'
import { OrderApi } from '../../modules/orderApi'
import { StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import styles from './PaymentForm.module.scss'

interface PaymentFormProps {
	total: number
	promoCode: string
	isFast: boolean
	comment: string
	onPromoChange: (code: string) => void
}

interface PaymentFormState {
	finalPrice: number
	basePrice: number
}

export const PaymentForm = defineComponent({
	props: [] as (keyof PaymentFormProps)[],

	state(): PaymentFormState {
		return {
			finalPrice: 0,
			basePrice: 0,
		}
	},

	async onMounted() {
		const basePrice = this.props.total
		const priceWithFast = this.props.isFast ? basePrice + 100 : basePrice

		this.updateState({
			finalPrice: priceWithFast,
			basePrice: priceWithFast,
		})
	},

	async handlePromo() {
		const discount = await OrderApi.checkPromo(this.props.promoCode)
		const relativeDiscount = Number(discount.relativeDiscount)
		const absoluteDiscount = Number(discount.absoluteDiscount)

		let discountedPrice = this.state.basePrice

		if (absoluteDiscount != 0) {
			discountedPrice = this.state.basePrice - absoluteDiscount
		} else if (relativeDiscount != 0) {
			discountedPrice = this.state.basePrice * (1 - relativeDiscount / 100)
		}

		this.updateState({
			finalPrice: discountedPrice,
		})
	},

	async handlePay() {
		const amountToPay =
			this.state.finalPrice === 0 ? this.state.basePrice : this.state.finalPrice

		if (amountToPay === 0) {
			return
		}

		const isNotEmpty = (await StoreApi.getUserCart()).items.length
		if (isNotEmpty != 0) {
			const response = await OrderApi.createOrder(
				false,
				this.props.comment,
				this.props.promoCode,
			)
			const payParams = {
				order_id: response.id,
				amount: amountToPay.toString(),
				currency: 'RUB',
				description: 'Этот функционал в разработке',
				return_url: window.location.origin + `/orders/${response.id}`,
			}
			await OrderApi.yooKassaPayment(payParams)
		}
	},

	render() {
		const props = this.props as PaymentFormProps
		const { finalPrice, basePrice } = this.state

		const handlePromoInput = (e: Event) => {
			props.onPromoChange((e.target as HTMLInputElement).value)
		}

		return (
			<div class={styles.payment}>
				<div class={styles.payment__section}>
					<h2>Промокод</h2>
					<div class={styles.payment__row}>
						<div class={styles.payment__field}>
							<input
								type="text"
								placeholder="Введите промокод"
								value={props.promoCode}
								on={{ input: handlePromoInput }}
							/>
						</div>
						<Button
							type="button"
							variant="accent"
							text="Применить"
							onClick={() => {
								this.handlePromo()
							}}
						/>
					</div>
				</div>

				<div class={styles.payment__section}>
					<h2>Итого:</h2>
					<div class={styles.payment__details}>
						{props.isFast ? (
							<div class={styles.payment__fastDelivery}>
								<div>Быстрая доставка: +100 ₽</div>
								<div>Базовая сумма: {props.total} ₽</div>
							</div>
						) : null}
					</div>
					<div class={styles.payment__row}>
						<div class={styles.payment__total}>
							{finalPrice === 0 ? basePrice : finalPrice} ₽
						</div>
						<Button
							type="button"
							variant="success"
							text="Оплатить"
							onClick={() => {
								this.handlePay()
							}}
						/>
					</div>
				</div>
			</div>
		)
	},
})
