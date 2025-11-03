import { Batch } from '../../components/Batch/Batch'
import { CardsHeader } from '../../components/CardsHeader/CardsHeader'
import { Cart } from '../../components/Cart/Cart'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { defineComponent } from '../../framework/component'
import { navigate } from '../../modules/router'
import styles from './MainPage.module.scss'

interface MainPageProps {
	onCardClick?: (storeId: number) => void
}

export const MainPage = defineComponent({
	state() {
		return {
			batchSize: 8,
			isCartOpen: false,
		}
	},

	openCart() {
		this.updateState({ isCartOpen: true })
	},

	closeCart() {
		this.updateState({ isCartOpen: false })
	},

	render() {
		const props = this.props as MainPageProps

		return (
			<div class={styles.mainPage}>
				<Navbar
					onLogoClick={() => {
						navigate('/')
					}}
					onLoginClick={() => {
						navigate('/auth')
					}}
					onCartClick={() => this.openCart()}
				/>
				<CardsHeader />
				<div
					class={styles.mainPage__container}
				>
					<Batch
						batchSize={this.state.batchSize}
						onCardClick={props.onCardClick}
					/>
				</div>
				<Footer />
				{this.state.isCartOpen ? <Cart onClose={() => this.closeCart()} /> : ''}
			</div>
		)
	},
})
