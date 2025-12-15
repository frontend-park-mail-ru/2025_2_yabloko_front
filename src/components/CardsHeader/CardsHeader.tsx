import { defineComponent } from '@antiquemouse/framework'
import styles from './CardsHeader.module.scss'

interface CardsHeaderProps {
	onFilterChange?: (type: 'all' | 'tag' | 'category', id: string) => void
	tags: any[]
	categories: any[]
	currentFilter: any
}

export const CardsHeader = defineComponent({
	render() {
		const props = this.props as CardsHeaderProps
		const { currentFilter } = props

		return (
			<div class={styles.cardsHeader}>
				<h2 class={styles.cardsHeader__title}>Рестораны</h2>
				<div class={styles.cardsHeader__filters}>
					<button
						class={`${styles.filter__button} ${currentFilter?.type === 'all'
								? styles['filter__button--active']
								: ''
							}`}
						{...{
							on: {
								click: () => props.onFilterChange?.('all', 'all')
							}
						}}
					>
						Все
					</button>

					{props.categories.map(category => (
						<button
							class={`${styles.filter__button} ${currentFilter?.type === 'category' &&
									currentFilter?.id === category.id
									? styles['filter__button--active']
									: ''
								}`}
							{...{
								on: {
									click: () => props.onFilterChange?.('category', category.id)
								}
							}}
						>
							{category.name}
						</button>
					))}

					{props.tags.map(tag => (
						<button
							class={`${styles.filter__button} ${currentFilter?.type === 'tag' && currentFilter?.id === tag.id
									? styles['filter__button--active']
									: ''
								}`}
							{...{
								on: {
									click: () => props.onFilterChange?.('tag', tag.id)
								}
							}}
						>
							{tag.name}
						</button>
					))}
				</div>
			</div>
		)
	},
})
