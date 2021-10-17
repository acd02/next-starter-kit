const ESLintPlugin = require('eslint-webpack-plugin')
const computePath = require('./utils').computePath

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        exclude: ['/node_modules/', '/.next/'],
      })
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      components: computePath('./src/components/'),
      hooks: computePath('./src/components/hooks'),
      pages: computePath('./src/pages/'),
      pagesContent: computePath('./src/pagesContent/'),
      public: computePath('./public/'),
      routes: computePath('./src/routes.ts'),
      stitches: computePath('./src/styles/stitches.config.ts'),
      stores: computePath('./src/stores/'),
      styles: computePath('./src/styles'),
      types: computePath('./src/types/'),
      utils: computePath('./src/utils'),
    }

    return config
  },
}
