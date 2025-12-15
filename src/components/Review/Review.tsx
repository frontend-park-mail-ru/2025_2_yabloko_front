import { defineComponent } from '@antiquemouse/framework'
import styles from './Review.module.scss'

interface ReviewProps {
	storeId: string
	storeName: string
	onClose: () => void
}

export const Review = defineComponent({
	props: [] as (keyof ReviewProps)[],

	state() {
		return {
			reviews: [] as any[],
			newReview: '',
			newRating: 5,
			isLoading: false,
			isSubmitting: false,
			error: '',
		}
	},

	async onMounted() {
		await this.loadReviews()
	},

	async loadReviews() {
		this.updateState({ isLoading: true })
		try {
			// Здесь будет API запрос для получения отзывов
			// const response = await StoreApi.getReviews(this.props.storeId)
			// this.updateState({ reviews: response })

			// Заглушка для примера
			this.updateState({
				reviews: [],
				isLoading: false,
			})
		} catch (error) {
			console.error(error)
			this.updateState({
				isLoading: false,
				error: 'Не удалось загрузить отзывы',
			})
		}
	},

	async handleSubmitReview() {
		if (!this.state.newReview.trim()) return

		this.updateState({ isSubmitting: true })
		try {
			// Здесь будет API запрос для отправки отзыва
			// await StoreApi.submitReview({
			//     storeId: this.props.storeId,
			//     rating: this.state.newRating,
			//     comment: this.state.newReview
			// })

			// Обновляем список отзывов
			await this.loadReviews()
			this.updateState({
				newReview: '',
				newRating: 5,
				isSubmitting: false,
			})
		} catch (error) {
			console.error(error)
			this.updateState({
				isSubmitting: false,
				error: 'Не удалось отправить отзыв',
			})
		}
	},

	handleOverlayClick(e: Event) {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	},

	render() {
		const props = this.props as ReviewProps
		const { reviews, newReview, newRating, isLoading, isSubmitting, error } =
			this.state

		return (
			<div
				class={styles.reviewsModal}
				{...{
					on: {
						click: (e: Event) => this.handleOverlayClick(e),
					},
				}}
			>
				<div class={styles.reviewsModal__container}>
					<div class={styles.reviewsModal__header}>
						<h2 class={styles.reviewsModal__title}>
							Отзывы о {props.storeName}
						</h2>
						<button
							class={styles.reviewsModal__close}
							{...{
								on: {
									click: () => props.onClose(),
								},
							}}
						>
							✕
						</button>
					</div>

					<div class={styles.reviewsModal__content}>
						<div class={styles.reviewForm}>
							<h3 class={styles.reviewForm__title}>Оставить отзыв</h3>
							<div class={styles.reviewForm__rating}>
								<label>Оценка:</label>
								<div class={styles.stars}>
									{[1, 2, 3, 4, 5].map(star => (
										<button
											key={star}
											type="button"
											class={`${styles.star} ${star <= newRating ? styles.star_active : ''}`}
											{...{
												on: {
													click: () => this.updateState({ newRating: star }),
												},
											}}
										>
											★
										</button>
									))}
								</div>
							</div>
							<textarea
								class={styles.reviewForm__textarea}
								placeholder="Напишите ваш отзыв..."
								value={newReview}
								{...{
									on: {
										input: (e: Event) => {
											const value = (e.target as HTMLTextAreaElement).value
											this.updateState({ newReview: value })
										},
									},
								}}
								rows={4}
							/>
							<button
								class={styles.reviewForm__submit}
								{...{
									on: {
										click: () => this.handleSubmitReview(),
									},
								}}
								disabled={isSubmitting || !newReview.trim()}
							>
								{isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
							</button>
						</div>

						<div class={styles.reviewsList}>
							<h3 class={styles.reviewsList__title}>
								Отзывы ({reviews.length})
							</h3>

							{isLoading ? (
								<div class={styles.loading}>Загрузка отзывов...</div>
							) : error ? (
								<div class={styles.error}>{error}</div>
							) : reviews.length === 0 ? (
								<div class={styles.emptyReviews}>
									Пока нет отзывов. Будьте первым!
								</div>
							) : (
								<div class={styles.reviews}>
									{reviews.map((review, index) => (
										<div key={index} class={styles.review}>
											<div class={styles.review__header}>
												<div class={styles.review__author}>
													{review.user_name || 'Анонимный пользователь'}
												</div>
												<div class={styles.review__rating}>
													{'★'.repeat(review.rating)}
													{'☆'.repeat(5 - review.rating)}
												</div>
												<div class={styles.review__date}>
													{new Date(review.created_at).toLocaleDateString()}
												</div>
											</div>
											<div class={styles.review__comment}>{review.comment}</div>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	},
})
