import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { navigate } from '../../modules/router'
import { store } from '../../modules/store'
import { AUTH_IS_AUTHENTICATED } from '../../utils/auth'
import { Button } from '../Button/Button'
import { IconButton } from '../IconButton/IconButton'
import { Logo } from '../Logo/Logo'
import { SearchBar } from '../Search/Search'
import { CitySelector } from '../Selector/Selector'
import styles from './Navbar.module.scss'

interface NavbarProps {
	onLogoClick?: () => void
	onSearch?: (query: string) => void
	onCartClick?: () => void
}

export const Navbar = defineComponent({
	state() {
		return {
			userAuthed: store.get(AUTH_IS_AUTHENTICATED) === true,
		}
	},

	onMounted() {
		this.unsubscribe = store.subscribe(AUTH_IS_AUTHENTICATED, () => {
			this.updateState({
				userAuthed: store.get(AUTH_IS_AUTHENTICATED) === true,
			})
		})
	},

	onUnmounted() {
		if (this.unsubscribe) {
			this.unsubscribe()
		}
	},

	render() {
		const props = this.props as NavbarProps
		const { userAuthed } = this.state

		return (
			<header class={styles.navbar}>
				<div class={styles.navbar__left}>
					<Logo size="medium" onClick={props.onLogoClick} />
					<SearchBar
						placeholder="Поиск ресторанов и категорий"
						onSearch={props.onSearch}
					/>
					<CitySelector />
				</div>
				<div class={styles.navbar__right}>
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
								onClick={() => navigate('/profile')}
							/>,
						]
					) : (
						<Button
							variant="accent"
							text="Войти"
							onClick={() => navigate('/auth')}
						/>
					)}
				</div>
			</header>
		)
	},
})
