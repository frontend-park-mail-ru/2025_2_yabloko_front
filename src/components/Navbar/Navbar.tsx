import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { profileApi } from '../../modules/profileApi'
import { navigate } from '../../modules/router'
import { store } from '../../modules/store'
import { AUTH_IS_AUTHENTICATED, CART_COUNT } from '../../utils/auth'
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

interface NavbarState {
	userAvatar: string
}

export const Navbar = defineComponent({
	state(): NavbarState {
		return {
			userAvatar: '',
		}
	},

	async onMounted() {
		if (authManager.isAuthenticated()) {
			await this.loadUserAvatar()
		}
	},

	async loadUserAvatar() {
		try {
			const user = authManager.getUser()
			if (!user) return
			const response = await profileApi.getProfile('me')
			if (response.service.success && response.body.avatar_url) {
				let avatarUrl = response.body.avatar_url
				if (avatarUrl.includes('localhost:8081')) {
					avatarUrl = avatarUrl.replace('localhost:8081', '90.156.218.233:8081')
				}
				this.updateState({ userAvatar: avatarUrl })
			}
		} catch (error) {
			console.error('Failed to load user avatar:', error)
		}
	},

	render() {
		const props = this.props as NavbarProps
		const { userAvatar } = this.state
		const userAuthed = store.get(AUTH_IS_AUTHENTICATED) === true
		const cartItems = (store.get(CART_COUNT) as number) || 0

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
					<div class={styles.navbar__cartWrapper}>
						<IconButton
							src="/static/icons/cart.png"
							alt="Корзина"
							text="Корзина"
							onClick={props.onCartClick}
						/>
						{cartItems > 0 && (
							<span class={styles.navbar__cartBadge}>
								{cartItems > 99 ? '99+' : cartItems}
							</span>
						)}
					</div>
					{userAuthed ? (
						[
							<IconButton
								src="/static/icons/bell.png"
								alt="Уведомления"
								text="Уведомления"
							/>,
							<IconButton
								src={userAvatar || '/static/icons/user.png'}
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
