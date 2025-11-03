import { AvatarForm } from '../../components/AvatarForm/AvatarForm'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { ChangePasswordForm } from '../../components/PasswordChangeForm/PasswordForm'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { profileApi, UpdateProfileRequest } from '../../modules/profileApi'
import { navigate } from '../../modules/router'
import styles from './ProfilePage.module.scss'

interface ProfilePageState {
	email: string
	fullName: string
	region: string
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
			region: '',
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
			console.log('Пользователь не авторизован')
			return
		}

		this.updateState({ isLoading: true })

		try {
			const response = await profileApi.getProfile(user.id)
			if (response.data) {
				const profile = response.data
				const addressParts = this.parseAddress(profile.address || '')

				this.updateState({
					email: profile.email || '',
					fullName: profile.name || '',
					region: addressParts.region,
					city: addressParts.city,
					street: addressParts.street,
					house: addressParts.house,
					building: addressParts.building,
					apartment: addressParts.apartment,
					comment: '',
					isLoading: false,
				})
			}
		} catch (error) {
			console.error('Ошибка загрузки профиля:', error)
			this.updateState({ isLoading: false })
		}
	},

	parseAddress(address: string) {
		const parts = address.split(',')
		return {
			region: parts[0]?.trim() || '',
			city: parts[1]?.trim() || '',
			street: parts[2]?.trim() || '',
			house: parts[3]?.trim() || '',
			building: parts[4]?.trim() || '',
			apartment: parts[5]?.trim() || '',
		}
	},

	formatAddress(): string {
		const { region, city, street, house, building, apartment } = this.state
		return [region, city, street, house, building, apartment]
			.filter(part => part.trim() !== '')
			.join(', ')
	},

	handleFieldChange(field: string, value: string) {
		this.updateState({ [field]: value } as Partial<ProfilePageState>)
	},

	async handleSaveProfile() {
		const user = authManager.getUser()
		if (!user) {
			console.error('Пользователь не авторизован')
			return
		}

		this.updateState({ isLoading: true })

		try {
			const updates: UpdateProfileRequest = {
				name: this.state.fullName,
				address: this.formatAddress(),
			}

			const response = await profileApi.updateProfile(user.id, updates)

			if (response.status === 200) {
				console.log('Профиль успешно обновлен')
			} else {
				throw new Error('Ошибка обновления профиля')
			}
		} catch (error) {
			console.error('Ошибка сохранения профиля:', error)
		} finally {
			this.updateState({ isLoading: false })
		}
	},

	async handlePasswordChange(current: string, newPassword: string) {
		const user = authManager.getUser()
		if (!user) {
			console.error('Пользователь не авторизован')
			return
		}

		try {
			const updates: UpdateProfileRequest = {
				current_password: current,
				new_password: newPassword,
			}

			const response = await profileApi.updateProfile(user.id, updates)

			if (response.status === 200) {
				console.log('Пароль успешно изменен')
				return
			} else {
				throw new Error('Ошибка смены пароля')
			}
		} catch (error) {
			console.error('Ошибка смены пароля:', error)
			throw error
		}
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
					<Footer />
				</div>
			)
		}

		return (
			<div class={styles.profilePage}>
				<Navbar
					userAuthed={true}
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
					onCartClick={() => navigate('/profile')}
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
							<div class={styles.profilePage__passwordSection}>
								<h2>Сменить пароль</h2>
								<ChangePasswordForm
									onSubmit={(current: string, newPassword: string) =>
										this.handlePasswordChange(current, newPassword)
									}
								/>
							</div>
						</div>
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
							onClick={() => navigate('/')}
						/>
					</div>
				</div>

				<Footer />
			</div>
		)
	},
})
