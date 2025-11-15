import { defineComponent } from '@antiquemouse/framework'
import styles from './SupportWidget.module.scss'

export const SupportWidget = defineComponent({
	props: [],

	state() {
		return {
			isOpen: false,
		}
	},

	toggleSupport() {
		this.updateState({ isOpen: !this.state.isOpen })
	},

	render() {
		return (
			<div class={styles.support}>
				<button
					class={styles.supportToggle}
					onClick={() => this.toggleSupport()}
				>
					{this.state.isOpen ? '✕' : '🛟'}
				</button>

				{this.state.isOpen && (
					<div class={styles.supportWindow}>
						<iframe
							src="http://localhost:3001"
							width="400"
							height="600"
							style={{
								border: '3px solid red',
								borderRadius: '8px',
								background: 'white',
							}}
						></iframe>
					</div>
				)}
			</div>
		)
	},
})
