import { defineComponent } from '@antiquemouse/framework'
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
			addressHistory: [] as string[],
			showAddressHistory: false,
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
			console.error(error)
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

				const history = profile.addresses_history || []
				const addressHistory = [...history]
				if (profile.address && !addressHistory.includes(profile.address)) {
					addressHistory.unshift(profile.address)
				}

				this.updateState({
					email: profile.email || '',
					fullName: profile.name || '',
					city: city ? city.name : '',
					address: profile.address || '',
					addressHistory,
				})
			}
		} catch (error) {
			console.error(error)
		}
	},

	render() {
		const {
			errors,
			isSaving,
			showCitySuggestions,
			addressSuggestions,
			showAddressSuggestions,
			isAddressLoading,
			addressHistory,
			showAddressHistory,
			cities,
		} = this.state

		const getCitySuggestions = () => {
			if (!this.state.city) return []
			return cities
				.filter(city =>
					city.name.toLowerCase().includes(this.state.city.toLowerCase()),
				)
				.slice(0, 5)
		}

		const citySuggestions = getCitySuggestions()

		const selectAddressFromHistory = (address: string) => {
			this.updateState({
				address: address,
				showAddressHistory: false,
			})
		}

		const handleCitySelect = (cityName: string) => {
			this.updateState({
				city: cityName,
				showCitySuggestions: false,
			})
		}

		const handleAddressInput = async (value: string) => {
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
				console.error(error)
				this.updateState({ isAddressLoading: false })
			}
		}

		const handleAddressSelect = (suggestion: any) => {
			this.updateState({
				address: suggestion.displayValue || suggestion.value,
				addressSuggestions: [],
				showAddressSuggestions: false,
			})
		}

		const validateField = (field: string, value: string): string => {
			switch (field) {
				case 'fullName':
					if (!value) return 'Имя обязательно'
					if (value.length < 2) return 'Имя слишком короткое'
					if (!/^[а-яёА-ЯЁ\-\s]+$/.test(value))
						return 'Только кириллица, пробелы и тире'
					return ''
				case 'city':
					if (!value) return 'Город обязателен'
					if (!cities.some(city => city.name === value)) {
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
		}

		const handleChange = (field: string) => {
			return (e: Event) => {
				if (this.props.readonly) return
				const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value
				const error = validateField(field, value)
				this.updateState({
					[field]: value,
					errors: {
						...this.state.errors,
						[field]: error,
					},
				})
			}
		}

		const validateAll = (): boolean => {
			const { fullName, city, address } = this.state
			const errors: Record<string, string> = {}
			errors.fullName = validateField('fullName', fullName)
			errors.city = validateField('city', city)
			errors.address = validateField('address', address)
			this.updateState({ errors })
			return !Object.values(errors).some(error => error !== '')
		}

		const handleSave = async () => {
			if (!validateAll()) return
			const user = authManager.getUser()
			if (!user) return
			this.updateState({ isSaving: true })
			try {
				const city = cities.find(c => c.name === this.state.city)
				const updates = {
					name: this.state.fullName,
					address: this.state.address,
					city_id: city ? city.id : '',
				}
				await profileApi.updateProfile(user.id, updates)
			} catch (error) {
				console.error(error)
			} finally {
				this.updateState({ isSaving: false })
			}
		}

		return (
			<div class={styles.personalInfoForm}>
				<div class={styles.personalInfoForm__field}>
					<input
						type="email"
						placeholder="Электронная почта"
						value={this.state.email}
						oninput={handleChange('email')}
						class={`${styles.personalInfoForm__input} ${errors.email ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={true}
					/>
				</div>

				<div class={styles.personalInfoForm__field}>
					<input
						type="text"
						placeholder="Имя и фамилия"
						value={this.state.fullName}
						oninput={handleChange('fullName')}
						class={`${styles.personalInfoForm__input} ${errors.fullName ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={this.props.readonly}
					/>
					{errors.fullName ? (
						<div class={`${styles.personalInfoForm__error} ${styles.active}`}>
							{errors.fullName}
						</div>
					) : null}
				</div>

				<h2 class={styles.personalInfoForm__title}>Адрес доставки</h2>

				{addressHistory.length > 0 && (
					<div class={styles.addressHistorySection}>
						<button
							type="button"
							class={styles.addressHistoryButton}
							onclick={() =>
								this.updateState({ showAddressHistory: !showAddressHistory })
							}
						>
							{showAddressHistory
								? 'Скрыть историю адресов'
								: 'Выбрать из истории адресов'}
						</button>

						{showAddressHistory && (
							<div class={styles.addressHistoryList}>
								{addressHistory.map((address, index) => (
									<div
										key={index}
										class={styles.addressHistoryItem}
										onclick={() => selectAddressFromHistory(address)}
									>
										{address}
									</div>
								))}
							</div>
						)}
					</div>
				)}

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Город</h3>
					<div class={styles.cityWrapper}>
						<input
							type="text"
							placeholder="Введите город"
							value={this.state.city}
							oninput={(e: Event) => {
								const value = (e.target as HTMLInputElement).value
								this.updateState({
									city: value,
									showCitySuggestions: true,
								})
							}}
							onfocus={() => this.updateState({ showCitySuggestions: true })}
							onblur={() => {
								setTimeout(() => {
									this.updateState({ showCitySuggestions: false })
								}, 200)
							}}
							class={`${styles.personalInfoForm__input} ${errors.city ? styles.personalInfoForm__input_error : ''}`}
							required
							disabled={this.props.readonly}
						/>
						{showCitySuggestions && citySuggestions.length > 0 ? (
							<div class={styles.suggestions}>
								{citySuggestions.map(city => (
									<div
										key={city.id}
										class={styles.suggestion}
										onmousedown={(e: Event) => {
											e.preventDefault()
											handleCitySelect(city.name)
										}}
									>
										{city.name}
									</div>
								))}
							</div>
						) : null}
					</div>
					{errors.city ? (
						<div class={styles.personalInfoForm__error}>{errors.city}</div>
					) : null}
				</div>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Адрес</h3>
					<div class={styles.cityWrapper}>
						<input
							type="text"
							placeholder="Улица, дом, корпус, квартира"
							value={this.state.address}
							oninput={(e: Event) => {
								const value = (e.target as HTMLInputElement).value
								handleAddressInput(value)
							}}
							onfocus={() =>
								this.updateState({
									showAddressSuggestions: true,
									showAddressHistory: false,
								})
							}
							onblur={() => {
								setTimeout(() => {
									this.updateState({ showAddressSuggestions: false })
								}, 200)
							}}
							class={`${styles.personalInfoForm__input} ${errors.address ? styles.personalInfoForm__input_error : ''}`}
							required
							disabled={this.props.readonly}
						/>
						{isAddressLoading ? (
							<div class={styles.loading}>Загрузка...</div>
						) : null}
						{showAddressSuggestions && addressSuggestions.length > 0 ? (
							<div class={styles.suggestions}>
								{addressSuggestions.map((suggestion, index) => (
									<div
										key={index}
										class={styles.suggestion}
										onmousedown={(e: Event) => {
											e.preventDefault()
											handleAddressSelect(suggestion)
										}}
									>
										{suggestion.displayValue || suggestion.value}
									</div>
								))}
							</div>
						) : null}
					</div>
					{errors.address ? (
						<div class={styles.personalInfoForm__error}>{errors.address}</div>
					) : null}
				</div>

				<div class={styles.personalInfoForm__field}>
					<textarea
						placeholder="Комментарий"
						value={this.state.comment}
						rows={3}
						oninput={handleChange('comment')}
						class={styles.personalInfoForm__textarea}
						disabled={this.props.readonly}
					></textarea>
				</div>

				{!this.props.readonly ? (
					<Button
						type="button"
						variant="accent"
						text={isSaving ? 'Сохранение...' : 'Сохранить'}
						onclick={handleSave}
						disabled={isSaving}
					/>
				) : null}
			</div>
		)
	},
})
