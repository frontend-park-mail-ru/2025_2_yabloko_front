import { AvatarForm } from '../../components/AvatarForm/AvatarForm'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import {
	Profile,
	profileApi,
	UpdateProfileRequest,
} from '../../modules/profileApi'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import styles from './ProfilePage.module.scss'

interface ProfilePageState {
	email: string
	fullName: string
	city: string
	street: string
	house: string
	building: string
	apartment: string
	comment: string
	isLoading: boolean
}

export const ProfilePage = defineComponent({
	state(): ProfilePageState {
		return {
			email: '',
			fullName: '',
			city: '',
			street: '',
			house: '',
			building: '',
			apartment: '',
			comment: '',
			isLoading: false,
		}
	},

	async onMounted() {
		await this.loadUserProfile()
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		if (!user) {
			navigate('/auth')
			return
		}

		this.updateState({ isLoading: true })

		const response = await profileApi.getProfile(user.id)

		if (response.service.success) {
			const profile = response.body as Profile

			const addressParts = this.parseAddress(profile.address || '')
			let cityName = ''
			if (profile.city_id) {
				cityName = await this.setCity(profile.city_id)
			}

			this.updateState({
				email: profile.email || '',
				fullName: profile.name || '',
				city: cityName || '',
				street: addressParts.street,
				house: addressParts.house,
				building: addressParts.building,
				apartment: addressParts.apartment,
				comment: '',
				isLoading: false,
			})
		} else {
			this.updateState({ isLoading: false })
		}
	},

	async setCity(id: string) {
		const cities = await StoreApi.getCities()
		const city = cities.find(city => city.id === id)
		return city ? city.name : ''
	},

	parseAddress(address: string) {
		const parts = address.split(',')
		return {
			city: '',
			street: parts[0]?.trim() || '',
			house: parts[1]?.trim() || '',
			building: parts[2]?.trim() || '',
			apartment: parts[3]?.trim() || '',
		}
	},

	formatAddress(): string {
		const { street, house, building, apartment } = this.state
		return [street, house, building, apartment]
			.filter(part => part.trim() !== '')
			.join(', ')
	},

	handleFieldChange(field: string, value: string) {
		this.updateState({ [field]: value } as Partial<ProfilePageState>)
	},

	async handleSaveProfile() {
		const user = authManager.getUser()
		if (!user) return

		this.updateState({ isLoading: true })

		const cities = await StoreApi.getCities()
		const city = cities.find(c => c.name === this.state.city)

		if (this.state.city && !city) {
			alert(
				'Ошибка: город "' +
					this.state.city +
					'" не найден. Выберите город из списка.',
			)
			this.updateState({ isLoading: false })
			return
		}

		const updates: UpdateProfileRequest = {
			name: this.state.fullName,
			address: this.formatAddress(),
			city_id: city ? city.id : '',
		}

		const response = await profileApi.updateProfile(user.id, updates)
		if (!response.service.success) {
			console.error(response.service.error)
			alert('Ошибка сохранения: ' + response.service.error)
		} else {
			console.log('Профиль успешно обновлен')
		}

		this.updateState({ isLoading: false })
	},

	async handlePasswordChange(current: string, newPassword: string) {
		const user = authManager.getUser()

		const updates: UpdateProfileRequest = {
			current_password: current,
			new_password: newPassword,
		}

		const response = await profileApi.updateProfile(user.id, updates)

		if (!response.service.success) {
			throw new Error(response.service.error || 'Не удалось изменить пароль')
		}
	},

	async handleLogout() {
		await authManager.logout();
	},

	render() {
		if (this.state.isLoading) {
			return (
				<div class={styles.profilePage}>
					<Navbar
						onLogoClick={() => navigate('/')}
						onLoginClick={() => navigate('/auth')}
					/>
					<div class={styles.profilePage__loading}>
						<h2>Загрузка профиля...</h2>
					</div>
					<Footer/>
				</div>
			)
		}

		return (
			<div class={styles.profilePage}>
				<Navbar
					userAuthed={true}
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
				/>

				<div class={styles.profilePage__container}>
					<div class={styles.profilePage__content}>
						<div class={styles.profilePage__formSection}>
							<form
								on={{
									submit: (e: Event) => {
										e.preventDefault()
										this.handleSaveProfile()
									},
								}}
							>
								<h2 class={styles.profilePage__title}>Мой профиль</h2>
								<PersonalInfo
									email={this.state.email}
									fullName={this.state.fullName}
									region={this.state.region}
									city={this.state.city}
									street={this.state.street}
									house={this.state.house}
									building={this.state.building}
									apartment={this.state.apartment}
									comment={this.state.comment}
									onFieldChange={(f, v) => this.handleFieldChange(f, v)}
									onSave={() => this.handleSaveProfile()}
								/>
							</form>
						</div>

						<div class={styles.profilePage__sidebar}>
							<div class={styles.profilePage__avatarSection}>
								<h2>Сменить аватар</h2>
								<AvatarForm />
							</div>
							<div class={styles.profilePage__buttons}>
								<Button
									type="button"
									variant="accent"
									text="Назад"
									onClick={() => navigate('/')}
								/>
								<Button
									type="button"
									variant="error"
									text="Выйти из профиля"
									onClick={() => {
										this.handleLogout();
										navigate('/')
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	},
})
