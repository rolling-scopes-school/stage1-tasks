const path = require('path')
const htmlWPPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, ''),
    mode: 'development',
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new htmlWPPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif|ico)&/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)&/,
                use: ['file-loader']
            }
        ]
    }
}