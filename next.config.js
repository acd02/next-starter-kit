const computePath = require('./utils').computePath

/* eslint-disable */
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
/* eslint-enable */

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

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      components: computePath('./components/'),
      pages: computePath('./pages/'),
      routes: computePath('./routes.ts'),
      static: computePath('./static/')
    })

    return config
  }
})
