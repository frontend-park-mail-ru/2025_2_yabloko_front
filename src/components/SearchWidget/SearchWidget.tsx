import { defineComponent } from '@antiquemouse/framework'
import { searchStoresWithItems } from '../../modules/storeApi'
import { ProductCard } from '../ProductCard/ProductCard'
import { Card } from '../Card/Card'
import styles from './SearchModal.module.scss'

interface SearchModalProps {
	onClose: () => void
}

interface SearchResult {
	store: {
		id: string
		name: string
		description: string
		city_id: string
		address: string
		card_img: string
		rating: number
		tags_id: string[]
		categories_id: string[]
		open_at: string
		closed_at: string
	}
	items: Array<{
		id: string
		name: string
		price: number
		types_id: string[]
		card_img: string
	}>
}

export const SearchModal = defineComponent({
	state() {
		return {
			searchQuery: '',
			isLoading: false,
			results: [] as SearchResult[],
			activeTab: 'all', // 'all' | 'stores' | 'items'
			filters: {
				minPrice: '',
				maxPrice: '',
				selectedTypes: [] as string[],
				selectedTags: [] as string[],
				selectedCategories: [] as string[],
				cityId: '',
			},
			showFilters: false,
		}
	},

	async performSearch() {
		if (this.state.searchQuery.trim().length < 2) {
			return
		}

		this.updateState({ isLoading: true })

		try {
			const results = await searchStoresWithItems({
				search: this.state.searchQuery,
				limit: 20,
				min_price: this.state.filters.minPrice
					? Number(this.state.filters.minPrice)
					: undefined,
				max_price: this.state.filters.maxPrice
					? Number(this.state.filters.maxPrice)
					: undefined,
				item_type: this.state.filters.selectedTypes,
				tag_id: this.state.filters.selectedTags,
				category_id: this.state.filters.selectedCategories,
				city_id: this.state.filters.cityId || undefined,
			})

			this.updateState({ results, isLoading: false })
		} catch (error) {
			console.error('Search failed:', error)
			this.updateState({ isLoading: false })
		}
	},

	handleSearchInput(e: InputEvent) {
		const target = e.target as HTMLInputElement
		this.updateState({ searchQuery: target.value })

		// Дебаунс для поиска
		clearTimeout(this.debounceTimer)
		this.debounceTimer = setTimeout(() => {
			this.performSearch()
		}, 300)
	},

	handleClearSearch() {
		this.updateState({
			searchQuery: '',
			results: [],
		})
	},

	handleTabChange(tab: string) {
		this.updateState({ activeTab: tab })
	},

	handleFilterChange(filterName: string, value: any) {
		const filters = { ...this.state.filters, [filterName]: value }
		this.updateState({ filters })
		this.performSearch()
	},

	handleToggleFilters() {
		this.updateState({ showFilters: !this.state.showFilters })
	},

	handleStoreClick(storeId: string) {
		// Переход на страницу магазина
		this.props.onClose()
		navigate(`/store/${storeId}`)
	},

	handleItemClick(itemId: string, storeId: string) {
		// Переход к товару в магазине
		this.props.onClose()
		navigate(`/store/${storeId}?item=${itemId}`)
	},

	renderFilters() {
		if (!this.state.showFilters) return null

		return (
			<div class={styles.filters}>
				<div class={styles.filterGroup}>
					<label>Цена</label>
					<div class={styles.priceInputs}>
						<input
							type="number"
							placeholder="От"
							value={this.state.filters.minPrice}
							onInput={e =>
								this.handleFilterChange(
									'minPrice',
									(e.target as HTMLInputElement).value,
								)
							}
						/>
						<span>-</span>
						<input
							type="number"
							placeholder="До"
							value={this.state.filters.maxPrice}
							onInput={e =>
								this.handleFilterChange(
									'maxPrice',
									(e.target as HTMLInputElement).value,
								)
							}
						/>
					</div>
				</div>

				{/* Здесь можно добавить выбор тегов, категорий, города через выпадающие списки */}
			</div>
		)
	},

	render() {
		const props = this.props as SearchModalProps
		const { searchQuery, isLoading, results, activeTab } = this.state

		// Фильтрация результатов по вкладкам
		const filteredResults = results.filter(result => {
			if (activeTab === 'all') return true
			if (activeTab === 'stores') return result.store
			if (activeTab === 'items') return result.items.length > 0
			return true
		})

		return (
			<div
				class={styles.searchModal}
				on={{
					click: (e: Event) => {
						if (e.target === e.currentTarget) {
							props.onClose()
						}
					},
				}}
			>
				<div class={styles.searchModal__container}>
					{/* Шапка с поиском */}
					<div class={styles.searchModal__header}>
						<div class={styles.searchInputWrapper}>
							<input
								type="text"
								class={styles.searchInput}
								placeholder="Поиск магазинов и товаров..."
								value={searchQuery}
								onInput={this.handleSearchInput.bind(this)}
								autofocus
							/>
							{searchQuery && (
								<button
									class={styles.clearButton}
									onClick={this.handleClearSearch.bind(this)}
								>
									✕
								</button>
							)}
							{isLoading && <div class={styles.spinner}></div>}
						</div>

						<button
							class={styles.filtersButton}
							onClick={this.handleToggleFilters.bind(this)}
						>
							Фильтры
						</button>

						<button class={styles.closeButton} onClick={props.onClose}>
							✕
						</button>
					</div>

					{/* Фильтры */}
					{this.renderFilters()}

					{/* Табы */}
					<div class={styles.tabs}>
						<button
							class={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
							onClick={() => this.handleTabChange('all')}
						>
							Все ({results.length})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'stores' ? styles.active : ''}`}
							onClick={() => this.handleTabChange('stores')}
						>
							Магазины ({results.length})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'items' ? styles.active : ''}`}
							onClick={() => this.handleTabChange('items')}
						>
							Товары ({results.reduce((sum, r) => sum + r.items.length, 0)})
						</button>
					</div>

					{/* Результаты */}
					<div class={styles.searchModal__body}>
						{searchQuery.length < 2 ? (
							<div class={styles.placeholder}>
								<p>Введите минимум 2 символа для поиска</p>
							</div>
						) : isLoading ? (
							<div class={styles.loading}>
								<div class={styles.spinner}></div>
								<p>Ищем...</p>
							</div>
						) : filteredResults.length === 0 ? (
							<div class={styles.noResults}>
								<p>Ничего не найдено по запросу "{searchQuery}"</p>
								<p>Попробуйте изменить поисковый запрос или фильтры</p>
							</div>
						) : (
							<div class={styles.results}>
								{filteredResults.map(result => (
									<div class={styles.resultGroup}>
										{/* Магазин */}
										<div
											class={styles.storeResult}
											onClick={() => this.handleStoreClick(result.store.id)}
										>
											<StoreCard
												id={result.store.id}
												name={result.store.name}
												rating={result.store.rating}
												address={result.store.address}
												card_img={result.store.card_img}
												isCompact
											/>
										</div>

										{/* Товары магазина */}
										{result.items.length > 0 && (
											<div class={styles.itemsList}>
												{result.items.slice(0, 3).map(item => (
													<div
														class={styles.itemResult}
														onClick={() =>
															this.handleItemClick(item.id, result.store.id)
														}
													>
														<ItemCard
															id={item.id}
															name={item.name}
															price={item.price}
															card_img={item.card_img}
															isCompact
														/>
													</div>
												))}
												{result.items.length > 3 && (
													<div class={styles.moreItems}>
														+{result.items.length - 3} товаров
													</div>
												)}
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		)
	},
})
