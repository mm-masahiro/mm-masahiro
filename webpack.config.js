const path = require('path');

module.exports = {
	mode: "development",
	entry: {
		main: './src/main.ts'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'.js
	},
	resolve: {
		extensions: ['ts', '.js']
	},
	devServer: {
		contentBase: path.join(__dirname,'dist'),
		open: true,
		port: 3030
	},
	module: {
		rules: [
			{
				test: /\.ts$/, loader: 'ts-loader'
			}
		]
	}
}
