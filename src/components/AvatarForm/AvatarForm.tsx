import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { profileApi } from '../../modules/profileApi'
import { Button } from '../Button/Button'
import styles from  './AvatarForm.module.scss'

interface AvatarFormState {
	selectedFile: File | null
	previewUrl: string
	error: string
	isSubmitting: boolean
	currentAvatar: string
}

export const AvatarForm = defineComponent({

	state(): AvatarFormState {
		return {
			selectedFile: null,
			previewUrl: '',
			error: '',
			isSubmitting: false,
			currentAvatar: '',
		}
	},

	async onMounted() {
		await this.loadUserProfile()
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		try {
			const response = await profileApi.getProfile(user.id)
			if (response.data && response.data.avatar_url) {
				this.updateState({
					currentAvatar: response.data.avatar_url,
				})
			}
		} catch (error) {
			console.error('Ошибка загрузки профиля:', error)
		}
	},

	handleFileChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0]

		if (!file) {
			this.updateState({
				selectedFile: null,
				previewUrl: '',
				error: '',
			})
			return
		}

		if (!file.type.startsWith('image/')) {
			this.updateState({
				error: 'Выберите файл изображения',
				selectedFile: null,
				previewUrl: '',
			})
			return
		}

		const previewUrl = URL.createObjectURL(file)
		this.updateState({
			selectedFile: file,
			previewUrl,
			error: '',
		})
	},

	async handleSubmit(e: Event) {
		e.preventDefault()
		const { selectedFile } = this.state

		if (!selectedFile) {
			this.updateState({ error: 'Выберите файл' })
			return
		}

		const user = authManager.getUser()
		if (!user) {
			this.updateState({ error: 'Пользователь не авторизован' })
			return
		}

		this.updateState({ isSubmitting: true, error: '' })

		try {
			await profileApi.uploadAvatar(user.id, selectedFile)

			await this.loadUserProfile()

			this.updateState({
				selectedFile: null,
				previewUrl: '',
			})
		} catch (err) {
			this.updateState({
				error:
					err instanceof Error ? err.message : 'Не удалось загрузить аватар',
			})
		} finally {
			this.updateState({ isSubmitting: false })
		}
	},

	render() {
		const { selectedFile, previewUrl, error, isSubmitting, currentAvatar } =
			this.state

		return (
			<form
				class={styles.avatar}
				on={{ submit: (e: Event) => this.handleSubmit(e) }}
			>
				<label class={styles.avatar__preview}>
					<input
						type="file"
						accept="image/*"
						on={{ change: (e: Event) => this.handleFileChange(e) }}
						disabled={isSubmitting}
						class={styles.avatar__input}
					/>
					{previewUrl ? (
						<img
							src={previewUrl}
							alt="Предпросмотр"
							class={styles.avatar__image}
						/>
					) : currentAvatar ? (
						<img
							src={currentAvatar}
							alt="Текущий аватар"
							class={styles.avatar__image}
						/>
					) : (
						<div class={styles.avatar__placeholder}>
							<span class={styles.avatar__imageIcon}>+</span>
							<div>Добавить фото</div>
						</div>
					)}
				</label>

				{error && <div class={styles.avatar__error}>{error}</div>}

				{selectedFile && (
					<Button
						type="submit"
						variant="accent"
						text={isSubmitting ? 'Загрузка...' : 'Сохранить'}
						disabled={isSubmitting}
					/>
				)}
			</form>
		)
	},
})
