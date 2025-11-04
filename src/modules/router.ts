import { createApp } from '../framework/app'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { MainPage } from '../pages/MainPage/MainPage'
import { CheckoutPage } from '../pages/OrderPage/OrderPage'
import { StorePage } from '../pages/StorePage/StorePage'

interface Page {
	component: any
	title: string
}

const pathsPages: { [key: string]: Page } = {
	'/': { component: MainPage, title: 'AppleClub - рестораны' },
	'/auth': { component: LoginPage, title: 'AppleClub - авторизация' },
	'/checkout': { component: CheckoutPage, title: 'AppleClub - оформление' },
	'/store/:id': { component: StorePage, title: 'AppleClub - магазин' },
}

let currentApp: any = null

export async function loadPath(
	path: string,
	state: any = {},
	replace: boolean = false,
): Promise<void> {
	if (!path.startsWith('/')) {
		path = '/' + path
	}

	let route = path
	if (path.startsWith('/store/') && !(path in pathsPages)) {
		route = '/store/:id'
	}

	if (!(route in pathsPages)) {
		route = '/auth'
	}

	const nextTitle = pathsPages[route].title
	const nextURL = location.origin + path

	if (replace) {
		history.replaceState(state, nextTitle, nextURL)
	} else {
		history.pushState(state, nextTitle, nextURL)
	}

	await renderPage(path, route)
}

async function renderPage(path: string, route: string): Promise<void> {
	const page = pathsPages[route]
	const rootElement = document.getElementById('root')

	if (!rootElement) {
		console.error('Root element #root not found')
		return
	}

	if (currentApp && typeof currentApp.unmount === 'function') {
		currentApp.unmount()
	}
	rootElement.innerHTML = ''

	try {
		currentApp = createApp(page.component)
		currentApp.mount(rootElement)
		document.title = page.title
	} catch (error) {
		console.error('Error rendering page:', error)
		rootElement.innerHTML = '<div>Ошибка загрузки страницы</div>'
	}
}

window.addEventListener('popstate', () => {
	const path = location.pathname
	let route = path
	if (path.startsWith('/store/') && !(path in pathsPages)) {
		route = '/store/:id'
	} else if (!(path in pathsPages)) {
		route = '/auth'
	}
	renderPage(path, route)
})

export function navigate(path: string, state: any = {}): void {
	loadPath(path, state)
}

export function initRouter(): void {
	const path = location.pathname
	let route = path
	if (path.startsWith('/store/') && !(path in pathsPages)) {
		route = '/store/:id'
	} else if (!(path in pathsPages)) {
		route = '/auth'
	}
	renderPage(path, route)
}
