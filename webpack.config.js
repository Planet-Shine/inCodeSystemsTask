'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtendedDefinePlugin = require('extended-define-webpack-plugin');
var __DEVELOPMENT__ = NODE_ENV !== 'production';
var path = require('path');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: './app.js',
    watch: true,
    output: {
        path: path.join(__dirname, '/app'),
        publicPath: '/',
        filename: 'build.js'
    },
    devtool: 'source-map-inline',
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'raw-loader'
            },
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./asserts/styles.css'),
        new ExtendedDefinePlugin({
            '__DEVELOPMENT__': __DEVELOPMENT__
        })
    ]
};
