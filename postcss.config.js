module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? ['postcss-nesting', 'postcss-import', 'autoprefixer']
      : ['postcss-nesting', 'postcss-import'],
}
