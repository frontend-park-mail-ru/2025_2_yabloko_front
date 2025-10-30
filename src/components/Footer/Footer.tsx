import { defineComponent } from '../../framework/component'
import './Footer.css'

export const Footer = defineComponent({
	render() {
		return (
			<div class="footer">
				<div class="left-part">© 2025 ООО AppleClub</div>
				<div class="right-part">
					appleclub.support@mail.ru Проект компании "Яблоко"
				</div>
			</div>
		)
	},
})
