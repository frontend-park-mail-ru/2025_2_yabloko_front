// src/components/ChangePasswordForm/ChangePasswordForm.ts
import { defineComponent } from '../../framework/component'
import { validatePassword } from '../../utils/auth'
import { Button } from '../Button/Button'
import './PasswordChangeForm.css'

interface ChangePasswordFormState {
	currentPassword: string
	newPassword: string
	confirmPassword: string
	error: string
	isSubmitting: boolean
}

interface ChangePasswordFormProps {
	onSubmit: (current: string, newPassword: string) => Promise<void>
}

export const ChangePasswordForm = defineComponent({
	props: [] as (keyof ChangePasswordFormProps)[],

	state(): ChangePasswordFormState {
		return {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
			error: '',
			isSubmitting: false,
		}
	},

	handleCurrentChange(e: Event) {
		this.updateState({
			currentPassword: (e.target as HTMLInputElement).value,
			error: '',
		})
	},

	handleNewChange(e: Event) {
		this.updateState({
			newPassword: (e.target as HTMLInputElement).value,
			error: '',
		})
	},

	handleConfirmChange(e: Event) {
		this.updateState({
			confirmPassword: (e.target as HTMLInputElement).value,
			error: '',
		})
	},

	async handleSubmit(e: Event) {
		e.preventDefault()
		const { currentPassword, newPassword, confirmPassword } = this.state

		if (!currentPassword || !newPassword || !confirmPassword) {
			this.updateState({ error: 'Все поля обязательны' })
			return
		}

		if (newPassword !== confirmPassword) {
			this.updateState({ error: 'Пароли не совпадают' })
			return
		}

		const passErr = validatePassword(newPassword)
		if (passErr) {
			this.updateState({ error: passErr })
			return
		}

		this.updateState({ isSubmitting: true, error: '' })

		try {
			await (this.props as ChangePasswordFormProps).onSubmit(
				currentPassword,
				newPassword,
			)
			// Успех — можно сбросить или перейти
			this.updateState({
				currentPassword: '',
				newPassword: '',
				confirmPassword: '',
			})
		} catch (err) {
			this.updateState({
				error: err instanceof Error ? err.message : 'Не удалось сменить пароль',
			})
		} finally {
			this.updateState({ isSubmitting: false })
		}
	},

	render() {
		const {
			currentPassword,
			newPassword,
			confirmPassword,
			error,
			isSubmitting,
		} = this.state
		const props = this.props as ChangePasswordFormProps

		return (
			<form
				class="change-password-form"
				on={{ submit: (e: Event) => this.handleSubmit(e) }}
			>
				<div class="change-password-form__field">
					<input
						type="password"
						placeholder="Текущий пароль"
						value={currentPassword}
						on={{ input: (e: Event) => this.handleCurrentChange(e) }}
						disabled={isSubmitting}
					/>
				</div>

				<div class="change-password-form__field">
					<input
						type="password"
						placeholder="Новый пароль"
						value={newPassword}
						on={{ input: (e: Event) => this.handleNewChange(e) }}
						disabled={isSubmitting}
					/>
				</div>

				<div class="change-password-form__field">
					<input
						type="password"
						placeholder="Подтвердите новый пароль"
						value={confirmPassword}
						on={{ input: (e: Event) => this.handleConfirmChange(e) }}
						disabled={isSubmitting}
					/>
				</div>

				<div class={`change-password-form__error ${error ? 'active' : ''}`}>
					{error}
				</div>

				<Button
					type="submit"
					variant="accent"
					class="change-password-form__submit"
					text={isSubmitting ? 'Сохранение...' : 'Изменить пароль'}
					disabled={isSubmitting}
				/>
			</form>
		)
	},
})
