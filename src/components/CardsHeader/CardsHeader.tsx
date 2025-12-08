import { defineComponent } from '@antiquemouse/framework'
import styles from './CardsHeader.module.scss'

interface CardsHeaderProps {
	onFilterChange?: (filter: string) => void
	onSortToggle?: () => void
	currentFilter?: string
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
			{ key: 'all', label: 'Все' },
			{ key: 'pickup', label: 'Самовывоз' },
			{ key: 'burgers', label: 'Бургеры' },
			{ key: 'sushi', label: 'Суши' },
			{ key: 'pizza', label: 'Пицца' },
			{ key: 'wok', label: 'Вок' },
			{ key: 'pasta', label: 'Паста' },
			{ key: 'breakfast', label: 'Завтраки' },
		]

		return (
			<div class={styles.cardsHeader}>
				<h2 class={styles.cardsHeader__title}>Рестораны</h2>
				<div class={styles.cardsHeader__filters}>
					{filters.map(filter => (
						<button
							key={filter.key}
							class={[
								styles.filter__button,
								props.currentFilter === filter.key
									? styles['filter__button--active']
									: '',
							]
								.filter(Boolean)
								.join(' ')}
							on={{ click: () => handleFilterClick(filter.key) }}
						>
							{filter.label}
						</button>
					))}
				</div>
			</div>
		)
	},
})
