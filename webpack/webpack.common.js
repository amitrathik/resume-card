const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules:[
            {
                test:  /\.js|.jsx$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader'
                }       
            },
            {
                test: /\.css|.scss$/,
                use: [{
                    loader : 'style-loader', // inject CSS to page
                },{
                    loader: 'css-loader', // translates css into common js modules
                },{
                    loader: 'sass-loader' // compiles sass to css
                }]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template : "./rscard/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css' ,
        })
    ]
};