import { createApp } from './app'
import { defineComponent } from './component'
import { destroyDOM } from './destroy-dom'
import { dispatcher } from './dispatcher'
import { DOM_TYPES, h, hFragment, hString } from './h'
import { mountDOM } from './mount-dom'
import { patchDOM } from './patch-dom'
import { enqueueJob } from './scheduler'

export const MyFramework = {
	h,
	hString,
	hFragment,
	DOM_TYPES,
	defineComponent,
	createApp,

	mountDOM,
	destroyDOM,
	patchDOM,

	enqueueJob,
	dispatcher,
}

export default MyFramework
