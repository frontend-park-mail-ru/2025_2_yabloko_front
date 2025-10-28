import { LoginForm } from '../components/LoginForm/LoginForm'
import { Navbar } from '../components/Navbar/Navbar'
import { defineComponent } from '../framework/component'

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
						import('../modules/router').then(router => router.navigate('/'))
					}}
					//onSearch={query => console.log('Search:', query)}
					onLoginClick={() => {
						import('../modules/router').then(router => router.navigate('/auth'))
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
