const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withLess = require('@zeit/next-less')

const { ANALYZE } = process.env

module.exports = withLess({
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }))
    }

    return config
  },
})