import { defineComponent } from '../../framework/component'
import { navigate } from '../../modules/router'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { Logo } from '../Logo/Logo'
import { SearchBar } from '../Search/Search'
import './Navbar.css'

interface NavbarProps {
	onLogoClick?: () => void
	onSearch?: (query: string) => void
	onCartClick?: () => void
}

export const Navbar = defineComponent({
	state() {
		return {
			userAuthed: false,
		}
	},

	render() {
		const props = this.props as NavbarProps
		const { userAuthed } = this.state

		return (
			<header class="navbar">
				<div class="navbar__left">
					<Logo size="medium" onClick={props.onLogoClick} />
					<SearchBar
						placeholder="Поиск ресторанов и категорий"
						onSearch={props.onSearch}
					/>
				</div>
				<div class="navbar__right">
					<IconButton
						src="/static/icons/cart.png"
						alt="Корзина"
						text="Корзина"
						onClick={props.onCartClick}
					/>
					{userAuthed ? (
						[
							<IconButton
								src="/static/icons/bell.png"
								alt="Уведомления"
								text="Уведомления"
							/>,
							<IconButton
								src="/static/icons/user.png"
								alt="Профиль"
								text="Профиль"
							/>,
						]
					) : (
						<Button
							variant="accent"
							text="Войти"
							onClick={() =>
								navigate('/auth')
							}
						/>
					)}
				</div>
			</header>
		)
	},
})
