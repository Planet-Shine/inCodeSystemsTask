'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var __DEVELOPMENT__ = NODE_ENV !== 'production';
var path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './phone-catalog.js',
    watch: true,
    output: {
        path: path.join(__dirname, '/app'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, loader: 'ng-annotate!babel'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?resolve url')
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=asserts/fonts/[name].[ext]'
            } /*,
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file?name=[name].[ext]'
            }*/
        ]
    },
    plugins: [
        new ExtractTextPlugin('./asserts/styles.css')
    ]
};
