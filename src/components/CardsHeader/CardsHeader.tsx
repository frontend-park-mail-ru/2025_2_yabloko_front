import { defineComponent } from '../../framework/component'
import './CardsHeader.css'

interface CardsHeaderProps {
	onFilterChange?: (filter: string) => void
	onSortToggle?: () => void
}

export const CardsHeader = defineComponent({
	render() {
		const props = this.props as CardsHeaderProps

		const handleFilterClick = (filter: string) => {
			props.onFilterChange?.(filter)
		}

		const handleSortClick = () => {
			props.onSortToggle?.()
		}
		const filters = [
			{ key: 'all', label: 'Все', active: true },
			{ key: 'pickup', label: 'Самовывоз' },
			{ key: 'burgers', label: 'Бургеры' },
			{ key: 'sushi', label: 'Суши' },
			{ key: 'pizza', label: 'Пицца' },
			{ key: 'wok', label: 'Вок' },
			{ key: 'pasta', label: 'Паста' },
			{ key: 'breakfast', label: 'Завтраки' },
		]

		return (
			<div class="cards-header">
				<h2 class="cards-header__title">Рестораны</h2>
				<div class="cards-header__filters filters">
					{filters.map(filter => (
						<button
							class={`filters__button ${filter.active ? 'filters__button--active' : ''}`}
							on={{ click: () => handleFilterClick(filter.key) }}
						>
							{filter.label}
						</button>
					))}

					<div class="filters__more more">
						<button
							class="more__button filters__button"
							on={{ click: () => handleFilterClick('more') }}
						>
							Ещё
						</button>
					</div>

					<div class="filters__sort sort" on={{ click: handleSortClick }}>
						<span class="sort__text">Сортировка</span>
					</div>
				</div>
			</div>
		)
	},
})
