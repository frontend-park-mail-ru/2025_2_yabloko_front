import { defineComponent } from '../../framework/component'
import { Store } from '../../modules/storeApi'
import { navigate } from '../../modules/router'
import {API} from '../../modules/api'
import styles from './Card.module.scss'

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
				class={styles.storeCard}
				{...{
					on: {
						click: handleCardClick,
					},
				}}
			>
				<div class={styles.storeCard__container}>
					<div class={styles.storeCard__imageWrapper}>
						{store.card_img && (
							<img
								class={styles.storeCard__image}
								src={`http://90.156.218.233:8080${store.card_img}`}
								alt={store.name}
							/>
						)}
						<div
							class={styles.storeCard__fav}
							{...{
								on: {
									click: handleFavClick,
								},
							}}
						>
							<img
								src="/static/icons/fav.png"
								alt="fav"
								class={styles.storeCard__favImage}
							/>
						</div>
					</div>

					<div class={styles.storeCard__content}>
						<div class={styles.storeCard__name}>{store.name}</div>
						<div class={styles.storeCard__info}>
							<div class={styles.storeCard__time}>
								<img
									src="/static/icons/car.png"
									alt="car"
									class={styles.storeCard__timeIcon}
								/>
								<div class={styles.storeCard__timeValue}>30 мин</div>
							</div>
							<div class={styles.storeCard__rating}>
								<img
									src="/static/icons/star.png"
									alt="star"
									class={styles.storeCard__ratingIcon}
								/>
								<div class={styles.storeCard__ratingValue}>{store.rating}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
})
