import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import { Button } from '../Button/Button'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './Search.module.scss'

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

	handleInput(e: InputEvent) {
		const target = e.target as HTMLInputElement
		const value = target.value

		this.updateState({ searchQuery: value })

		clearTimeout(this.debounceTimer)
		this.debounceTimer = setTimeout(() => {
			if (value.trim().length >= 2) {
				this.performSearch(value)
			} else {
				this.updateState({ results: [] })
			}
		}, 300)
	},

	handleFocus() {
		if (this.state.searchQuery.trim().length >= 2 && !this.state.isModalOpen) {
			this.updateState({ isModalOpen: true })
			this.performSearch(this.state.searchQuery)
		}
	},

	handleSubmit(e: Event) {
		e.preventDefault()
		if (this.state.searchQuery.trim().length >= 2) {
			this.updateState({ isModalOpen: true })
			this.performSearch(this.state.searchQuery)
		}
	},

	closeModal() {
		this.updateState({
			isModalOpen: false,
			results: [],
			isLoading: false,
		})
	},

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
				isModalOpen: true,
			})
		} catch (error) {
			this.updateState({
				isLoading: false,
				results: [],
				isModalOpen: true,
			})
		}
	},

	handleResultClick(storeId: string) {
		this.closeModal()
		navigate(`/stores/${storeId}`)
	},

	handleModalClick(e: Event) {
		e.stopPropagation()
	},

	handleOverlayClick(e: Event) {
		if (e.target === e.currentTarget) {
			this.closeModal()
		}
	},

	render() {
		const { searchQuery, isModalOpen, isLoading, results } = this.state

		return (
			<div class={styles.searchWithModal}>
				<form
					class={styles.searchBar}
					{...{
						on: {
							submit: this.handleSubmit.bind(this),
							click: this.handleModalClick.bind(this),
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
						placeholder="Поиск ресторанов и категорий"
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

				{isModalOpen ? (
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
							<h3 class={styles.searchTitle}>"{searchQuery}"</h3>

							<div class={styles.searchModal__body}>
								{results.length === 0 ? null : (
									<div class={styles.results}>
										{results.map((result, index) => (
											<div key={index} class={styles.resultGroup}>
												{result.store ? (
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
															{result.store.card_img ? (
																<img
																	src={result.store.card_img}
																	alt={result.store.name}
																	class={styles.storeImage}
																/>
															) : null}
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
												) : null}

												{result.items?.length > 0 ? (
													<div class={styles.itemsList}>
														{result.items.map((item, idx) => (
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
												) : null}
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				) : null}
			</div>
		)
	},
})
