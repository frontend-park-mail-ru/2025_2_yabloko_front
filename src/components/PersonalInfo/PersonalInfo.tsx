// src/components/PersonalInfo/PersonalInfo.ts
import { defineComponent } from '../../framework/component'
import { Button } from '../Button/Button'
import './PersonalInfo.css'

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
			<div class="personal-info-form">
				<div class="personal-info-form__field">
					<input
						type="email"
						placeholder="Электронная почта"
						value={props.email}
						on={{ input: handleChange('email') }}
						required
					/>
				</div>

				<div class="personal-info-form__field">
					<input
						type="text"
						placeholder="Имя и фамилия"
						value={props.fullName}
						on={{ input: handleChange('fullName') }}
						required
					/>
				</div>

				<h2 class="personal-info-form__title">Адрес доставки</h2>

				<div class="personal-info-form__field">
					<h3>Город</h3>
					<input
						type="text"
						placeholder="Город"
						value={props.city}
						on={{ input: handleChange('city') }}
						required
					/>
				</div>

				<div class="personal-info-form__field">
					<h3>Улица</h3>
					<input
						type="text"
						placeholder="Улица"
						value={props.street}
						on={{ input: handleChange('street') }}
						required
					/>
				</div>

				<div class="personal-info-form__address-row">
					<div class="personal-info-form__address-item">
						<h3>Дом</h3>
						<input
							type="text"
							value={props.house}
							on={{ input: handleChange('house') }}
							required
						/>
					</div>
					<div class="personal-info-form__address-item">
						<h3>Корпус</h3>
						<input
							type="text"
							value={props.building}
							on={{ input: handleChange('building') }}
						/>
					</div>
					<div class="personal-info-form__address-item">
						<h3>Квартира</h3>
						<input
							type="text"
							value={props.apartment}
							on={{ input: handleChange('apartment') }}
						/>
					</div>
				</div>

				<div class="personal-info-form__field">
					<textarea
						placeholder="Комментарий"
						value={props.comment}
						rows={3}
						on={{ input: handleChange('comment') }}
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
