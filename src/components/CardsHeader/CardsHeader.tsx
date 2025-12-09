import { defineComponent } from '@antiquemouse/framework'
import styles from './CardsHeader.module.scss'

interface CardsHeaderProps {
	onFilterChange?: (filterType: 'all' | 'tag' | 'category', id: string) => void
	onSortToggle?: () => void
	tags: any[]
	categories: any[]
}

export const CardsHeader = defineComponent({
	render() {
		const props = this.props as CardsHeaderProps

		return (
			<div class={styles.cardsHeader}>
				<h2 class={styles.cardsHeader__title}>Рестораны</h2>

				<div class={styles.cardsHeader__filters}>
					<button
						class={styles.filter__button}
						on={{ click: () => props.onFilterChange?.('all', 'all') }}
					>
						Все
					</button>
				</div>

				{props.categories.length > 0 && (
					<div class={styles.cardsHeader__section}>
						<h3 class={styles.cardsHeader__subtitle}>Категории</h3>
						<div class={styles.cardsHeader__filters}>
							{props.categories.map(category => (
								<button
									key={`cat-${category.id}`}
									class={styles.filter__button}
									on={{
										click: () =>
											props.onFilterChange?.('category', category.id),
									}}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				)}

				{props.tags.length > 0 && (
					<div class={styles.cardsHeader__section}>
						<h3 class={styles.cardsHeader__subtitle}>Особенности</h3>
						<div class={styles.cardsHeader__filters}>
							{props.tags.map(tag => (
								<button
									key={`tag-${tag.id}`}
									class={styles.filter__button}
									on={{ click: () => props.onFilterChange?.('tag', tag.id) }}
								>
									{tag.name}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		)
	},
})
