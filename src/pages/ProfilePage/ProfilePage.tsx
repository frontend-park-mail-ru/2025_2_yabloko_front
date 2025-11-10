import { AvatarForm } from '../../components/AvatarForm/AvatarForm'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { navigate } from '../../modules/router'
import styles from './ProfilePage.module.scss'

export const ProfilePage = defineComponent({
	state() {
		return {
			isLoading: false,
		}
	},

	async handleLogout() {
		await authManager.logout()
		navigate('/')
	},

	render() {
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
							<h2 class={styles.profilePage__title}>Мой профиль</h2>
							<PersonalInfo/>
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
									onClick={() => this.handleLogout()}
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	},
})
