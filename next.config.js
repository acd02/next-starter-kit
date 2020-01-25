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
      models: computePath('./models/'),
      pages: computePath('./pages/'),
      pagesContent: computePath('./pagesContent/'),
      public: computePath('./public/'),
      routes: computePath('./routes.ts'),
      theme: computePath('./theme.ts'),
      utils: computePath('./utils')
    })

    return config
  }
}
