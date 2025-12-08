import { defineComponent } from '@antiquemouse/framework'
import styles from './OrderComponent.module.scss'

interface OrderComponentProps {
	id: string
	date: string
	total: number
	status: string
	handleClick?: any
}
const formatDate = (dateString: string): string => {
	const date = new Date(dateString)
	return date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}
const getStatusColor = (status: string): string => {
	const statusColors: Record<string, string> = {
		pending: 'var(--color-yellow)',
		paid: 'var(--color-green)',
		on_the_way: 'var(--color-blue)',
		delivered: 'var(--color-purple)',
		cancelled: 'var(--color-red)',
	}

	return statusColors[status] || 'var(--color-gray)'
}

const getStatusText = (status: string): string => {
	const statusTexts: Record<string, string> = {
		pending: 'Ожидает оплаты',
		paid: 'Оплачен',
		on_the_way: 'В пути',
		delivered: 'Доставлен',
		cancelled: 'Отменен',
	}

	return statusTexts[status] || status
}

export const OrderComponent = defineComponent({
	render() {
		const props = this.props as OrderComponentProps
		const formattedDate = formatDate(props.date)
		const statusColor = getStatusColor(props.status)
		const statusText = getStatusText(props.status)

		return (
			<div class={styles.cartItem} on={{ click: props.handleClick }}>
				<div class={styles.cartItem__info}>
					<div class={styles.cartItem__name}>
						Заказ № {props.id.substring(0, 8)}
					</div>
					<div class={styles.cartItem__date}>Дата: {formattedDate}</div>
					<div class={styles.cartItem__price}>
						Сумма: {props.total.toLocaleString('ru-RU')} ₽
					</div>
					<div class={styles.cartItem__status} style={`color: ${statusColor}`}>
						Статус: {statusText}
					</div>
				</div>
			</div>
		)
	},
})
