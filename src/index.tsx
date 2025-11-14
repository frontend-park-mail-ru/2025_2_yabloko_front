import './components/CommonCSS/Variables.css'
import './components/CommonCSS/normalize.css'
import { h } from '@antiquemouse/framework'
import { authManager } from './modules/authManager'
import { initRouter } from './modules/router'
;(window as any).h = h

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js', { scope: '/' })
			.then(registration => {
				console.log('Service Worker registered with scope:', registration.scope)
			})
			.catch(error => {
				console.error('Service Worker registration failed:', error)
			})
	})
}

if (typeof document !== 'undefined') {
	await authManager.checkAuth()
	initRouter()
}
