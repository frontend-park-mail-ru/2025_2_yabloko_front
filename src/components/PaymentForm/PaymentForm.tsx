import { defineComponent } from '../../framework/component'
import { Button } from '../Button/Button'
import styles from './PaymentForm.module.scss'

interface PaymentFormProps {
	paymentMethod: 'card' | 'cash' | 'online'
	total: number
	promoCode: string
	onPromoChange: (code: string) => void
	onApplyPromo: () => void
	onChangePayment: () => void
}


export const PaymentForm = defineComponent({
	props: [] as (keyof PaymentFormProps)[],

	render() {
		const props = this.props as PaymentFormProps

		const handlePromoInput = (e: Event) => {
			props.onPromoChange((e.target as HTMLInputElement).value)
		}

		const getPaymentLabel = () => {
			switch (props.paymentMethod) {
				case 'card':
					return 'Банковской картой'
				case 'cash':
					return 'Наличными'
				case 'online':
					return 'Онлайн (СБП и др.)'
				default:
					return 'Выберите способ оплаты'
			}
		}

		return (
			<div class={styles.payment}>
				<div class={styles.payment__section}>
					<h2>Способ оплаты</h2>
					<div class={styles.payment__row}>
						<div class="payment__value">{getPaymentLabel()}</div>
						<Button
							type="button"
							variant="accent"
							text="Изменить"
							onClick={() => props.onChangePayment()}
						/>
					</div>
				</div>

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
							onClick={() => props.onApplyPromo()}
						/>
					</div>
				</div>

				<div class={styles.payment__section}>
					<h2>Итого:</h2>
					<div class={styles.payment__row}>
						<div>{props.total} ₽</div>
						<Button
							type="button"
							variant="success"
							text="Оплатить"
							onClick={() =>
								alert("Заказ за наш счет!")
							}
						/>
					</div>
				</div>
			</div>
		)
	},
})
