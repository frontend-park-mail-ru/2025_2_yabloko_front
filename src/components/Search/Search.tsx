import { defineComponent } from '@antiquemouse/framework'
import { Button } from '../Button/Button'
import styles from './Search.module.scss'

interface SearchBarProps {
	placeholder?: string
	onSearch?: (query: string) => void
	value?: string
}

export const SearchBar = defineComponent({
	state() {
		return {
			searchQuery: '',
		}
	},

	render() {
		const props = this.props as SearchBarProps
		const searchQuery = props.value || this.state.searchQuery

		return (
			<form
				class={styles.searchBar}
				{...{
					on: {
						submit: (e: Event) => {
							e.preventDefault()
							props.onSearch?.(searchQuery)
						},
					},
				}}
			>
				<img
					src="/static/icons/search.png"
					alt="search"
					class={styles.searchBar__icon}
				/>
				<input
					type="text"
					placeholder={props.placeholder || 'Поиск ресторанов и категорий'}
					value={searchQuery}
					class={styles.searchBar__input}
					{...{
						on: {
							input: (e: Event) => {
								const target = e.target as HTMLInputElement
								this.updateState({ searchQuery: target.value })
							},
						},
					}}
				/>
				<Button type="submit" variant="accent" text="Найти" />
			</form>
		)
	},
})
