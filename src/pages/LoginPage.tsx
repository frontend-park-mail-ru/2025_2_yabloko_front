import { LoginForm } from '../components/LoginForm/LoginForm'
import { Navbar } from '../components/Navbar/Navbar'
import { defineComponent } from '../framework/component'
import { navigate } from '../modules/router'

export const LoginPage = defineComponent({
	state() {
		return {
			batchSize: 8,
		}
	},

	render() {
		return (
			<div class="login-page">
				<Navbar
					userAuthed={false}
					onLogoClick={() => {
						navigate('/')
					}}
					//onSearch={query => console.log('Search:', query)}
					onLoginClick={() => {
						navigate('/auth')
					}}
				/>

				<div
					class="container"
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
