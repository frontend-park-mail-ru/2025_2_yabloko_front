import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { Profile, profileApi } from '../../modules/profileApi'
import { City, StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
	onSave?: () => void
	readonly?: boolean
}

export const PersonalInfo = defineComponent({
	props: [] as (keyof PersonalInfoProps)[],

	state() {
		return {
			email: '',
			fullName: '',
			city: '',
			address: '',
			comment: '',
			errors: {} as Record<string, string>,
			cities: [] as City[],
			isLoading: false,
			citiesLoaded: false,
		}
	},

	async onMounted() {
		await this.loadData()
	},

	async loadData() {
		this.updateState({ isLoading: true })

		try {
			const citiesResponse = await StoreApi.getCities()
			this.updateState({
				cities: citiesResponse,
				citiesLoaded: true,
			})

			await this.loadUserProfile()

			this.updateState({
				isLoading: false,
			})
		} catch (error) {
			console.error('Ошибка загрузки данных:', error)
			this.updateState({ isLoading: false })
		}
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		if (!user) return

		try {
			const response = await profileApi.getProfile(user.id)

			if (response.service.success) {
				const profile = response.body

				let cityName = ''
				if (profile.city_id) {
					const city = this.state.cities.find(c => c.id === profile.city_id)
					cityName = city ? city.name : ''
				}

				this.updateState({
					email: profile.email || '',
					fullName: profile.name || '',
					city: cityName,
					address: profile.address || '',
					comment: '',
				})
			}
		} catch (error) {
			console.error('Ошибка загрузки профиля:', error)
		}
	},

	validateField(field: string, value: string): string {
		switch (field) {
			case 'email':
				if (!value) return 'Email обязателен'
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
					return 'Некорректный email'
				return ''

			case 'fullName':
				if (!value) return 'Имя обязательно'
				if (value.length < 2) return 'Имя слишком короткое'
				if (!/^[а-яёА-ЯЁ\-\s]+$/.test(value))
					return 'Только кириллица, пробелы и тире'
				return ''

			case 'city':
				if (!value) return 'Город обязателен'
				if (
					this.state.citiesLoaded &&
					!this.state.cities.some(city => city.name === value)
				) {
					return 'Город не найден в списке доступных'
				}
				return ''

			case 'address':
				if (!value) return 'Адрес обязателен'
				if (value.length < 5) return 'Адрес слишком короткий'
				return ''

			default:
				return ''
		}
	},

	handleChange(field: string) {
		return (e: Event) => {
			if (this.props.readonly) return

			const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value

			const error = this.validateField(field, value)
			this.updateState({
				[field]: value,
				errors: {
					...this.state.errors,
					[field]: error,
				},
			})
		}
	},

	handleCityChange(e: Event) {
		if (this.props.readonly) return

		const select = e.target as HTMLSelectElement
		const value = select.value

		this.updateState({
			errors: {
				...this.state.errors,
				city: '',
			},
		})

		this.props.onFieldChange('city', value)
	},

	validateAll(): boolean {
		const { email, fullName, city, address } = this.state
		const errors: Record<string, string> = {}

		errors.email = this.validateField('email', email)
		errors.fullName = this.validateField('fullName', fullName)
		errors.city = this.validateField('city', city)
		errors.address = this.validateField('address', address)

		this.updateState({ errors })
		return !Object.values(errors).some(error => error !== '')
	},

	async handleSave() {
		const user = authManager.getUser()
		if (!user) return

		try {
			const city = this.state.cities.find(c => c.name === this.state.city)

			const updates = {
				name: this.state.fullName,
				address: this.state.address,
				city_id: city ? city.id : '',
			}

			await profileApi.updateProfile(user.id, updates)
		} catch (error) {
			console.error(error)
		}
	},

	render() {
		const props = this.props as PersonalInfoProps
		const { errors, cities, isLoading } = this.state

		if (isLoading) {
			return <div>Загрузка...</div>
		}

		return (
			<div class={styles.personalInfoForm}>
				<div class={styles.personalInfoForm__field}>
					<input
						type="email"
						placeholder="Электронная почта"
						value={this.state.email}
						on={{ input: this.handleChange('email') }}
						class={`${styles.personalInfoForm__input} ${errors.email ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.email && (
						<div class={`${styles.personalInfoForm__error} ${styles.active}`}>
							{errors.email}
						</div>
					)}
				</div>

				<div class={styles.personalInfoForm__field}>
					<input
						type="text"
						placeholder="Имя и фамилия"
						value={this.state.fullName}
						on={{ input: this.handleChange('fullName') }}
						class={`${styles.personalInfoForm__input} ${errors.fullName ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.fullName && (
						<div class={`${styles.personalInfoForm__error} ${styles.active}`}>
							{errors.fullName}
						</div>
					)}
				</div>

				<h2 class={styles.personalInfoForm__title}>Адрес доставки</h2>

				<div class={styles.personalInfoForm__field}>
					<input
						type="text"
						placeholder="Город"
						value={this.state.city}
						on={{ input: this.handleChange('city') }}
						class={`${styles.personalInfoForm__input} ${errors.city ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.city && (
						<div class={styles.personalInfoForm__error}>{errors.city}</div>
					)}
				</div>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Адрес</h3>
					<input
						type="text"
						placeholder="Улица, дом, корпус, квартира"
						value={this.state.address}
						on={{ input: this.handleChange('address') }}
						class={`${styles.personalInfoForm__input} ${errors.address ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.address && (
						<div class={styles.personalInfoForm__error}>{errors.address}</div>
					)}
				</div>

				<div class={styles.personalInfoForm__field}>
					<textarea
						placeholder="Комментарий к заказу"
						value={this.state.comment}
						rows={3}
						on={{ input: this.handleChange('comment') }}
						class={styles.personalInfoForm__textarea}
						disabled={props.readonly}
					></textarea>
				</div>

				{!props.readonly && (
					<Button
						type="button"
						variant="accent"
						text="Сохранить"
						onClick={() => this.handleSave()}
					/>
				)}
			</div>
		)
	},
})
