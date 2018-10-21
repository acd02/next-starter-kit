const computePath = require('./utils').computePath

const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
  webpack(config, options) {
    const tsLintRule = {
      test: /\.tsx$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        formatter: 'stylish',
        configFile: computePath('./tslint.json')
      }
    }
    config.module.rules.push(tsLintRule)
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

    return config
  }
})
