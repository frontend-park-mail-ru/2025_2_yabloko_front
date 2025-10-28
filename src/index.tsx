import './components/CommonCSS/Variables.css'
import { h } from './framework/h'
import { initRouter } from './modules/router'
;(window as any).h = h

if (typeof document !== 'undefined') {
	initRouter()
}
