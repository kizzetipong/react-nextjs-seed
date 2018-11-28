const path = require('path')

module.exports = function(baseConfig, configType, defaultConfig) {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
    defaultConfig.module.rules.push({
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
    include: [
      path.resolve(__dirname, '../pages/less'),
      path.resolve(__dirname, '../utils/less'),
      path.resolve(__dirname, '../modules'),
    ],
  })

  return defaultConfig
}