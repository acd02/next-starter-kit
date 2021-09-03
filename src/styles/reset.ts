import { globalCss } from './stitches.config'

export const reset = globalCss({
  'blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html,iframe, legend, li, ol, p, pre, textarea, ul':
    {
      margin: '0',
      padding: '0',
    },
  'h1, h2, h3, h4, h5, h6': { fontSize: '100%', fontWeight: 400 },
  ul: { listStyle: 'none' },
  'button, input, select, textarea': { margin: '0' },
  html: {
    boxSizing: 'border-box',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  '*, :after, :before': { boxSizing: 'inherit' },
  'img, video': { height: 'auto', maxWidth: '100%' },
  iframe: { border: '0' },
  table: { borderCollapse: 'collapse', borderSpacing: '0' },
  'td, th': { padding: '0' },
  'td:not([align]), th:not([align])': { textAlign: 'left' },
  'body, html': { height: '100%' },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'article, aside, footer, header, hgroup, main, nav, section': {
    display: 'block',
  },
  '#__next': { height: '100%' },
  a: { textDecoration: 'inherit' },
  "[type='button'], [type='reset'], [type='submit'], button": {
    WebkitAppearance: 'button',
  },
  button: { backgroundImage: 'none', border: 'none' },
})
