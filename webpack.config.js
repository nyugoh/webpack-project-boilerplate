const appRoot = './src/';

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'src/assets/js/bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: '/\.js$/',
				exclude: '/node_modules/',
				loader: 'babel',
				query: {
					preset: ['es2015']
				}
			},
			{
				test: '/\.css$/',
				exclude: '/node_modules/',
				loader: 'style!css'
			}
		]
	}
}