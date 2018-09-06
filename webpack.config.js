const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash:8].js',
        chunkFilename: 'chunk.[hash:8].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
                {loader: 'babel-loader', options: {presets: ['env']}}
            ]
        }, {
            test: /\.(css|less)$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ]
        }, {
            test: /\.vue$/,
            use: [
                {loader: 'vue-loader'}
            ]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {loader: 'file-loader'}
            ]
        }, {
            test: /\.(woff|woff2)$/,
            use: [
                {loader: 'url-loader?prefix=font/&limit=5000'}
            ]
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {loader: 'url-loader?limit=10000&mimetype=application/octet-stream'}
            ]
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
            ]
        }]
    },
    node: {
        fs: 'empty'
    }
};
