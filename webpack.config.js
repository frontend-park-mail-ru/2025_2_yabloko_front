const path = require('path')

const stringReplaceLoader = {
	loader: 'string-replace-loader',
	options: {
		multiple: [
			{ search: 'ENV_API_ORIGIN', replace: 'http://localhost:8080' },
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
			test: /\.s[ac]ss$/i,
			use: ['style-loader', 'css-loader', stringReplaceLoader],
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
							exportLocalsConvention: 'camelCase',
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
	extensions: ['.tsx', '.ts', '.js', '.css'],
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
		},
		devServer: {
			historyApiFallback: true,
		},
	},
]
