const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './src/components/**/*.tsx',
      './src/pages/**/*.tsx',
      './src/pagesContent/**/*.tsx'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
]

module.exports = {
  plugins: [
    'postcss-nesting',
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ...(process.env.NODE_ENV === 'production' ? ['cssnano'] : []),
  ]
}
