#!/usr/bin/env node
import { register } from 'module'
import { dirname, resolve } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

register(pathToFileURL(resolve(__dirname, 'loader.js')).href, {
	parentURL: import.meta.url,
})

const script = process.argv[2]
if (!script) {
	console.error('Usage: custom-tsx <file.ts>')
	process.exit(1)
}

const scriptPath = resolve(process.cwd(), script)

try {
	await import(scriptPath)
} catch (error) {
	console.error('Error:', error.message)
	process.exit(1)
}
