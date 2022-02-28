/*
 * @Author: linfeng3
 * @Date: 2022-02-25 09:53:46
 * @LastEditors: linfeng3
 * @LastEditTime: 2022-02-28 10:19:44
 * @FilePath: \L-ui\build\webpack.config.js
 * @Description: file content
 */
const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const ESLintWebpackPlugin = require('eslint-webpack-plugin')
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './examples/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 8086,
    hot: true,
  },
  resolve: {
    // 引入模块时不带扩展
    extensions: ['.js', '.vue', ',json'],
    // 创建 import 或者 require 的别名, 来确保模块引入变得简单
    alias: config.alias,
    // 解析模块时应该搜索的目录
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.(scss|css)$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|otf|ttf|woff2?|eot)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
          },
        ],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      favicon: './public/favicon.ico',
      template: 'public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    // node版本过低造成报错 in Module.createRequire is not a function
    // new ESLintWebpackPlugin({
    //   fix: true,
    //   extensions: ['js', 'vue'],
    // }),
  ],
}
