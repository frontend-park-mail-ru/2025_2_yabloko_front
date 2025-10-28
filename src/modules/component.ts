'use strict'

import * as Handlebars from 'handlebars/runtime'
import '../hbs-precompiled'

export type Props = Record<string, any>

export class Component {
	protected parent: HTMLElement
	protected rootElement: HTMLElement
	protected props: Props

	private isRendered: boolean = false
	private template: (context?: any) => string

	getParent(): HTMLElement {
		return this.parent
	}

	getRootElement(): HTMLElement {
		return this.rootElement
	}

	getProps(): Props {
		return this.props
	}

	constructor(parent: HTMLElement, templateName: string, props: Props) {
		this.parent = parent
		this.template = Handlebars.templates[templateName]
		this.props = props
	}

	render(props?: Props): void {
		this.props = props || this.props

		const elementHTML = this.template(this.props)
		const elDocument = new DOMParser().parseFromString(elementHTML, 'text/html')

		if (elDocument.body.childElementCount !== 1) {
			throw new Error('Template should have one root node')
		}

		const HTMLElement = elDocument.body.children[0] as HTMLElement

		if (this.isRendered) {
			this.rootElement.replaceWith(HTMLElement)
			this.rootElement = HTMLElement
			return
		}

		this.parent.insertAdjacentElement('beforeend', HTMLElement)
		this.rootElement = HTMLElement
		this.isRendered = true
	}
}
