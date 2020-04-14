const path = require('path');
const webpack = require('webpack');
const json = require('json-loader!./file.json');

module.exports = {
	entry: './src/client/index.js',

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
		],
		rules: [
			{ test: '/.js$/', exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};
