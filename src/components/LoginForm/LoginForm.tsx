import { defineComponent } from '../../framework/component'
import {
	validateConfirmPassword,
	validateEmail,
	validatePassword,
} from '../../utils/auth'
import { Button } from '../Button/Button'
import { Logo } from '../Logo/Logo'
import './LoginForm.css'

interface LoginFormState {
	isAuth: boolean
	email: string
	password: string
	confirmPassword: string
	isAwaiting: boolean
	authErr: string
	emailErr: string
	passErr: string
	passConfErr: string
}

interface AuthError {
	response?: string | { message?: string }
	message?: string
}

export const LoginForm = defineComponent({
	state(): LoginFormState {
		return {
			isAuth: true,
			email: '',
			password: '',
			confirmPassword: '',
			isAwaiting: false,
			authErr: '',
			emailErr: '',
			passErr: '',
			passConfErr: '',
		}
	},

	async handleSubmit(e: Event) {
		e.preventDefault()

		const { isAuth, isAwaiting } = this.state

		if (isAwaiting) {
			return
		}

		this.updateState({ isAwaiting: true, authErr: '' })

		try {

			import('../../modules/router').then(router => router.navigate('/'))
		} catch (error: unknown) {
			let message = 'Ошибка авторизации'

			if (error && typeof error === 'object') {
				const authError = error as AuthError

				if (authError?.response) {
					if (typeof authError.response === 'string') {
						message = authError.response
					} else if (
						typeof authError.response === 'object' &&
						authError.response.message
					) {
						message = authError.response.message
					}
				} else if (authError?.message) {
					message = authError.message
				}
			} else if (typeof error === 'string') {
				message = error
			}

			console.error('Auth error:', error)
			this.updateState({ authErr: message })
		} finally {
			this.updateState({ isAwaiting: false })
		}
	},

	toggleMode() {
		this.updateState({
			isAuth: !this.state.isAuth,
			confirmPassword: '',
			authErr: '',
		})
	},

	handleEmailChange(e: Event) {
		const value = (e.target as HTMLInputElement).value
		this.updateState({
			email: value,
			emailErr: validateEmail(value),
		})
	},

	handlePasswordChange(e: Event) {
		const value = (e.target as HTMLInputElement).value
		this.updateState({
			password: value,
			passErr: validatePassword(value),
		})
	},

	handleConfirmPasswordChange(e: Event) {
		const value = (e.target as HTMLInputElement).value
		this.updateState({
			confirmPassword: value,
			passConfErr: validateConfirmPassword(value, this.state.password),
		})
	},

	render() {
		const {
			isAuth,
			email,
			password,
			confirmPassword,
			isAwaiting,
			authErr,
			passErr,
			emailErr,
			passConfErr,
		} = this.state

		return (
			<div class="login-form">
				<Logo size="large" />
				<form
					class="login-form__inner"
					novalidate
					{...{
						on: {
							submit: (e: Event) => this.handleSubmit(e),
						},
					}}
				>
					<div class="login-form__field">
						<input
							type="email"
							placeholder="Email"
							value={email}
							on={{ input: (e: Event) => this.handleEmailChange(e) }}
							disabled={isAwaiting || undefined}
							class={emailErr ? 'login-form__input--error' : ''}
						/>
					</div>

					<div
						class="login-form__error"
						style={{ display: emailErr ? 'block' : 'none' }}
					>
						{emailErr}
					</div>

					<div class="login-form__field">
						<input
							type="password"
							placeholder="Пароль"
							value={password}
							on={{ input: (e: Event) => this.handlePasswordChange(e) }}
							disabled={isAwaiting || undefined}
							class={passErr ? 'login-form__input--error' : ''}
						/>
					</div>

					<div
						class="login-form__error"
						style={{ display: passErr ? 'block' : 'none' }}
					>
						{passErr}
					</div>

					<div
						class="login-form__field"
						style={{ display: isAuth ? 'none' : 'block' }}
					>
						<input
							type="password"
							placeholder="Подтвердите пароль"
							value={confirmPassword}
							on={{ input: (e: Event) => this.handleConfirmPasswordChange(e) }}
							disabled={isAwaiting || undefined}
							class={passConfErr ? 'login-form__input--error' : ''}
						/>
					</div>

					<div
						class="login-form__error"
						style={{ display: passConfErr ? 'block' : 'none' }}
					>
						{passConfErr}
					</div>

					<div
						class="login-form__error"
						style={{ display: authErr ? 'block' : 'none' }}
					>
						{authErr}
					</div>

					<Button
						key={`submit-${isAuth}`}
						type="submit"
						variant="accent"
						class="login-form__submit"
						disabled={isAwaiting || undefined}
						text={
							isAwaiting
								? 'Загрузка...'
								: isAuth
									? 'Войти'
									: 'Зарегистрироваться'
						}
					/>

					<Button
						key={`toggle-${isAuth}`}
						type="button"
						variant="accent"
						class="login-form__toggle"
						onClick={() => this.toggleMode()}
						disabled={isAwaiting || undefined}
						text={
							isAuth
								? 'Нет аккаунта? Зарегистрироваться'
								: 'Уже есть аккаунт? Войти'
						}
					/>
				</form>
			</div>
		)
	},
})
