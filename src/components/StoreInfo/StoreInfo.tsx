import { defineComponent } from '@antiquemouse/framework'
import { Store, StoreApi } from '../../modules/storeApi'
import { Review } from '../Review/Review'
import styles from './StoreInfo.module.scss'

interface StoreInfoProps {
	store: Store
}

export const StoreInfo = defineComponent({
	state() {
		return {
			cityName: '',
			isReviewsModalOpen: false,
		}
	},

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

	openReviewsModal() {
		this.updateState({ isReviewsModalOpen: true })
	},

	closeReviewsModal() {
		this.updateState({ isReviewsModalOpen: false })
	},

	render() {
		const props = this.props as StoreInfoProps
		const { store } = props
		const { cityName, isReviewsModalOpen } = this.state

		return (
			<div class={styles.storeInfo}>
				<div class={styles.storeInfo__imageWrapper}>
					{store.card_img ? (
						<img
							class={styles.storeInfo__image}
							src={`https://no.noideas.ru/images/stores/${store.card_img}`}
							alt={store.name}
						/>
					) : null}

					<div class={styles.storeInfoPrimary}>
						<h1 class={styles.storeInfo__title}>{store.name}</h1>
						<div class={styles.storeInfo__ratingContainer}>
							{store.rating ? (
								<span class={styles.storeInfo__rating}>
									Рейтинг: {store.rating}
								</span>
							) : null}
							<button
								type="button"
								class={styles.storeInfo__reviewsButton}
								{...{
									on: {
										click: () => this.openReviewsModal(),
									},
								}}
							>
								Отзывы
							</button>
						</div>
					</div>

					<div class={styles.storeInfoSecondary}>
						{store.address ? (
							<div class={styles.storeInfo__detail}>
								<strong>Адрес:</strong> {store.address}
							</div>
						) : null}

						{store.open_at && store.closed_at ? (
							<div class={styles.storeInfo__detail}>
								<strong>Время работы:</strong> {store.open_at.slice(0, -6)} -{' '}
								{store.closed_at.slice(0, -6)}
							</div>
						) : null}

						{store.city_id ? (
							<div class={styles.storeInfo__detail}>
								<strong>Город:</strong> {cityName}
							</div>
						) : null}
					</div>
				</div>

				{isReviewsModalOpen ? (
					<Review
						storeId={store.id}
						storeName={store.name}
						onClose={() => this.closeReviewsModal()}
					/>
				) : null}
			</div>
		)
	},
})
