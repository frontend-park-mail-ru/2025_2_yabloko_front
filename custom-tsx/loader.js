import { transformSync } from '@babel/core'
import { readFileSync } from 'fs'
import { dirname, resolve as pathResolve } from 'path'

export function resolve(specifier, context, nextResolve) {
	if (specifier.startsWith('./') || specifier.startsWith('../')) {
		const baseDir = dirname(context.parentURL.replace('file:///', ''))
		const fullPath = pathResolve(baseDir, specifier)

		const extensions = ['', '.ts', '.tsx', '.js', '/index.ts', '/index.tsx']

		for (const ext of extensions) {
			try {
				const pathWithExt = `${fullPath}${ext}`
				readFileSync(pathWithExt, 'utf8')
				return nextResolve(`file:///${pathWithExt}`, context)
			} catch (e) {}
		}
	}

	return nextResolve(specifier, context)
}

export function load(url, context, nextLoad) {
	if (url.endsWith('.ts') || url.endsWith('.tsx')) {
		try {
			const filename = url.replace('file:///', '')
			const source = readFileSync(filename, 'utf8')

			const { code } = transformSync(source, {
				presets: [
					['@babel/preset-typescript'],
					[
						'@babel/preset-react',
						{
							pragma: 'h',
							pragmaFrag: 'hFragment',
						},
					],
					[
						'@babel/preset-env',
						{
							targets: { node: 'current' },
							modules: false,
						},
					],
				],
				filename: filename,
			})

			return {
				format: 'module',
				source: code,
				shortCircuit: true,
			}
		} catch (error) {
			console.error(`Error loading ${url}:`, error)
			throw error
		}
	}

	return nextLoad(url, context)
}
