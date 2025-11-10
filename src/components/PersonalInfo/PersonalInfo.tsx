import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { Profile, profileApi } from '../../modules/profileApi'
import { StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
	email: string
	fullName: string
	city: string
	address: string
	comment: string
	onFieldChange: (field: string, value: string) => void
	onSave?: () => void
	readonly?: boolean
}

interface City {
	id: string
	name: string
}

export const PersonalInfo = defineComponent({
	props: [] as (keyof PersonalInfoProps)[],

	state() {
		return {
			errors: {} as Record<string, string>,
			cities: [] as City[],
			isLoading: false,
		}
	},

	async onMounted() {
		await this.loadCities()
		await this.loadUserProfile()
	},

	async loadCities() {
		this.updateState({ isLoading: true })
		try {
			const cities = await StoreApi.getCities()
			this.updateState({ cities, isLoading: false })
		} catch (error) {
			console.error('Ошибка загрузки городов:', error)
			this.updateState({ isLoading: false })
		}
	},

	async loadUserProfile() {
		const user = authManager.getUser()
		if (!user) return

		this.updateState({ isLoading: true })

		const response = await profileApi.getProfile(user.id)

		if (response.service.success) {
			const profile = response.body as Profile

			let cityName = ''
			if (profile.city_id) {
				const city = this.state.cities.find(c => c.id === profile.city_id)
				cityName = city ? city.name : ''
			}

			this.props.onFieldChange('email', profile.email || '')
			this.props.onFieldChange('fullName', profile.name || '')
			this.props.onFieldChange('city', cityName)
			this.props.onFieldChange('address', profile.address || '')
			this.props.onFieldChange('comment', '')

			this.updateState({ isLoading: false })
		} else {
			this.updateState({ isLoading: false })
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
				if (!this.state.cities.some(city => city.name === value)) {
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
				errors: {
					...this.state.errors,
					[field]: error,
				},
			})

			this.props.onFieldChange(field, value)
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
		const props = this.props as PersonalInfoProps
		const errors: Record<string, string> = {}

		errors.email = this.validateField('email', props.email)
		errors.fullName = this.validateField('fullName', props.fullName)
		errors.city = this.validateField('city', props.city)
		errors.address = this.validateField('address', props.address)

		this.updateState({ errors })
		return !Object.values(errors).some(error => error !== '')
	},

	handleSave() {
		if (!this.validateAll()) {
			return
		}

		if (this.props.onSave) {
			this.props.onSave()
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
						value={props.email}
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
						value={props.fullName}
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
					<h3 class={styles.personalInfoForm__addressLabel}>Город</h3>
					<select
						value={props.city}
						on={{ change: (e: Event) => this.handleCityChange(e) }}
						class={`${styles.personalInfoForm__select} ${errors.city ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					>
						<option value="">Выберите город</option>
						{cities.map(city => (
							<option value={city.name} key={city.id}>
								{city.name}
							</option>
						))}
					</select>
					{errors.city && (
						<div class={styles.personalInfoForm__error}>{errors.city}</div>
					)}
				</div>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Адрес</h3>
					<input
						type="text"
						placeholder="Улица, дом, корпус, квартира"
						value={props.address}
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
						value={props.comment}
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
