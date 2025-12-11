import { defineComponent } from '@antiquemouse/framework'
import { Batch } from '../../components/Batch/Batch'
import { CardsHeader } from '../../components/CardsHeader/CardsHeader'
import { Cart } from '../../components/Cart/Cart'
import { Footer } from '../../components/Footer/Footer'
import { History } from '../../components/History/History'
import { Navbar } from '../../components/Navbar/Navbar'
import { navigate } from '../../modules/router'
import { StoreApi } from '../../modules/storeApi'
import styles from './MainPage.module.scss'

export const MainPage = defineComponent({
	state() {
		return {
			isCartOpen: false,
			isHistoryOpen: false,
			tags: [] as any[],
			categories: [] as any[],
			isLoading: true,
			currentFilter: { type: 'all', id: 'all' },
		}
	},

	async onMounted() {
		const tags = await StoreApi.getTags()
		const categories = await StoreApi.getCategories()
		this.updateState({ tags, categories, isLoading: false })
	},

	openCart() {
		this.updateState({ isCartOpen: true })
	},

	closeCart() {
		this.updateState({ isCartOpen: false })
	},

	openHistory() {
		this.updateState({ isHistoryOpen: true })
	},

	closeHistory() {
		this.updateState({ isHistoryOpen: false })
	},

	handleFilterChange(type: 'all' | 'tag' | 'category', id: string) {
		this.updateState({ currentFilter: { type, id } })
	},

	render() {
		if (this.state.isLoading) {
			return (
				<div class={styles.mainPage}>
					<Navbar
						onLogoClick={() => navigate('/')}
						onLoginClick={() => navigate('/auth')}
						onCartClick={() => this.openCart()}
						onHistoryClick={() => this.openHistory()}
					/>

					<Footer />
				</div>
			)
		}

		return (
			<div class={styles.mainPage}>
				<Navbar
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
					onCartClick={() => this.openCart()}
					onHistoryClick={() => this.openHistory()}
				/>

				<div class={styles.mainPage__content}>
					<CardsHeader
						tags={this.state.tags}
						categories={this.state.categories}
						currentFilter={this.state.currentFilter}
						onFilterChange={(type, id) => this.handleFilterChange(type, id)}
					/>

					<Batch
						key={`${this.state.currentFilter.type}-${this.state.currentFilter.id}`}
						filterType={this.state.currentFilter.type}
						filterId={this.state.currentFilter.id}
						onCardClick={storeId => navigate(`/store/${storeId}`)}
					/>
				</div>

				<Footer />

				{this.state.isCartOpen && <Cart onClose={() => this.closeCart()} />}
				{this.state.isHistoryOpen && (
					<History onClose={() => this.closeHistory()} />
				)}
			</div>
		)
	},
})
