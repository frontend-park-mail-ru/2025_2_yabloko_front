import js from '@eslint/js'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import compatPlugin from 'eslint-plugin-compat'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			compat: compatPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				Handlebars: 'readonly',
			},
		},
		settings: {
			browsers: [
				'> 1%',
				'last 2 versions',
				'not op_mini all',
				'not ie <= 11',
				'not ie_mob <= 11',
				'not bb <= 10',
			],
		},
		rules: {
			...js.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'no-unused-vars': 'error',
			'no-undef': 'error',
			curly: 'error',
			'compat/compat': 'error',
			'no-console': ['error', { allow: ['error', 'warn'] }],
			'no-multiple-empty-lines': 'error',
		},
	},
	{
		files: ['src/**/*.{ts,tsx}'],
		plugins: {
			'@typescript-eslint': typescriptPlugin,
			compat: compatPlugin,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				Handlebars: 'readonly',
			},
			parser: typescriptParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
			},
		},
		settings: {
			browsers: [
				'> 1%',
				'last 2 versions',
				'not op_mini all',
				'not ie <= 11',
				'not ie_mob <= 11',
				'not bb <= 10',
			],
		},
		rules: {
			...js.configs.recommended.rules,
			...typescriptPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',

			curly: 'error',
			'compat/compat': 'error',
			'no-console': ['error', { allow: ['error', 'warn'] }],
			'no-multiple-empty-lines': 'error',

			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
	{
		ignores: [
			'node_modules/',
			'src/handlebars/**',
			'**/build/**',
			'**/dist/**',
			'.template-lintrc.js',
			'.lintstagedrc.js',
			'*.config.js',
		],
	},
])
