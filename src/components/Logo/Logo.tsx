import { defineComponent } from '../../framework/component'

interface LogoProps {
	size?: 'small' | 'medium' | 'large'
	onClick?: () => void
}

export const Logo = defineComponent({
	render() {
		const props = this.props as LogoProps
		const size = props.size || 'medium'

		const sizes = {
			small: '32px',
			medium: '48px',
			large: '192px',
		}

		return (
			<div {...{ on: { click: props.onClick } }}>
				<img
					src="/static/icons/logo.png"
					alt="logo"
					style={{
						height: sizes[size],
						width: sizes[size],
						objectFit: 'cover',
						marginRight: '15px',
					}}
				/>
			</div>
		)
	},
})
