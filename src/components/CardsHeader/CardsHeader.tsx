import { defineComponent } from '@antiquemouse/framework'
import styles from './CardsHeader.module.scss'

interface CardsHeaderProps {
	onFilterChange?: (type: 'all' | 'tag' | 'category', id: string) => void
	tags: any[]
	categories: any[]
}

export const CardsHeader = defineComponent({
	render() {
		const props = this.props as CardsHeaderProps

		const handleFilterClick = (
			type: 'all' | 'tag' | 'category',
			id: string,
		) => {
			props.onFilterChange?.(type, id)
		}

		return (
			<div class={styles.cardsHeader}>
				<h2 class={styles.cardsHeader__title}>Рестораны</h2>
				<div class={styles.cardsHeader__filters}>
					<button
						class={styles.filter__button}
						on={{ click: () => handleFilterClick('all', 'all') }}
					>
						Все
					</button>

					{props.categories.map(category => (
						<button
							class={styles.filter__button}
							on={{ click: () => handleFilterClick('category', category.id) }}
						>
							{category.name}
						</button>
					))}

					{props.tags.map(tag => (
						<button
							class={styles.filter__button}
							on={{ click: () => handleFilterClick('tag', tag.id) }}
						>
							{tag.name}
						</button>
					))}
				</div>
			</div>
		)
	},
})
