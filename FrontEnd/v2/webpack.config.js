const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],                             //where we work on
    output: {
        path: path.resolve(__dirname, 'dist/js'),           //   __dirname is the absolute path of the project folder:  dist/js is which path under absolute path
        filename: 'bundle.js'								// After running the script npm run dev it will create a file with name bundle.js 
    },
    devServer: {
        contentBase: './dist'							// to config web-server and to specify the folder where webpack should specify our folder 
        										// the development work comes under src folder and these are distributed to dist folder
    },
    plugins: [								  
        new HtmlWebpackPlugin({
            filename: 'index.html',					// the plugins uses the template and inject it into dist folder 
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,						//a regular expression to check all the javascript file
                exclude: /node_modules/,			//to exclude all js files in node module
                use: {
                    loader: 'babel-loader'			//to use the loader in js files and to convert higher vrsions of JS to ES5
                }
            }
        ]
    }

};