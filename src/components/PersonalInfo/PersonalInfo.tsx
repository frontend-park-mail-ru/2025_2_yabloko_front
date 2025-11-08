import { defineComponent } from '../../framework/component'
import { Button } from '../Button/Button'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
	email: string
	fullName: string
	city: string
	street: string
	house: string
	building: string
	apartment: string
	comment: string
	onFieldChange: (field: string, value: string) => void
	onSave?: () => void
	readonly?: boolean
	availableCities?: string[]
}

export const PersonalInfo = defineComponent({
	props: [] as (keyof PersonalInfoProps)[],

	state() {
		return {
			errors: {} as Record<string, string>,
		}
	},

	validateField(field: string, value: string): string {
    switch (field) {
        case 'email':
            if (!value) return 'Email обязателен'
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Некорректный email'
            return ''
        
        case 'fullName':
            if (!value) return 'Имя обязательно'
            if (value.length < 2) return 'Имя слишком короткое'
            if (!/^[а-яёА-ЯЁ\-\s]+$/.test(value)) return 'Только кириллица, пробелы и тире'
            return ''
        
        case 'city':
            if (!value) return 'Город обязателен'
            if (this.props.availableCities && !this.props.availableCities.includes(value)) {
                return 'Город не найден в списке доступных'
            }
            if (!/^[а-яёА-ЯЁ\-\s]+$/.test(value)) return 'Только кириллица, пробелы и тире'
            return ''
        
        case 'street':
            if (!value) return 'Улица обязательна'
            if (value.includes(',')) return 'Не используйте запятые в названии улицы'
            if (!/^[а-яёА-ЯЁ0-9\-\s]+$/.test(value)) return 'Только кириллица, цифры, пробелы и тире'
            return ''
        
        case 'house':
            if (!value) return 'Дом обязателен'
            if (value.includes(',')) return 'Не используйте запятые в номере дома'
            if (!/^[а-яёА-ЯЁ0-9\-\/]+$/.test(value)) return 'Только кириллица, цифры, тире и слэш'
            return ''
        
        case 'building':
            if (value.includes(',')) return 'Не используйте запятые в номере корпуса'
            if (!/^[а-яёА-ЯЁ0-9\-\/]*$/.test(value)) return 'Только кириллица, цифры, тире и слэш'
            return ''
        
        case 'apartment':
            if (value.includes(',')) return 'Не используйте запятые в номере квартиры'
            if (!/^[а-яёА-ЯЁ0-9\-\/]*$/.test(value)) return 'Только кириллица, цифры, тире и слэш'
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

	validateAll(): boolean {
		const props = this.props as PersonalInfoProps
		const errors: Record<string, string> = {}

		errors.email = this.validateField('email', props.email)
		errors.fullName = this.validateField('fullName', props.fullName)
		errors.city = this.validateField('city', props.city)
		errors.street = this.validateField('street', props.street)
		errors.house = this.validateField('house', props.house)
		errors.building = this.validateField('building', props.building)
		errors.apartment = this.validateField('apartment', props.apartment)

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
		const { errors } = this.state

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
						<div class={styles.personalInfoForm__error}>{errors.email}</div>
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
						<div class={styles.personalInfoForm__error}>{errors.fullName}</div>
					)}
				</div>

				<h2 class={styles.personalInfoForm__title}>Адрес доставки</h2>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Город</h3>
					<input
						type="text"
						placeholder="Город"
						value={props.city}
						on={{ input: this.handleChange('city') }}
						class={`${styles.personalInfoForm__input} ${errors.city ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.city && (
						<div class={styles.personalInfoForm__error}>{errors.city}</div>
					)}
				</div>

				{/* Street */}
				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Улица</h3>
					<input
						type="text"
						placeholder="Улица"
						value={props.street}
						on={{ input: this.handleChange('street') }}
						class={`${styles.personalInfoForm__input} ${errors.street ? styles.personalInfoForm__input_error : ''}`}
						required
						disabled={props.readonly}
					/>
					{errors.street && (
						<div class={styles.personalInfoForm__error}>{errors.street}</div>
					)}
				</div>

				<div class={styles.personalInfoForm__addressRow}>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Дом</h3>
						<input
							type="text"
							value={props.house}
							on={{ input: this.handleChange('house') }}
							class={`${styles.personalInfoForm__addressInput} ${errors.house ? styles.personalInfoForm__input_error : ''}`}
							required
							disabled={props.readonly}
						/>
						{errors.house && (
							<div class={styles.personalInfoForm__error}>{errors.house}</div>
						)}
					</div>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Корпус</h3>
						<input
							type="text"
							value={props.building}
							on={{ input: this.handleChange('building') }}
							class={`${styles.personalInfoForm__addressInput} ${errors.building ? styles.personalInfoForm__input_error : ''}`}
							disabled={props.readonly}
						/>
						{errors.building && (
							<div class={styles.personalInfoForm__error}>
								{errors.building}
							</div>
						)}
					</div>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Квартира</h3>
						<input
							type="text"
							value={props.apartment}
							on={{ input: this.handleChange('apartment') }}
							class={`${styles.personalInfoForm__addressInput} ${errors.apartment ? styles.personalInfoForm__input_error : ''}`}
							disabled={props.readonly}
						/>
						{errors.apartment && (
							<div class={styles.personalInfoForm__error}>
								{errors.apartment}
							</div>
						)}
					</div>
				</div>

				<div class={styles.personalInfoForm__field}>
					<textarea
						placeholder="Комментарий"
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
