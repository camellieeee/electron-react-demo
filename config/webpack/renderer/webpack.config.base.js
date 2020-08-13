const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:6]'
  }
}

// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'electron-main', // 会在主进程和渲染进程文章中提及这个是什么，请看第6点开头的那个文章指向。
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 需要处理的文件类型
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // css loader配置
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          cssLoader,
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/, //tsx处理
        exclude: /node_modules/,
        use: [

          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          // {
          //   loader: 'awesome-typescript-loader',
          // },
        ],
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/, // 图片路径处理
        use: 'url-loader',
      },
      // addition - add source-map support
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }, // 报错的source-map
    ],
  },
  node: {
    __dirname: false, // 处理打包后dirname filename变量路径不对问题
    __filename: false,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/), // 使用moment组件的话，用这个减少moment库体积，这个作为基础设施的一部分吧
    new webpack.NamedModulesPlugin(), // 用于启动HMR（hot module reload）时可以显示模块的相对路径
  ],
}