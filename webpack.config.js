const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/i,
				use: [
					// 3. Inject JS into DOM
					"style-loader",
					// 2. Translates CSS into CommonJS
					"css-loader",
					// 1. Compiles Sass to CSS
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		})
	]
}