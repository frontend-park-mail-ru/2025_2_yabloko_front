import { defineComponent } from '@antiquemouse/framework'
import { StoreApi } from '../../modules/storeApi' // Используем твой StoreApi
import { navigate } from '../../modules/router' // Добавляем навигацию
import { Card } from '../Card/Card'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './SearchModal.module.scss'

interface SearchModalProps {
	onClose: () => void
}

export const SearchModal = defineComponent({
	state() {
		return {
			searchQuery: '',
			isLoading: false,
			results: [] as any[], // Используем тип из StoreApi
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

	// Дебаунс таймер
	debounceTimer: null as any,

	async performSearch() {
		if (this.state.searchQuery.trim().length < 2) {
			this.updateState({ results: [] })
			return
		}

		this.updateState({ isLoading: true })

		try {
			// Используем метод из StoreApi
			const results = await StoreApi.searchStoresWithItems({
				search: this.state.searchQuery,
				limit: 20,
				min_price: this.state.filters.minPrice
					? Number(this.state.filters.minPrice)
					: undefined,
				max_price: this.state.filters.maxPrice
					? Number(this.state.filters.maxPrice)
					: undefined,
				item_type:
					this.state.filters.selectedTypes.length > 0
						? this.state.filters.selectedTypes
						: undefined,
				tag_id:
					this.state.filters.selectedTags.length > 0
						? this.state.filters.selectedTags
						: undefined,
				category_id:
					this.state.filters.selectedCategories.length > 0
						? this.state.filters.selectedCategories
						: undefined,
				city_id: this.state.filters.cityId || undefined,
			})

			this.updateState({ results: results || [], isLoading: false })
		} catch (error) {
			console.error('Search failed:', error)
			this.updateState({ isLoading: false, results: [] })
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
		clearTimeout(this.debounceTimer)
		this.debounceTimer = setTimeout(() => {
			this.performSearch()
		}, 300)
	},

	handleToggleFilters() {
		this.updateState({ showFilters: !this.state.showFilters })
	},

	handleStoreClick(storeId: string) {
		this.props.onClose()
		navigate(`/store/${storeId}`)
	},

	handleItemClick(itemId: string, storeId: string) {
		this.props.onClose()
		navigate(`/store/${storeId}?highlight=${itemId}`) // Меняем item на highlight
	},

	// Вспомогательные функции для отображения
	formatPrice(price: number): string {
		return new Intl.NumberFormat('ru-RU').format(price)
	},

	truncate(text: string, length: number = 40): string {
		if (!text) return ''
		return text.length > length ? text.substring(0, length) + '...' : text
	},

	getTotalStoresCount(): number {
		return this.state.results.length
	},

	getTotalItemsCount(): number {
		return this.state.results.reduce(
			(sum, result) => sum + (result.items?.length || 0),
			0,
		)
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
							min="0"
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
							min="0"
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
				{/* Можно добавить больше фильтров позже */}
			</div>
		)
	},

	renderStoreCard(store: any) {
		return (
			<Card className={styles.storeCard}>
				<div class={styles.storeCardContent}>
					{store.card_img && (
						<img
							src={store.card_img}
							alt={store.name}
							class={styles.storeImage}
						/>
					)}
					<div class={styles.storeInfo}>
						<h4 class={styles.storeName}>{this.truncate(store.name)}</h4>
						{store.address && (
							<div class={styles.storeAddress}>
								{this.truncate(store.address, 30)}
							</div>
						)}
						{store.rating && (
							<div class={styles.storeRating}>★ {store.rating}</div>
						)}
					</div>
				</div>
			</Card>
		)
	},

	renderItemCard(item: any) {
		return (
			<ProductCard
				id={item.id}
				name={this.truncate(item.name, 25)}
				price={item.price}
				image={item.card_img}
				compact={true}
			/>
		)
	},

	render() {
		const props = this.props as SearchModalProps
		const { searchQuery, isLoading, results, activeTab } = this.state

		// Фильтрация результатов по вкладкам
		const filteredResults = results.filter(result => {
			if (activeTab === 'all') return true
			if (activeTab === 'stores') return result.store
			if (activeTab === 'items') return result.items?.length > 0
			return true
		})

		// Получаем счетчики
		const storesCount = this.getTotalStoresCount()
		const itemsCount = this.getTotalItemsCount()

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
							Все ({storesCount})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'stores' ? styles.active : ''}`}
							onClick={() => this.handleTabChange('stores')}
						>
							Магазины ({storesCount})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'items' ? styles.active : ''}`}
							onClick={() => this.handleTabChange('items')}
						>
							Товары ({itemsCount})
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
								<p>Попробуйте изменить поисковый запрос</p>
							</div>
						) : (
							<div class={styles.results}>
								{filteredResults.map((result, index) => (
									<div key={index} class={styles.resultGroup}>
										{/* Магазин */}
										{result.store && (
											<div
												class={styles.storeResult}
												onClick={() => this.handleStoreClick(result.store.id)}
											>
												{this.renderStoreCard(result.store)}
											</div>
										)}

										{/* Товары магазина */}
										{result.items?.length > 0 && (
											<div class={styles.itemsList}>
												{result.items.slice(0, 3).map((item, idx) => (
													<div
														key={idx}
														class={styles.itemResult}
														onClick={() =>
															this.handleItemClick(item.id, result.store.id)
														}
													>
														{this.renderItemCard(item)}
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
