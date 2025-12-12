import { defineComponent } from '@antiquemouse/framework'
import { OrderApi } from '../../modules/orderApi'
import { StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import styles from './PaymentForm.module.scss'

interface PaymentFormProps {
	total: number
	promoCode: string
	comment: string
	onPromoChange: (code: string) => void
}

interface PaymentFormState {
	finalPrice: number
}

export const PaymentForm = defineComponent({
	props: [] as (keyof PaymentFormProps)[],

	state(): PaymentFormState {
		return {
			finalPrice: this.props.total,
		}
	},

	async handlePromo() {
		const discount = await OrderApi.checkPromo(this.props.promoCode)
		if (discount.absoluteDiscount != 0) {
			this.updateState({
				finalPrice: this.props.total - discount.absoluteDiscount,
			})
		} else if (discount.relativeDiscount != 0) {
			this.updateState({
				finalPrice: this.props.total * (1 - discount.relativeDiscount / 100),
			})
		}
	},

	async handlePay() {
		const isNotEmpty = (await StoreApi.getUserCart()).items.length
		if (isNotEmpty != 0) {
			const response = await OrderApi.createOrder(
				false,
				this.props.comment,
				this.props.promoCode,
			)
			const payParams = {
				order_id: response.id,
				amount: this.state.finalPrice.toString(),
				currency: 'RUB',
				description: 'Этот функциона в разработке',
				return_url: window.location.origin + `/orders/${response.id}`,
			}
			await OrderApi.yooKassaPayment(payParams)
		}
	},

	render() {
		const props = this.props as PaymentFormProps

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
					<div class={styles.payment__row}>
						<div>{this.state.finalPrice} ₽</div>
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
