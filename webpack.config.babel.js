import webpack from 'webpack';
import path from 'path';

const BUILD_DIR = path.resolve(__dirname, '/bin');
const APP_DIR = path.resolve(__dirname, '/app');

const config = {
	entry: {
		bundle: [
		'babel-polyfill',
		'./app/src/index.jsx'
	],
	},
	output: {
		path: path.join(__dirname,'app','dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		}
		]
	},
}

module.exports = config; 
