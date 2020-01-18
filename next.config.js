const computePath = require('./utils').computePath

module.exports = {
  webpack(config, options) {
    const esLintRule = {
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader'
    }
    config.module.rules.push(esLintRule)

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      components: computePath('./components/'),
      pages: computePath('./pages/'),
      routes: computePath('./routes.ts'),
      public: computePath('./public/')
    })

    return config
  }
}
