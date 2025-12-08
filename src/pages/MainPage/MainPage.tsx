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

interface MainPageProps {
	onCardClick?: (storeId: number) => void
}

export const MainPage = defineComponent({
	state() {
		return {
			batchSize: 16,
			isCartOpen: false,
			isHistoryOpen: false,
			currentFilter: 'all',
			tags: [] as any[],
			isLoadingTags: true,
		}
	},

	async onMounted() {
		try {
			const tags = await StoreApi.getTags()
			this.updateState({ tags, isLoadingTags: false })
		} catch (error) {
			console.error('Error loading tags:', error)
			this.updateState({ isLoadingTags: false })
		}
	},

	getTagIdByFilter(filter: string): string | null {
		if (filter === 'all') return null

		const tag = this.state.tags.find(t =>
			t.name.toLowerCase().includes(filter.toLowerCase()),
		)
		return tag?.id || null
	},

	handleFilterChange(filter: string) {
		this.updateState({ currentFilter: filter })
	},

	render() {
		const { currentFilter, isLoadingTags } = this.state

		if (isLoadingTags) {
			return <div>Загрузка фильтров...</div>
		}

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
					currentFilter={currentFilter}
				/>
				<div class={styles.mainPage__container}>
					<Batch
						batchSize={this.state.batchSize}
						filter={currentFilter}
						tagId={this.getTagIdByFilter(currentFilter)}
						onCardClick={storeId => navigate(`/store/${storeId}`)}
					/>
				</div>
				<Footer />
				{this.state.isCartOpen ? (
					<Cart onClose={() => this.closeCart()} />
				) : null}
				{this.state.isHistoryOpen ? (
					<History onClose={() => this.closeHistory()} />
				) : null}
			</div>
		)
	},
})
