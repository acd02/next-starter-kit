const computePath = require('./utils').computePath
const withPrefresh = require('@prefresh/next')

const config = {
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },

  webpack(config, { dev, isServer }) {
    const esLintRule = {
      test: /\.tsx$/,
      enforce: 'pre',
      exclude: ['/node_modules/', '/.next/'],
      loader: 'eslint-loader',
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
      theme: computePath('./src/theme/'),
      types: computePath('./src/types/'),
      utils: computePath('./src/utils')
    }

    // Preact stuff
    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules,
        })
        cacheGroups.commons.name = 'framework'
      } else {
        cacheGroups.preact = {
          name: 'commons',
          chunks: 'all',
          test: preactModules,
        }
      }
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'

    // inject Preact DevTools
    if (dev && !isServer) {
      const entry = config.entry
      config.entry = () =>
        entry().then(entries => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
          return entries
        })
    }

    return config
  },
}

module.exports = withPrefresh(config)
