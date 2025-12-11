import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './SearchModal.module.scss'

interface SearchModalProps {
	onClose: () => void
	searchQuery: string // Принимаем запрос из навбара
}

export const SearchModal = defineComponent({
	state() {
		return {
			isLoading: false,
			results: [] as any[],
			activeTab: 'all',
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

	debounceTimer: null as any,

	async onMounted() {
		// Автоматически запускаем поиск при открытии модалки
		this.performSearch()
	},

	async performSearch() {
		const searchQuery = this.props.searchQuery
		if (!searchQuery || searchQuery.trim().length < 2) {
			return
		}

		this.updateState({ isLoading: true })

		try {
			const results = await StoreApi.searchStoresWithItems({
				search: searchQuery,
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

			this.updateState({ results: results || [], isLoading: false })
		} catch (error) {
			console.error('Search failed:', error)
			this.updateState({ isLoading: false, results: [] })
		}
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
		navigate(`/store/${storeId}?highlight=${itemId}`)
	},

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
							{...{
								on: {
									input: (e: InputEvent) =>
										this.handleFilterChange(
											'minPrice',
											(e.target as HTMLInputElement).value,
										),
								},
							}}
						/>
						<span>-</span>
						<input
							type="number"
							placeholder="До"
							min="0"
							value={this.state.filters.maxPrice}
							{...{
								on: {
									input: (e: InputEvent) =>
										this.handleFilterChange(
											'maxPrice',
											(e.target as HTMLInputElement).value,
										),
								},
							}}
						/>
					</div>
				</div>
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
		const { isLoading, results, activeTab } = this.state

		const filteredResults = results.filter(result => {
			if (activeTab === 'all') return true
			if (activeTab === 'stores') return result.store
			if (activeTab === 'items') return result.items?.length > 0
			return true
		})

		const storesCount = this.getTotalStoresCount()
		const itemsCount = this.getTotalItemsCount()

		return (
			<div
				class={styles.searchModal}
				{...{
					on: {
						click: (e: Event) => {
							if (e.target === e.currentTarget) {
								props.onClose()
							}
						},
					},
				}}
			>
				<div class={styles.searchModal__container}>
					<div class={styles.searchModal__header}>
						<div class={styles.searchQueryDisplay}>
							<h3>Результаты поиска: "{props.searchQuery}"</h3>
						</div>

						<button
							class={styles.filtersButton}
							{...{
								on: {
									click: this.handleToggleFilters.bind(this),
								},
							}}
						>
							Фильтры
						</button>

						<button
							class={styles.closeButton}
							{...{
								on: {
									click: props.onClose,
								},
							}}
						>
							✕
						</button>
					</div>

					{this.renderFilters()}

					<div class={styles.tabs}>
						<button
							class={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
							{...{
								on: {
									click: () => this.handleTabChange('all'),
								},
							}}
						>
							Все ({storesCount})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'stores' ? styles.active : ''}`}
							{...{
								on: {
									click: () => this.handleTabChange('stores'),
								},
							}}
						>
							Магазины ({storesCount})
						</button>
						<button
							class={`${styles.tab} ${activeTab === 'items' ? styles.active : ''}`}
							{...{
								on: {
									click: () => this.handleTabChange('items'),
								},
							}}
						>
							Товары ({itemsCount})
						</button>
					</div>

					<div class={styles.searchModal__body}>
						{isLoading ? (
							<div class={styles.loading}>
								<div class={styles.spinner}></div>
								<p>Ищем...</p>
							</div>
						) : filteredResults.length === 0 ? (
							<div class={styles.noResults}>
								<p>Ничего не найдено по запросу "{props.searchQuery}"</p>
								<p>Попробуйте изменить поисковый запрос</p>
							</div>
						) : (
							<div class={styles.results}>
								{filteredResults.map((result, index) => (
									<div key={index} class={styles.resultGroup}>
										{result.store && (
											<div
												class={styles.storeResult}
												{...{
													on: {
														click: () => this.handleStoreClick(result.store.id),
													},
												}}
											>
												{this.renderStoreCard(result.store)}
											</div>
										)}

										{result.items?.length > 0 && (
											<div class={styles.itemsList}>
												{result.items.slice(0, 3).map((item, idx) => (
													<div
														key={idx}
														class={styles.itemResult}
														{...{
															on: {
																click: () =>
																	this.handleItemClick(
																		item.id,
																		result.store.id,
																	),
															},
														}}
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
