import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const webpackModule = {
	rules: [
		{
			test: /\.tsx?$/,
			use: ['babel-loader'],
			exclude: /node_modules/,
		},
		{
			test: /\.module\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							mode: 'local',
							localIdentName: '[name]__[local]--[hash:base64:5]',
							exportLocalsConvention: 'dashesOnly',
						},
					},
				},
				'sass-loader',
			],
		},
		{
			test: /\.module\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							mode: 'local',
							auto: true,
							exportGlobals: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
						},
					},
				},
			],
		},
		{
			test: /\.css$/,
			exclude: /\.module\.css$/,
			use: ['style-loader', 'css-loader'],
		},
	],
}

const resolveScripts = {
	extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
}

const distPath = path.resolve(__dirname, 'dist')
const mode = process.env.PRODUCTION == 'true' ? 'production' : 'development'

export default [
	{
		mode,
		devtool: 'source-map',
		entry: './src/index.ts',
		module: webpackModule,
		resolve: resolveScripts,
		output: {
			filename: 'bundleSupport.js',
			path: distPath,
		},
	},
]
