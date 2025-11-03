import { LoginForm } from '../../components/LoginForm/LoginForm'
import { Navbar } from '../../components/Navbar/Navbar'
import { defineComponent } from '../../framework/component'
import { navigate } from '../../modules/router'
import styles from './LoginPage.module.scss'

export const LoginPage = defineComponent({
	state() {
		return {
			batchSize: 8,
		}
	},

	render() {
		return (
			<div class={styles.loginPage}>
				<Navbar
					onLogoClick={() => {
						navigate('/')
					}}
					onLoginClick={() => {
						navigate('/auth')
					}}
				/>

				<div
					class={styles.loginPage__container}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						width: '100%',
						minHeight: '80vh',
						padding: '2rem',
						boxSizing: 'border-box',
					}}
				>
					<LoginForm />
				</div>
			</div>
		)
	},
})
