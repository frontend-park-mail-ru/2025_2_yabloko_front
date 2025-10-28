import { defineComponent } from '../../framework/component'
import './IconButton.css'

interface IconButtonProps {
	src: string
	alt: string
	text?: string
	onClick?: (event: Event) => void
	href?: string
}

export const IconButton = defineComponent({
	render() {
		const props = this.props as IconButtonProps
		const { src, alt, text, onClick } = props

		return (
			<button
				class="icon-button"
				type="button"
				{...{
					on: {
						click: (e: Event) => {
							onClick?.(e)
						},
					},
				}}
			>
				<img src={src} alt={alt} class="icon-button__image" />
				{text && <span class="icon-button__text">{text}</span>}
			</button>
		)
	},
})
