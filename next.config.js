const computePath = require('./utils').computePath

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    const esLintRule = {
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader'
    }
    config.module.rules.push(esLintRule)

    config.resolve.alias = {
      ...config.resolve.alias,
      components: computePath('./src/components/'),
      contexts: computePath('./src/contexts/'),
      hooks: computePath('./src/components/hooks'),
      pages: computePath('./src/pages/'),
      pagesContent: computePath('./src/pagesContent/'),
      public: computePath('./public/'),
      routes: computePath('./src/routes.ts'),
      styles: computePath('./src/styles'),
      stitches: computePath('./src/styles/stitches.config.ts'),
      theme: computePath('./src/theme/'),
      types: computePath('./src/types/'),
      utils: computePath('./src/utils')
    }

    return config
  }
}
