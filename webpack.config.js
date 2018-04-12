var webpack = require('webpack');
var path = require('path');

module.exports = {
	//__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
	//入口文件的位置
	entry: './src/index.js',
	output: {
		//打包后的文件放置的位置
		path: path.resolve(__dirname, './dist'),
		//打包后文件名字
		filename: 'alex.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	},
	plugins: [
		new webpack.BannerPlugin("染白de黑"),
		new webpack.HotModuleReplacementPlugin()
	]
}