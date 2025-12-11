import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { Card } from '../Card/Card'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './SearchWidget.module.scss'

interface SearchModalProps {
	onClose: () => void
	searchQuery: string
}

export const SearchModal = defineComponent({
	state() {
		return {
			isLoading: false,
			results: [] as any[],
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
		this.performSearch()
	},

	async performSearch() {
		const searchQuery = this.props.searchQuery
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

	handleResultClick(storeId: string) {
		this.props.onClose()
		navigate(`/stores/${storeId}`)
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
			<div
				className={styles.storeCard}
				{...{
					on: {
						click: () => this.handleStoreClick(store.id),
					},
				}}
			>
				<div class={styles.storeCardContent}>
					{store.card_img && (
						<img
							src={store.card_img}
							alt={store.name}
							class={styles.storeImage}
						/>
					)}
					<div class={styles.storeInfo}>
						<h4 class={styles.storeName}>{store.name}</h4>
						<div class={styles.storeRating}>★ {store.rating}</div>
					</div>
				</div>
			</div>
		)
	},

	render() {
		const props = this.props as SearchModalProps
		const { isLoading, results } = this.state

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
					<h3 class={styles.searchTitle}>
						Результаты поиска: "{props.searchQuery}"
					</h3>

					{this.renderFilters()}

					<div class={styles.searchModal__body}>
						{isLoading ? (
							<div class={styles.loading}>
								<div class={styles.spinner}></div>
								<p>Ищем...</p>
							</div>
						) : results.length === 0 ? (
							<div class={styles.noResults}>
								<p>Ничего не найдено по запросу "{props.searchQuery}"</p>
							</div>
						) : (
							<div class={styles.results}>
								{results.map((result, index) => (
									<div key={index} class={styles.resultGroup}>
										{result.store && (
											<div
												class={styles.storeCard}
												{...{
													on: {
														click: () =>
															this.handleResultClick(result.store.id),
													},
												}}
											>
												<div class={styles.storeCardContent}>
													{result.store.card_img && (
														<img
															src={result.store.card_img}
															alt={result.store.name}
															class={styles.storeImage}
														/>
													)}
													<div class={styles.storeInfo}>
														<h4 class={styles.storeName}>
															{result.store.name}
														</h4>
														<div class={styles.storeRating}>
															★ {result.store.rating}
														</div>
													</div>
												</div>
											</div>
										)}

										{result.items?.length > 0 && (
											<div class={styles.itemsList}>
												{result.items.slice(0, 3).map((item, idx) => (
													<ProductCard
														key={idx}
														product={{
															id: item.id,
															name: item.name,
															description: '',
															price: item.price,
															card_img: item.card_img,
														}}
														{...{
															on: {
																click: (e: Event) => {
																	e.stopPropagation()
																	this.handleResultClick(result.store.id)
																},
															},
														}}
													/>
												))}
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
