const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    // 配置插件
    plugins: [
      new UglifyWebpackPlugin()
    ]
  })
