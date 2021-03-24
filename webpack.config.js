const path = require('path');

module.exports = {
	mode: "development",
	entry: {
		main: './src/main.tsx'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'.js,
		publicPath: '/'
	},
	resolve: {
		extensions: ['ts','.tsx','.js','.json']
	},
	devServer: {
		contentBase: path.join(__dirname,'dist'),
		open: true,
		port: 3030,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					'sass-loader'
				]
			}
		]
	},
	target: [
		"web",
		"es5"
	]
}
