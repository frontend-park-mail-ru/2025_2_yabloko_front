import { defineComponent } from '@antiquemouse/framework'
import { Store, StoreApi } from '../../modules/storeApi'
import styles from './StoreInfo.module.scss'

interface StoreInfoProps {
	store: Store
}

export const StoreInfo = defineComponent({
	async onMounted() {
		if (this.props.store.city_id) {
			const cityName = await this.getCityName(this.props.store.city_id)
			this.updateState({ cityName })
		}
	},

	async getCityName(id: string): Promise<string> {
		const cities = await StoreApi.getCities()
		const city = cities.find(city => city.id === id)
		return city ? city.name : ''
	},

	render() {
		const props = this.props as StoreInfoProps
		const { store } = props
		const { cityName } = this.state

		return (
			<div class={styles.storeInfo}>
				<div class={styles.storeInfo__imageWrapper}>
					{store.card_img && (
						<img
							class={styles.storeInfo__image}
							src={`http://90.156.218.233:8080/images/stores/${store.card_img}`}
							alt={store.name}
						/>
					)}

					<div class={styles.storeInfoPrimary}>
						<h1 class={styles.storeInfo__title}>{store.name}</h1>
						{store.rating && (
							<span class={styles.storeInfo__rating}>
								Рейтинг: {store.rating}
							</span>
						)}
					</div>

					<div class={styles.storeInfoSecondary}>
						{store.address && (
							<div class={styles.storeInfo__detail}>
								<strong>Адрес:</strong> {store.address}
							</div>
						)}

						{store.open_at && store.closed_at && (
							<div class={styles.storeInfo__detail}>
								<strong>Время работы:</strong> {store.open_at.slice(0, -6)} -{' '}
								{store.closed_at.slice(0, -6)}
							</div>
						)}

						{store.city_id && (
							<div class={styles.storeInfo__detail}>
								<strong>Город:</strong> {cityName}
							</div>
						)}
					</div>
				</div>
			</div>
		)
	},
})
