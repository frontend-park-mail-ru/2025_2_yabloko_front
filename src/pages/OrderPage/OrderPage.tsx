import { defineComponent } from '@antiquemouse/framework'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { OrderApi } from '../../modules/orderApi'
import { navigate } from '../../modules/router'
import styles from './OrderPage.module.scss'

export const OrderPage = defineComponent({
	state() {
		return {
			order: null as any,
			isLoading: true,
		}
	},

	async onMounted() {
		try {
			const orderId = window.location.pathname.split('/').pop() || ''
			const orderData = await OrderApi.getOrderById(orderId)
			this.updateState({ order: orderData, isLoading: false })
		} catch (error) {
			console.error('Error loading order:', error)
			this.updateState({ isLoading: false })
		}
	},

	render() {
		const { order, isLoading } = this.state

		if (isLoading) {
			return (
				<div class={styles.orderPage}>
					<Navbar />
					<div>Загрузка...</div>
					<Footer />
				</div>
			)
		}

		if (!order) {
			return (
				<div class={styles.orderPage}>
					<Navbar />
					<div>Заказ не найден</div>
					<Footer />
				</div>
			)
		}

		const formattedDate = new Date(order.created_at).toLocaleDateString('ru-RU')

		return (
			<div class={styles.orderPage}>
				<Navbar />

				<div class={styles.orderPage__container}>
					<div class={styles.orderPage__header}>
						<h1>Заказ №{order.id.substring(0, 8)}</h1>
						<button on={{ click: () => navigate('/orders') }}>← Назад</button>
					</div>

					<div class={styles.orderPage__content}>
						<div class={styles.orderPage__info}>
							<div>
								<div>
									<strong>Статус:</strong> {order.status}
								</div>
								<div>
									<strong>Дата:</strong> {formattedDate}
								</div>
								<div>
									<strong>Итого:</strong> {order.total.toLocaleString('ru-RU')}{' '}
									₽
								</div>
							</div>
						</div>

						<div class={styles.orderPage__items}>
							<h3>Товары:</h3>
							{order.items.map(item => (
								<div class={styles.orderItem}>
									<img src={item.card_img} class={styles.orderItem__image} />
									<div>
										<div class={styles.orderItem__name}>{item.name}</div>
										<div>
											{item.price} ₽ × {item.quantity}
										</div>
										<div>
											<strong>{item.price * item.quantity} ₽</strong>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		)
	},
})
