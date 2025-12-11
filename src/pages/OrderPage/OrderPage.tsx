import { defineComponent } from '@antiquemouse/framework'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { OrderApi } from '../../modules/orderApi'
import styles from './OrderPage.module.scss'
import { API } from '../../modules/api'
import { navigate } from '../../modules/router'

export const OrderPage = defineComponent({
	state() {
		return {
			order: null as any,
            stores: [],
			isLoading: true,
		}
	},

	async onMounted() {
		try {
			const orderId = window.location.pathname.split('/').pop() || ''
			const orderData = await OrderApi.getOrderById(orderId)
            const stores = this.getStoreList(orderData);
			this.updateState({ order: orderData, stores: stores, isLoading: false })
		} catch (error) {
			console.error('Error loading order:', error)
			this.updateState({ isLoading: false })
		}
	},

    getStoreList(order: any) {
    const seen = new Set();
    const uniqueStores = [];

    for (const store of order.stores) {
        if (!seen.has(store.id)) {
        seen.add(store.id);
        uniqueStores.push({ id: store.id, name: store.name });
        }
    }

    return uniqueStores;
    },

	render() {
		const { order, stores, isLoading } = this.state

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
				<Navbar
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
					onCartClick={() => this.openCart()}
					onHistoryClick={() => this.openHistory()}
				/>

				<div class={styles.orderPage__container}>
					<h1>Заказ № {order.id.substring(0, 8)}</h1>
					<div class={styles.orderPage__content}>
						<div class={styles.orderPage__info}>
							<div>
								<div>
									<strong>Статус:</strong> {order.status}
								</div>
								<div>
									<strong>Дата:</strong> {formattedDate}
								</div>
								<h3>Рестораны:</h3>
								{stores.map(store => (
									<div class={styles.orderItem}>
										<div>
											<strong
                                                {...{
                                                    on: {
                                                        click: (e: Event) => {
                                                            e.stopPropagation()
                                                            navigate(`/store/${store.id}`)
                                                        }
                                                    },
                                                }}
											>
												{store.name}
											</strong>
										</div>
									</div>
								))}
								<h3>Доставка и оплата:</h3>
								<div>
									<strong>Итого:</strong> {order.total.toLocaleString('ru-RU')}{' '}
									₽
								</div>
							</div>
						</div>

						<div class={styles.orderPage__items}>
							<h3>Состав заказа:</h3>
							{order.stores.flatMap(store =>
								store.items.map(item => (
									<div class={styles.orderItem} key={item.id}>
										<img
											src={`${API.SERVICES.PICS}/images/items/${item.card_img}`}
											class={styles.orderItem__image}
										/>
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
								)),
							)}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		)
	},
})
