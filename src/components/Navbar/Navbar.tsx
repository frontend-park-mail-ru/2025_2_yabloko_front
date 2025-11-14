import { defineComponent } from '@antiquemouse/framework'
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
	userAuthed: boolean
	userAvatar: string
	cartItems: number
}

export const Navbar = defineComponent({
	state(): NavbarState {
		return {
			userAuthed: store.get(AUTH_IS_AUTHENTICATED) === true,
			userAvatar: '',
			cartItems: (store.get(CART_COUNT) as number) || 0,
		}
	},

	async onMounted() {
		this.unsubscribeAuth = store.subscribe(AUTH_IS_AUTHENTICATED, () => {
			const isAuthed = store.get(AUTH_IS_AUTHENTICATED) === true
			this.updateState({
				userAuthed: isAuthed,
			})
			if (isAuthed) {
				this.loadUserAvatar()
			} else {
				this.updateState({ userAvatar: '' })
			}
		})

		this.unsubscribeCart = store.subscribe(CART_COUNT, () => {
			const cartCount = store.get(CART_COUNT) as number
			this.updateState({
				cartItems: cartCount || 0,
			})
		})

		if (this.state.userAuthed) {
			await this.loadUserAvatar()
		}
	},

	onUnmounted() {
		if (this.unsubscribeAuth) {
			this.unsubscribeAuth()
		}

		if (this.unsubscribeCart) {
			this.unsubscribeCart()
		}
	},

	async loadUserAvatar() {
		try {
			const user = authManager.getUser()
			if (!user) return

			const response = await profileApi.getProfile('me')

			if (response.service.success && response.body.avatar_url) {
				let avatarUrl = response.body.avatar_url

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
						{cartItems > 0 ? (
							<span class={styles.navbar__cartBadge}>
								{cartItems > 99 ? '99+' : cartItems}
							</span>
						) : null}
					</div>
					{userAuthed ? (
						[
							<IconButton
								src="/static/icons/checklist.png"
								alt="История"
								text="История"
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
