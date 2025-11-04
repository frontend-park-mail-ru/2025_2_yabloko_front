import { defineComponent } from '../../framework/component'
import { authManager } from '../../modules/authManager'
import { StoreApi } from '../../modules/storeApi'
import styles from './Selector.module.scss'

interface City {
	id: string
	name: string
}

const CITY_KEY = 'selected_city'

function loadSelectedCity(): City | null {
	try {
		const data = localStorage.getItem(CITY_KEY)
		return data ? JSON.parse(data) : null
	} catch (error) {
		console.error(error)
		return null
	}
}

export const CitySelector = defineComponent({
	state() {
		return {
			cities: [] as City[],
			selectedCity: loadSelectedCity(),
			query: '',
			isOpen: false,
		}
	},

	onMounted() {
		const handleDocumentClick = (e: Event) => {
			const target = e.target as Element
			if (!target.closest(`.${styles.citySelector}`)) {
				this.updateState({ isOpen: false })
			}
		}

		document.addEventListener('click', handleDocumentClick)

		this.handleDocumentClick = handleDocumentClick

		this.debounceTimer = null

		StoreApi.getCities()
			.then(cities => {
				this.updateState({ cities })
				if (!this.state.selectedCity && cities.length > 0) {
					this.handleSelect(cities[0])
				}
			})
			.catch(error => {
				console.error(error)
			})
	},

	onUnmounted() {
		if (this.handleDocumentClick) {
			document.removeEventListener('click', this.handleDocumentClick)
		}
		if (this.debounceTimer) {
			clearTimeout(this.debounceTimer)
		}
	},

	saveSelectedCity(city: City): void {
		if (!authManager.isAuthenticated()) {
			try {
				localStorage.setItem(CITY_KEY, JSON.stringify(city))
			} catch (error) {
				console.error(error)
			}
		}
		this.updateState({ selectedCity: city })
	},

	handleSelect(city: City): void {
		this.saveSelectedCity(city)
		this.updateState({ isOpen: false, query: '' })
	},

	toggleDropdown(): void {
		this.updateState({ isOpen: !this.state.isOpen })
	},

	handleSearchInput(value: string): void {
		if (this.debounceTimer) {
			clearTimeout(this.debounceTimer)
		}

		this.debounceTimer = setTimeout(() => {
			this.updateState({ query: value })
		}, 300)
	},

	render() {
		const { cities, selectedCity, query, isOpen } = this.state
		const filteredCities = cities.filter(city =>
			city.name.toLowerCase().includes(query.toLowerCase()),
		)

		return (
			<div class={styles.citySelector}>
				<div
					class={styles.citySelector__trigger}
					{...{
						on: {
							click: (e: Event) => {
								e.stopPropagation()
								this.toggleDropdown()
							},
						},
					}}
				>
					<img
						src="/static/icons/address.png"
						alt="Город"
						class={styles.citySelector__icon}
					/>
					<span class={styles.citySelector__value}>
						{selectedCity ? selectedCity.name : 'Выберите город'}
					</span>
					<div class={styles.citySelector__arrow}></div>
				</div>
				{isOpen ? (
					<div
						class={styles.citySelector__dropdown}
						{...{
							on: {
								click: (e: Event) => e.stopPropagation(),
							},
						}}
					>
						<input
							type="text"
							class={styles.citySelector__search}
							placeholder="Поиск..."
							value={query}
							{...{
								on: {
									input: (e: Event) => {
										const value = (e.target as HTMLInputElement).value
										this.handleSearchInput(value)
									},
								},
							}}
						/>
						<div class={styles.citySelector__list}>
							{filteredCities.length > 0 ? (
								filteredCities.map(city => (
									<div
										class={styles.citySelector__option}
										{...{
											on: {
												click: () => this.handleSelect(city),
											},
										}}
									>
										{city.name}
									</div>
								))
							) : (
								<div class={styles.citySelector__empty}>Город не найден</div>
							)}
						</div>
					</div>
				) : null}
			</div>
		)
	},
})
