import { defineComponent } from '../../framework/component'
import { Store } from '../../modules/storeApi'
import { navigate } from '../../modules/router'
import {API} from '../../modules/api'
import './Card.css'

interface CardProps {
	store: Store
	onCardClick?: (storeId: string) => void
}

export const Card = defineComponent({
	render() {
		const props = this.props as CardProps
		const { store, onCardClick } = props

		const handleCardClick = () => {
			onCardClick?.(store.id)
			navigate(`/store/${store.id}`)
		}

		const handleFavClick = (e: Event) => {
			e.stopPropagation()
			e.preventDefault()
		}

		return (
			<div
				class="store-card"
				{...{
					on: {
						click: handleCardClick,
					},
				}}
			>
				<div class="store-card__container">
					<div class="store-card__image-wrapper">
						{store.card_img && (
							<img
								class="store-card__image"
								src={`${API.BASE_URL}/image${store.card_img}`}
								alt={store.name}
							/>
						)}
						<div
							class="store-card__fav"
							{...{
								on: {
									click: handleFavClick,
								},
							}}
						>
							<img
								src="/static/icons/fav.png"
								alt="fav"
								class="store-card__fav-image"
							/>
						</div>
					</div>

					<div class="store-card__content">
						<div class="store-card__name">{store.name}</div>
						<div class="store-card__info">
							<div class="store-card__time">
								<img
									src="/static/icons/car.png"
									alt="car"
									class="store-card__time-icon"
								/>
								<div class="store-card__time-value">30 мин</div>
							</div>
							<div class="store-card__rating">
								<img
									src="/static/icons/star.png"
									alt="star"
									class="store-card__rating-icon"
								/>
								<div class="store-card__rating-value">{store.rating}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
})
