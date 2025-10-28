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

		return (
			<div class="cards-header">
				<h2 class="cards-header__title">Рестораны</h2>
				<div class="cards-header__filters filters">
					<button
						class="filters__button filters__button--active"
						on={{ click: () => handleFilterClick('all') }}
					>
						Все
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('pickup') }}
					>
						Самовывоз
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('burgers') }}
					>
						Бургеры
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('sushi') }}
					>
						Суши
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('pizza') }}
					>
						Пицца
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('wok') }}
					>
						Вок
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('pasta') }}
					>
						Паста
					</button>
					<button
						class="filters__button"
						on={{ click: () => handleFilterClick('breakfast') }}
					>
						Завтраки
					</button>

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
