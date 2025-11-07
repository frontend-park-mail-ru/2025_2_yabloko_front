import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { profileApi } from '../../modules/profileApi'
import { Button } from '../Button/Button'
import styles from './AvatarForm.module.scss'

interface AvatarFormState {
	selectedFile: File | null
	previewUrl: string
	error: string
	isSubmitting: boolean
	currentAvatar: string
	_isMounted: boolean
	avatarVersion: number
}

export const AvatarForm = defineComponent({
	state(): AvatarFormState {
		return {
			selectedFile: null,
			previewUrl: '',
			error: '',
			isSubmitting: false,
			currentAvatar: '',
			_isMounted: false,
			avatarVersion: 0,
		}
	},

	async onMounted() {
		this.updateState({ _isMounted: true })
		await this.loadUserProfile()
	},

	onUnmounted() {
		if (this.state.previewUrl) {
			URL.revokeObjectURL(this.state.previewUrl)
		}
		this.state._isMounted = false
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		if (!user) {
			return
		}

		try {
			const response = await profileApi.getProfile('me') 

			if (!this.state._isMounted) {
				return
			}

			if (response.service.success && response.body.avatar_url) {
				this.updateState({
					currentAvatar: response.body.avatar_url,
					avatarVersion: this.state.avatarVersion + 1,
				})
			}
		} catch (error) {
			if (this.state._isMounted) {
				this.updateState({ error: 'Не удалось загрузить профиль' })
			}
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

		if (file.size > 10 * 1024 * 1024) {
			this.updateState({
				error: 'Размер файла не должен превышать 10MB',
				selectedFile: null,
				previewUrl: '',
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

		if (this.state.previewUrl) {
			URL.revokeObjectURL(this.state.previewUrl)
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
			const uploadResponse = await profileApi.uploadAvatar('me', selectedFile)

			if (!this.state._isMounted) {
				return
			}

			if (uploadResponse.service.success && uploadResponse.body.avatar_url) {
				this.updateState({
					currentAvatar: uploadResponse.body.avatar_url,
					avatarVersion: this.state.avatarVersion + 1,
					selectedFile: null,
					previewUrl: '',
				})
			} else {
				this.updateState({
					error: uploadResponse.service.error || 'Не удалось загрузить аватар',
				})
			}
		} catch (error) {
			if (this.state._isMounted) {
				this.updateState({
					error: 'Произошла ошибка при загрузке аватара',
				})
			}
		} finally {
			if (this.state._isMounted) {
				this.updateState({ isSubmitting: false })
			}
		}
	},

	render() {
		const {
			selectedFile,
			previewUrl,
			error,
			isSubmitting,
			currentAvatar,
			avatarVersion,
		} = this.state

		const getAvatarUrl = () => {
			if (!currentAvatar) return ''
			const separator = currentAvatar.includes('?') ? '&' : '?'
			return `${currentAvatar}${separator}t=${Date.now()}&v=${avatarVersion}`
		}

		const avatarUrl = getAvatarUrl()

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
							alt="Предпросмотр аватара"
							class={styles.avatar__image}
							key={`preview-${previewUrl}`}
						/>
					) : currentAvatar ? (
						<img
							src={avatarUrl}
							alt="Текущий аватар"
							class={styles.avatar__image}
							key={`avatar-${avatarVersion}`}
							onError={e => {
								const target = e.currentTarget as HTMLImageElement
								target.style.display = 'none'
							}}
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
					<div class={styles.avatar__actions}>
						<Button
							type="submit"
							variant="accent"
							text={isSubmitting ? 'Загрузка...' : 'Сохранить'}
							disabled={isSubmitting}
						/>
						<Button
							type="button"
							variant="secondary"
							text="Отмена"
							disabled={isSubmitting}
							onClick={() => {
								if (this.state.previewUrl) {
									URL.revokeObjectURL(this.state.previewUrl)
								}
								this.updateState({
									selectedFile: null,
									previewUrl: '',
									error: '',
								})
							}}
						/>
					</div>
				)}
			</form>
		)
	},
})
