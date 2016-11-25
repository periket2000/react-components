var webpack = require('webpack');
const path = require('path');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            //'_karma_webpack_/**/*.js',
            'tests.webpack.js'
        ],
        preprocessors: {
            //'_karma_webpack_/**/*-test.js': ['webpack'],
            'tests.webpack.js': ['webpack']
        },
        webpack: {
            externals: {
                'react/addons': true,
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: [
                            path.resolve(__dirname, './node_modules'),
                        ],
                        loader: 'babel-loader',
                        query: {
                            presets: [ "react", "es2015"]
                        }
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader',
                    },
                    {
                        test: /\.md$/,
                        loader: path.resolve(__dirname, './utils/markdown-loader.js'),
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                        loader: 'url-loader?limit=10000',
                    },
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },
        plugins: [
            require("karma-webpack"),
            require('karma-mocha'),
            require('karma-chrome-launcher'),
            require('karma-requirejs'),
        ]
    });
};