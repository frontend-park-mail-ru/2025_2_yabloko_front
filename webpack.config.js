const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const stringReplaceLoader = {
	loader: 'string-replace-loader',
	options: {
		multiple: [
			{ search: 'ENV_API_ORIGIN', replace: '' },
			{ search: 'ENV_API_VERSION', replace: 'v0' },
		],
	},
}

const webpackModule = {
	rules: [
		{
			test: /\.tsx?$/,
			use: ['babel-loader', stringReplaceLoader],
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

module.exports = [
	{
		mode,
		devtool: 'source-map',
		entry: './src/index.tsx',
		module: webpackModule,
		resolve: resolveScripts,
		output: {
			filename: 'bundle.js',
			path: distPath,
			publicPath: '/',
			clean: false,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html',
				inject: 'body',
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'public/icons',
						to: 'static/icons',
					},
					{
						from: 'public/images',
						to: 'static/images',
					},
				],
			}),
		],
	},
	{
		mode,
		devtool: false,
		entry: './src/sw.ts',
		module: webpackModule,
		resolve: resolveScripts,
		output: {
			filename: 'sw.js',
			path: distPath,
			clean: false,
		},
	},
]
