'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtendedDefinePlugin = require('extended-define-webpack-plugin');

var path = require('path');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {
    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.context = isTest ? path.join(__dirname, './') : path.join(__dirname, '/src');

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * Should be an empty object if it's generating a test build
     * Karma will set this when it's a test build
     */
    config.entry = isTest ? {} : './app.js';

    config.watch = isProd || isTest ? false : true;

    /**
     * Output
     * Reference: http://webpack.github.io/docs/configuration.html#output
     * Should be an empty object if it's generating a test build
     * Karma will handle setting it up for you when it's a test build
     */
    config.output = isTest ? {} : {
        path: path.join(__dirname, '/app'),
        publicPath: '/',
        filename: 'build.js'
    };

    /**
     * Devtool
     * Reference: http://webpack.github.io/docs/configuration.html#devtool
     * Type of sourcemap to use per build type
     */
    if (isTest) {
        config.devtool = 'inline-source-map';
    } else if (!isProd) {
        config.devtool = 'source-map';
    }

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    // Initialize module
    config.module = {
        preLoaders: [],
        loaders: [
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html/,
                loader: 'raw-loader'
            },
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                // Reference: https://github.com/webpack/extract-text-webpack-plugin
                // Extract css files in production builds
                //
                // Reference: https://github.com/webpack/style-loader
                // Use style-loader in development.
                test: /\.css$/,
                loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?resolve url')
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=asserts/fonts/[name].[ext]'
            }
        ]
    };

    // ISTANBUL LOADER
    // https://github.com/deepsweet/istanbul-instrumenter-loader
    // Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
    // Skips node_modules and files that end with .test
    if (isTest) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'istanbul-instrumenter',
            query: {
                esModules: true
            }
        });
    }

    /**
     * PostCSS
     * Reference: https://github.com/postcss/autoprefixer-core
     * Add vendor prefixes to your css
     */
    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [];


    // Add build specific plugins
    if (!isTest) {
        config.plugins.push(
            new ExtractTextPlugin('./asserts/styles.css'),
            new ExtendedDefinePlugin({
                '__DEVELOPMENT__': !isProd
            })
        );
        if (isProd) {
            config.plugins.push(
                new webpack.optimize.UglifyJsPlugin({
                    beautify: false,
                    comments: false,
                    compress: {
                        sequences: true,
                        booleans: true,
                        loops: true,
                        unused: true,
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    }
                })
            );
        }
    }

    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    /*
     config.devServer = {
     contentBase: './src/public',
     stats: 'minimal'
     };
     */

    return config;
})();
