import { defineComponent } from '../../framework/component'
import { Button } from '../Button/Button'
import styles from './PersonalInfo.module.scss'

interface PersonalInfoProps {
	email: string
	fullName: string
	region: string
	city: string
	street: string
	house: string
	building: string
	apartment: string
	comment: string
	onFieldChange: (field: string, value: string) => void
	onSave?: () => void
}

export const PersonalInfo = defineComponent({
	props: [] as (keyof PersonalInfoProps)[],

	render() {
		const props = this.props as PersonalInfoProps

		const handleChange = (field: string) => (e: Event) => {
			const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value
			props.onFieldChange(field, value)
		}

		const handleSave = () => {
			if (props.onSave) {
				props.onSave()
			}
		}

		return (
			<div class={styles.personalInfoForm}>
				<div class={styles.personalInfoForm__field}>
					<input
						type="email"
						placeholder="Электронная почта"
						value={props.email}
						on={{ input: handleChange('email') }}
						class={styles.personalInfoForm__input}
						required
					/>
				</div>

				<div class={styles.personalInfoForm__field}>
					<input
						type="text"
						placeholder="Имя и фамилия"
						value={props.fullName}
						on={{ input: handleChange('fullName') }}
						class={styles.personalInfoForm__input}
						required
					/>
				</div>

				<h2 class={styles.personalInfoForm__title}>Адрес доставки</h2>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Город</h3>
					<input
						type="text"
						placeholder="Город"
						value={props.city}
						on={{ input: handleChange('city') }}
						class={styles.personalInfoForm__input}
						required
					/>
				</div>

				<div class={styles.personalInfoForm__field}>
					<h3 class={styles.personalInfoForm__addressLabel}>Улица</h3>
					<input
						type="text"
						placeholder="Улица"
						value={props.street}
						on={{ input: handleChange('street') }}
						class={styles.personalInfoForm__input}
						required
					/>
				</div>

				<div class={styles.personalInfoForm__addressRow}>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Дом</h3>
						<input
							type="text"
							value={props.house}
							on={{ input: handleChange('house') }}
							class={styles.personalInfoForm__addressInput}
							required
						/>
					</div>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Корпус</h3>
						<input
							type="text"
							value={props.building}
							on={{ input: handleChange('building') }}
							class={styles.personalInfoForm__addressInput}
						/>
					</div>
					<div class={styles.personalInfoForm__addressItem}>
						<h3 class={styles.personalInfoForm__addressLabel}>Квартира</h3>
						<input
							type="text"
							value={props.apartment}
							on={{ input: handleChange('apartment') }}
							class={styles.personalInfoForm__addressInput}
						/>
					</div>
				</div>

				<div class={styles.personalInfoForm__field}>
					<textarea
						placeholder="Комментарий"
						value={props.comment}
						rows={3}
						on={{ input: handleChange('comment') }}
						class={styles.personalInfoForm__textarea}
					></textarea>
				</div>

				<Button
					type="button"
					variant="accent"
					text="Сохранить"
					onClick={handleSave}
				/>
			</div>
		)
	},
})
