import { defineComponent } from '@antiquemouse/framework'
import styles from './CartItem.module.scss'

interface CartItemProps {
	id: string
	name: string
	price: number
	quantity: number
	card_img?: string
	onIncrease?: (id: string) => void
	onDecrease?: (id: string) => void
	onRemove?: (id: string) => void
}

export const CartItem = defineComponent({
	render() {
		const props = this.props as CartItemProps
		const { id, name, price, quantity, card_img, onIncrease, onDecrease } =
			props

		const getCorrectImageUrl = (imgPath: string) => {
			if (!imgPath) return ''
			let correctedPath = imgPath.replace('/stores/', '/items/')
			return `http://90.156.218.233:8080${correctedPath}`
		}

		const handleIncrease = (e: Event) => {
			e.stopPropagation()
			e.preventDefault()
			onIncrease?.(id)
		}

		const handleDecrease = (e: Event) => {
			e.stopPropagation()
			e.preventDefault()
			if (quantity > 0) {
				onDecrease?.(id)
			}
		}

		return (
			<div class={styles.cartItem}>
				<div class={styles.cartItem__imageWrapper}>
					{card_img && (
						<img
							class={styles.cartItem__image}
							src={getCorrectImageUrl(card_img)}
							alt={name}
						/>
					)}
				</div>

				<div class={styles.cartItem__info}>
					<div class={styles.cartItem__name}>{name}</div>
					<div class={styles.cartItem__price}>{price} ₽</div>
				</div>
				<div class={styles.cartItem__controls}>
					<button
						class={styles.cartItem__controlBtn}
						{...{
							on: {
								click: handleDecrease,
							},
						}}
					>
						–
					</button>

					<span class={styles.cartItem__quantity}>{quantity}</span>

					<button
						class={styles.cartItem__controlBtn}
						{...{
							on: {
								click: handleIncrease,
							},
						}}
					>
						+
					</button>
				</div>
			</div>
		)
	},
})
