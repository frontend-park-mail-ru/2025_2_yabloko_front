import { defineComponent } from '../../framework/component'
import { Store } from '../../modules/storeApi'
import './StoreInfo.css'

interface StoreInfoProps {
	store: Store
}

export const StoreInfo = defineComponent({
	render() {
		const props = this.props as StoreInfoProps
		const { store } = props

		return (
			<div class="store-info">
				<div class="store-info__image-container">
					{store.card_img && (
						<img
							class="store-info__image"
							src={`http://localhost:8080/api/v0/image${store.card_img}`}
							alt={store.name}
						/>
					)}

					<div class="store-info__top-left">
						<h1 class="store-info__title">{store.name}</h1>
						{store.rating && (
							<span class="store-info__rating">Рейтинг: {store.rating}</span>
						)}
					</div>

					<div class="store-info__bottom-left">
						{store.address && (
							<div class="store-info__detail">
								<strong>Адрес:</strong> {store.address}
							</div>
						)}

						{store.open_at && store.closed_at && (
							<div class="store-info__detail">
								<strong>Время работы:</strong> {store.open_at} -{' '}
								{store.closed_at}
							</div>
						)}

						{store.city_id && (
							<div class="store-info__detail">
								<strong>Город:</strong> {store.city_id}
							</div>
						)}
					</div>
				</div>
			</div>
		)
	},
})
