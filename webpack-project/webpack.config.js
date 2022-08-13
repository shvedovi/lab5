const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8090,
    },

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            template: path.resolve(__dirname, './src/pages/index.html'), // шаблон
            filename: 'index.html', // ім'я вихідного файлу
        }),

        new HtmlWebpackPlugin({
            title: 'news',
            template: path.resolve(__dirname, './src/pages/news.html'), // шаблон
            filename: 'news.html', // ім'я вихідного файлу
        }),

        new HtmlWebpackPlugin({
            title: 'photo',
            template: path.resolve(__dirname, './src/pages/photo.html'), // шаблон
            filename: 'photo.html', // ім'я вихідного файлу
        }),

        new HtmlWebpackPlugin({
            title: 'rozklad',
            template: path.resolve(__dirname, './src/pages/rozklad.html'), // шаблон
            filename: 'rozklad.html', // ім'я вихідного файлу
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],


    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader",],
            },
        ],
    },
}