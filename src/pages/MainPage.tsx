import { Batch } from '../components/Batch/Batch'
import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { defineComponent } from '../framework/component'

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
						import('../modules/router').then(router => router.navigate('/'))
					}}
					//onSearch={query => console.log('Search:', query)}
					onLoginClick={() => {
						import('../modules/router').then(router => router.navigate('/auth'))
					}}
					onCartClick={() => this.openCart()}
				/>
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
			</div>
		)
	},
})
