import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './SearchBar.module.scss'

interface SearchWithModalProps {
	placeholder?: string
}

export const SearchBar = defineComponent({
	state() {
		return {
			searchQuery: '',
			isModalOpen: false,
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

	// Обработка ввода в поле поиска
	handleInput(e: InputEvent) {
		const target = e.target as HTMLInputElement
		const value = target.value

		this.updateState({ searchQuery: value })

		// Дебаунс поиска
		clearTimeout(this.debounceTimer)
		this.debounceTimer = setTimeout(() => {
			if (value.trim().length >= 2) {
				this.performSearch(value)
			} else {
				this.updateState({ results: [] })
			}
		}, 300)
	},

	// Открыть модалку при фокусе
	handleFocus() {
		if (this.state.searchQuery.trim().length >= 2) {
			this.updateState({ isModalOpen: true })
		}
	},

	// Открыть модалку при клике на кнопку "Найти"
	handleSubmit(e: Event) {
		e.preventDefault()
		if (this.state.searchQuery.trim().length >= 2) {
			this.updateState({ isModalOpen: true })
			this.performSearch(this.state.searchQuery)
		}
	},

	// Закрыть модалку
	closeModal() {
		this.updateState({
			isModalOpen: false,
			results: [],
			isLoading: false,
		})
	},

	// Выполнить поиск
	async performSearch(query: string) {
		this.updateState({ isLoading: true })

		try {
			const results = await StoreApi.searchStoresWithItems({
				search: query,
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

			this.updateState({
				results: results || [],
				isLoading: false,
				isModalOpen: true, // Открываем модалку с результатами
			})
		} catch (error) {
			console.error('Search failed:', error)
			this.updateState({
				isLoading: false,
				results: [],
				isModalOpen: true, // Все равно открываем модалку
			})
		}
	},

	handleResultClick(storeId: string) {
		this.closeModal()
		navigate(`/stores/${storeId}`)
	},

	// Остановить всплытие кликов внутри модалки
	handleModalClick(e: Event) {
		e.stopPropagation()
	},

	// Закрыть модалку только при клике на оверлей
	handleOverlayClick(e: Event) {
		if (e.target === e.currentTarget) {
			this.closeModal()
		}
	},

	renderFilters() {
		if (!this.state.showFilters) return null

		return (
			<div
				class={styles.filters}
				{...{ on: { click: this.handleModalClick.bind(this) } }}
			>
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
									input: (e: InputEvent) => {
										e.stopPropagation()
										// handleFilterChange нужно добавить если нужны фильтры
									},
									click: this.handleModalClick.bind(this),
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
									input: (e: InputEvent) => {
										e.stopPropagation()
										// handleFilterChange нужно добавить если нужны фильтры
									},
									click: this.handleModalClick.bind(this),
								},
							}}
						/>
					</div>
				</div>
			</div>
		)
	},

	render() {
		const { searchQuery, isModalOpen, isLoading, results } = this.state
		const placeholder = this.props.placeholder || 'Поиск ресторанов и категорий'

		return (
			<div class={styles.searchWithModal}>
				{/* Поле поиска (всегда видимо) */}
				<form
					class={styles.searchBar}
					{...{
						on: {
							submit: this.handleSubmit.bind(this),
							click: this.handleModalClick.bind(this), // Останавливаем всплытие
						},
					}}
				>
					<img
						src="/static/icons/search.png"
						alt="search"
						class={styles.searchBar__icon}
						{...{ on: { click: this.handleModalClick.bind(this) } }}
					/>
					<input
						type="text"
						placeholder={placeholder}
						value={searchQuery}
						class={styles.searchBar__input}
						{...{
							on: {
								input: this.handleInput.bind(this),
								focus: this.handleFocus.bind(this),
								click: this.handleModalClick.bind(this),
							},
						}}
					/>
					<Button
						type="submit"
						variant="accent"
						text="Найти"
						{...{ on: { click: this.handleModalClick.bind(this) } }}
					/>
				</form>

				{/* Модалка с результатами */}
				{isModalOpen && (
					<div
						class={styles.searchModal}
						{...{
							on: {
								click: this.handleOverlayClick.bind(this),
							},
						}}
					>
						<div
							class={styles.searchModal__container}
							{...{
								on: {
									click: this.handleModalClick.bind(this),
								},
							}}
						>
							<h3
								class={styles.searchTitle}
								{...{ on: { click: this.handleModalClick.bind(this) } }}
							>
								Результаты поиска: "{searchQuery}"
							</h3>

							{this.renderFilters()}

							<div
								class={styles.searchModal__body}
								{...{ on: { click: this.handleModalClick.bind(this) } }}
							>
								{isLoading ? (
									<div
										class={styles.loading}
										{...{ on: { click: this.handleModalClick.bind(this) } }}
									>
										<div class={styles.spinner}></div>
										<p>Ищем...</p>
									</div>
								) : results.length === 0 ? (
									<div
										class={styles.noResults}
										{...{ on: { click: this.handleModalClick.bind(this) } }}
									>
										<p>Ничего не найдено по запросу "{searchQuery}"</p>
									</div>
								) : (
									<div
										class={styles.results}
										{...{ on: { click: this.handleModalClick.bind(this) } }}
									>
										{results.map((result, index) => (
											<div
												key={index}
												class={styles.resultGroup}
												{...{ on: { click: this.handleModalClick.bind(this) } }}
											>
												{result.store && (
													<div
														class={styles.storeCard}
														{...{
															on: {
																click: (e: Event) => {
																	e.stopPropagation()
																	this.handleResultClick(result.store.id)
																},
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
													<div
														class={styles.itemsList}
														{...{
															on: { click: this.handleModalClick.bind(this) },
														}}
													>
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
				)}
			</div>
		)
	},
})
