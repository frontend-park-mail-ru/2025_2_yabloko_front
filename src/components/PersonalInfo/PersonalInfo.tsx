import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { profileApi } from '../../modules/profileApi'
import { City, StoreApi } from '../../modules/storeApi'
import { SuggestApi } from '../../modules/suggestApi'
import { Button } from '../Button/Button'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
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
			isSaving: false,
			showCitySuggestions: false,
			addressSuggestions: [] as any[],
			showAddressSuggestions: false,
			isAddressLoading: false,
		}
	},

	async onMounted() {
		await this.loadData()
	},

	async loadData() {
		this.updateState({ isLoading: true })

		try {
			const cities = await StoreApi.getCities()
			this.updateState({ cities })

			await this.loadUserProfile()
			this.updateState({ isLoading: false })
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
				const city = this.state.cities.find(c => c.id === profile.city_id)

				this.updateState({
					email: profile.email || '',
					fullName: profile.name || '',
					city: city ? city.name : '',
					address: profile.address || '',
				})
			}
		} catch (error) {
			console.error('Ошибка загрузки профиля:', error)
		}
	},

	getCitySuggestions() {
		if (!this.state.city) return []
		return this.state.cities
			.filter(city =>
				city.name.toLowerCase().includes(this.state.city.toLowerCase()),
			)
			.slice(0, 5)
	},

	handleCitySelect(cityName: string) {
		this.updateState({
			city: cityName,
			showCitySuggestions: false,
		})
	},

	async handleAddressInput(value: string) {
		this.updateState({
			address: value,
			showAddressSuggestions: true,
		})

		if (value.length < 2 || !this.state.city) {
			this.updateState({ addressSuggestions: [] })
			return
		}

		this.updateState({ isAddressLoading: true })

		try {
			const suggestions = await SuggestApi.suggestAddress(
				value,
				this.state.city,
			)
			this.updateState({
				addressSuggestions: suggestions,
				isAddressLoading: false,
			})
		} catch (error) {
			console.error('Ошибка саджеста адреса:', error)
			this.updateState({ isAddressLoading: false })
		}
	},

	handleAddressSelect(suggestion: any) {
		this.updateState({
			address: suggestion.value,
			addressSuggestions: [],
			showAddressSuggestions: false,
		})
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
				[field]: value,
				errors: {
					...this.state.errors,
					[field]: error,
				},
			})
		}
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
		if (!this.validateAll()) {
			return
		}

		const user = authManager.getUser()
		if (!user) return

		this.updateState({ isSaving: true })

		try {
			const city = this.state.cities.find(c => c.name === this.state.city)
			const updates = {
				name: this.state.fullName,
				address: this.state.address,
				city_id: city ? city.id : '',
			}

			await profileApi.updateProfile(user.id, updates)
			console.log('Профиль сохранен')
		} catch (error) {
			console.error('Ошибка сохранения:', error)
			alert('Ошибка сохранения профиля')
		} finally {
			this.updateState({ isSaving: false })
		}
	},

	render() {
		const {
			errors,
			isLoading,
			isSaving,
			showCitySuggestions,
			addressSuggestions,
			showAddressSuggestions,
			isAddressLoading,
		} = this.state
		const citySuggestions = this.getCitySuggestions()

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
						disabled={this.props.readonly}
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
						disabled={this.props.readonly}
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
					<div class={styles.cityWrapper}>
						<input
							type="text"
							placeholder="Введите город"
							value={this.state.city}
							on={{
								input: (e: Event) => {
									const value = (e.target as HTMLInputElement).value
									this.updateState({
										city: value,
										showCitySuggestions: true,
									})
								},
								focus: () => this.updateState({ showCitySuggestions: true }),
								blur: () =>
									setTimeout(
										() => this.updateState({ showCitySuggestions: false }),
										200,
									),
							}}
							class={`${styles.personalInfoForm__input} ${errors.city ? styles.personalInfoForm__input_error : ''}`}
							required
							disabled={this.props.readonly}
						/>
						{showCitySuggestions && citySuggestions.length > 0 && (
							<div class={styles.suggestions}>
								{citySuggestions.map(city => (
									<div
										class={styles.suggestion}
										onClick={() => this.handleCitySelect(city.name)}
									>
										{city.name}
									</div>
								))}
							</div>
						)}
					</div>
					{errors.city && (
						<div class={styles.personalInfoForm__error}>{errors.city}</div>
					)}
				</div>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Адрес</h3>
					<div class={styles.cityWrapper}>
						<input
							type="text"
							placeholder="Улица, дом, корпус, квартира"
							value={this.state.address}
							on={{
								input: (e: Event) => {
									const value = (e.target as HTMLInputElement).value
									this.handleAddressInput(value)
								},
								focus: () => this.updateState({ showAddressSuggestions: true }),
								blur: () =>
									setTimeout(
										() => this.updateState({ showAddressSuggestions: false }),
										200,
									),
							}}
							class={`${styles.personalInfoForm__input} ${errors.address ? styles.personalInfoForm__input_error : ''}`}
							required
							disabled={this.props.readonly}
						/>
						{isAddressLoading && (
							<div class={styles.suggestions}>Загрузка...</div>
						)}
						{showAddressSuggestions && addressSuggestions.length > 0 && (
							<div class={styles.suggestions}>
								{addressSuggestions.map((suggestion, index) => (
									<div
										key={index}
										class={styles.suggestion}
										onClick={() => this.handleAddressSelect(suggestion)}
									>
										{suggestion.value}
									</div>
								))}
							</div>
						)}
					</div>
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
						disabled={this.props.readonly}
					></textarea>
				</div>

				{!this.props.readonly && (
					<Button
						type="button"
						variant="accent"
						text={isSaving ? 'Сохранение...' : 'Сохранить'}
						onClick={() => this.handleSave()}
						disabled={isSaving}
					/>
				)}
			</div>
		)
	},
})
