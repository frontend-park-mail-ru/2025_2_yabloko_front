import { defineComponent } from '../../framework/component'
import { removeFromCart } from '../../modules/cartManager'
import './CartItem.css'

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
			<div class="cart-item">
				{card_img && (
					<img
						class="cart-item__image"
						src={`http://localhost:8080/api/v0/image${card_img}`}
						alt={name}
					/>
				)}

				<div class="cart-item__info">
					<div class="cart-item__name">{name}</div>
					<div class="cart-item__price">{price} ₽</div>
				</div>

				<div class="cart-item__controls">
					<button
						class="cart-item__control-btn"
						{...{
							on: {
								click: handleDecrease,
							},
						}}
					>
						–
					</button>

					<span class="cart-item__quantity">{quantity}</span>

					<button
						class="cart-item__control-btn"
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
