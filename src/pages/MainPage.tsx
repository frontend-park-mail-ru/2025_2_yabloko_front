import { Batch } from '../components/Batch/Batch'
import { CardsHeader } from '../components/CardsHeader/CardsHeader'
import { Cart } from '../components/Cart/Cart'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { defineComponent } from '../framework/component'
import { navigate } from '../modules/router'

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
			<div class="main-page">
				<Navbar
					userAuthed={false}
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
					class="container"
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						width: '90%',
						minHeight: '80vh',
						padding: '2rem',
						boxSizing: 'border-box',
						margin: '0 auto',
					}}
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
