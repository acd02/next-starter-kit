const computePath = require('./utils').computePath

const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
  webpack(config, options) {
    const esLintRule = {
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader'
    }
    config.module.rules.push(esLintRule)
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config
  }
})
