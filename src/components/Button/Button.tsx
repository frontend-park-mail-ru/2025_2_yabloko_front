import { defineComponent } from '../../framework/component'
import styles from './Button.module.scss'

const buttonVariants = {
	accent: styles.buttonAccent,
	success: styles.buttonSuccess,
	error: styles.buttonError,
	primary: styles.buttonPrimary,
}

export const Button = defineComponent({
	render() {
		const props = this.props
		const { variant = 'accent', onClick, className = '', text, type } = props
		const buttonClasses = [styles.button, buttonVariants[variant], className]
			.filter(Boolean)
			.join(' ')

		const content = text || 'КНОПКА'

		return (
			<button
				type={type}
				class={buttonClasses}
				{...{
					on: {
						click: (e: Event) => {
							onClick?.(e)
						},
					},
				}}
			>
				<span class={styles.button__content}>{content}</span>
			</button>
		)
	},
})
