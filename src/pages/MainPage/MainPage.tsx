import { Batch } from '../../components/Batch/Batch'
import { CardsHeader } from '../../components/CardsHeader/CardsHeader'
import { Cart } from '../../components/Cart/Cart'
import { History } from '../../components/History/History'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { defineComponent } from '@antiquemouse/framework'
import { navigate } from '../../modules/router'
import styles from './MainPage.module.scss'
import { StoreApi } from '../../modules/storeApi'

export const MainPage = defineComponent({
	state() {
		return {
			isCartOpen: false,
			isHistoryOpen: false,
			currentFilter: 'all',
			tags: [] as any[],
		}
	},

	async onMounted() {
		const tags = await StoreApi.getCategories()
		this.updateState({ tags })
	},

	getTagId(filter: string): string | null {
		if (filter === 'all') return null

		const tag = this.state.tags.find(
			t =>
				t.name.toLowerCase().includes(filter.toLowerCase()) ||
				filter.toLowerCase().includes(t.name.toLowerCase()),
		)
		return tag?.id || null
	},

	handleFilterChange(filter: string) {
		this.updateState({ currentFilter: filter })
	},

	render() {
		const tagId = this.getTagId(this.state.currentFilter)

		return (
			<div class={styles.mainPage}>
				<Navbar
					onLogoClick={() => navigate('/')}
					onLoginClick={() => navigate('/auth')}
					onCartClick={() => this.openCart()}
					onHistoryClick={() => this.openHistory()}
				/>

				<CardsHeader
					onFilterChange={filter => this.handleFilterChange(filter)}
					currentFilter={this.state.currentFilter}
				/>

				<Batch
					filter={this.state.currentFilter}
					tagId={tagId}
					onCardClick={storeId => navigate(`/store/${storeId}`)}
				/>

				<Footer />

				{this.state.isCartOpen && <Cart onClose={() => this.closeCart()} />}
				{this.state.isHistoryOpen && (
					<History onClose={() => this.closeHistory()} />
				)}
			</div>
		)
	},
})
