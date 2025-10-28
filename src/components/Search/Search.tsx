import { defineComponent } from '../../framework/component'
import './Search.css'

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
				class="search-bar"
				{...{
					on: {
						submit: (e: Event) => {
							e.preventDefault()
							props.onSearch?.(searchQuery)
						},
					},
				}}
			>
				<img src="/static/icons/search.png" alt="search" class="search-icon" />
				<input
					type="text"
					placeholder={props.placeholder || 'Поиск ресторанов и категорий'}
					value={searchQuery}
					{...{
						on: {
							input: (e: Event) => {
								const target = e.target as HTMLInputElement
								this.updateState({ searchQuery: target.value })
							},
						},
					}}
				/>
				<button type="submit">Найти</button>
			</form>
		)
	},
})
