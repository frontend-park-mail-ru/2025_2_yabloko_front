import { defineComponent } from '@antiquemouse/framework'
import styles from './History.module.scss'
import { OrderComponent } from '../OrderComponent/OrderComponent'
import { navigate } from '../../modules/router'
import { OrderApi } from '../../modules/orderApi'

interface HistoryProps {
	onClose: () => void
}

export const History = defineComponent({
	state() {
		return {
			orders: [] as any[],
		}
	},

	async onMounted() {
		try {
			const orders = await OrderApi.getOrders({limit: 4})
			this.updateState({ orders })
		} catch (err) {
			console.log(err)
			this.updateState({ orders: [] })
		}
	},

	render() {
		const props = this.props as HistoryProps
		const { orders } = this.state

		return (
			<div
				class={styles.history}
				on={{
					click: (e: Event) => {
						if (e.target === e.currentTarget) {
							props.onClose()
						}
					},
				}}
			>
				<div class={styles.history__container}>
					<div class={styles.history__header}>
						<h3 class={styles.history__title}>История заказов</h3>
						<button class={styles.history__close} on={{ click: props.onClose }}>
							✕
						</button>
					</div>

					<div class={styles.history__body}>
						<div>
							{orders.length > 0 ? (
								orders.map(order => (
									<OrderComponent
										id={order.id}
										date={order.created_at}
										total={order.total}
										status={order.status}
										//handleClick={navigate(`/orders/${order.id}`)}
									/>
								))
							) : (
								<p class={styles.historyEmpty}>История пуста</p>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	},
})
