import './components/CommonCSS/Variables.css'
import { h } from './framework/h'
import { authManager } from './modules/authManager'
import { initRouter } from './modules/router'
;(window as any).h = h

if (typeof document !== 'undefined') {
	await authManager.checkAuth()
	initRouter()
}
