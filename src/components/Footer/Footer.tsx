import { defineComponent } from '../../framework/component'
import styles from './Footer.module.scss'

export const Footer = defineComponent({
	render() {
		return (
			<div class={styles.footer}>
				<div class="left-part">© 2025 ООО AppleClub</div>
				<div class="right-part">
					appleclub.support@mail.ru - Проект компании «Яблоко»
				</div>
			</div>
		)
	},
})
