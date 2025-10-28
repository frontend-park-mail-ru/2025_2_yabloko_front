import { defineComponent } from '../../framework/component'
import './Button.css'

export const Button = defineComponent({
	render() {
		const props = this.props
		const {
			variant = 'accent',
			onClick,
			className = '',
			text,
			children,
			type,
		} = props

		const buttonClasses = ['button', `button--${variant}`, className]
			.filter(Boolean)
			.join(' ')

		const content = text || children || 'КНОПКА'

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
				<span class="button__content">{content}</span>
			</button>
		)
	},
})
