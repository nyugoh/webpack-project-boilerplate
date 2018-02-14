# Webpack setup

Webpack is a module bundler, meaning it convertes npm module and other asserts such as images and css files into static assets representing the modules.
***

## Adding webpack to a project

This guide assumes you have Nodejs and npm or yarn installed. I will be using yarn for this guide.

- Install webpack and webpack-dev-server globally by running ```yarn global add webpack webpack-dev-server```  This gives you the tools to run webpack

- Creating a webpack.config.js file. This is the file that contains your configurations for webpack. It exports and object. You can use a very basic template as shown below.
  ```
  	module.exports = {
  		entry: '< YOUR MAIN FILE >',
  		output: {
  			filename: '< NAME OF THE OUTPUT FILE WITH ALL THE CODE >'
  		}
  	}
  ```
 Now in your terminal in the root folder run the command ```webpack``` to compilw your project.
- If you make changes to your code, you have to press *ctr + c* and run the command again, to avoid this, add ```watch: true``` in your webpack.config.js file. Now when you make changes to any file and save it, webpack automatically compiles the code.

- Webpack-dev-server is used to add live reload to your project, to use it is very simple, simply run ```webpack-dev-server``` instead of ```webpack``` and your project will automatically reload on your browser everytime your code compiles again.

- Adding loaders: Loaders are added as npm modules so we need to install them but as dev-dependencies. if you want to use es2015 in your project, you have to compile your code to AMD and for that we are going to use babel. Run ```yarn add babel-loader babel-core babel-preset-es2015 --dev``` in your project root. Next we need to include the loader in the webpack.config.js file as shown below. 
	```
		module.exports = {
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: '/node_modules/',
						loader: 'babel',
						query: {
							preset: ['es2015']
						}
					}
				]
			}
		}
	```
  The loader we have added loads all files with *.js* extension excluding files in the */node_modules/* folder compiles your es6 code to AMD or regular javascript code that can run in most browsers.

  - The final webpack.config.js file looks as below.

  ```
		module.exports = {
			entry: './index.js',
			output: {
				filename: './bundle.js'
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
	```

	I have added a css loader. For the css loader run ```yarn add css-loader style-loader``` css-loader loads the .css files while style-loader injects the style into your output file.