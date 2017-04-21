const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015']},
                }],
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1&modules=true',
                }),
            },
            {
                test: /\.sass$/,
                loader:    ExtractTextPlugin.extract({
                    loader: 'css-loader!sass-loader',
                }),
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
        }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    }
}