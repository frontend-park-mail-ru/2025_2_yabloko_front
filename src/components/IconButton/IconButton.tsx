import { defineComponent } from '@antiquemouse/framework'
import styles from './IconButton.module.scss'

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
				class={styles.iconButton}
				type="button"
				{...{
					on: {
						click: (e: Event) => {
							onClick?.(e)
						},
					},
				}}
			>
				<img src={src} alt={alt} class={styles.iconButton__image} />
				{text && <span class={styles.iconButton__text}>{text}</span>}
			</button>
		)
	},
})
