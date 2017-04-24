const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015']},
                }],
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader?importLoaders=1&modules=true'],
                }),
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                }),
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack test project',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './index.pug',
        }),
        new FaviconsWebpackPlugin('./images/webpack-logo.png')
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        // hot: true,
        stats: "errors-only",
        open: true
    }
}