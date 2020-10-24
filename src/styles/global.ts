import { css } from 'stitches'

/* TS HACK */
const WebkitFontSmoothing = 'WebkitFontSmoothing' as string
const MozOsxFontSmoothing = 'MozOsxFontSmoothing' as string
const nprogressColorVariable = '--nprogress-color' as string

export const globalStyles = css.global({
  'blockquote,\nbody,\ndd,\ndl,\ndt,\nfieldset,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nhtml,\niframe,\nlegend,\nli,\nol,\np,\npre,\ntextarea,\nul': {
    margin: '0',
    padding: '0',
  },
  'h1,\nh2,\nh3,\nh4,\nh5,\nh6': { fontSize: '100%', fontWeight: 400 },
  ul: { listStyle: 'none' },
  'button,\ninput,\nselect,\ntextarea': { margin: '0' },
  html: {
    boxSizing: 'border-box',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,\n    Segoe UI Symbol, Noto Color Emoji',
  },
  '*,\n:after,\n:before': { boxSizing: 'inherit' },
  'img,\nvideo': { height: 'auto', maxWidth: '100%' },
  iframe: { border: '0' },
  table: { borderCollapse: 'collapse', borderSpacing: '0' },
  'td,\nth': { padding: '0' },
  'td:not([align]),\nth:not([align])': { textAlign: 'left' },
  'body,\nhtml': { height: '100%' },
  body: {
    [WebkitFontSmoothing]: 'antialiased',
    [MozOsxFontSmoothing]: 'grayscale',
  },
  'article,\naside,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection': {
    display: 'block',
  },
  '#__next': { height: '100%' },
  a: { textDecoration: 'inherit' },
  /* eslint-disable-next-line */
  "[type='button'],\n[type='reset'],\n[type='submit'],\nbutton": {
    WebkitAppearance: 'button',
  },
  button: { backgroundImage: 'none', border: 'none' },
})

const nprogressSpinner = css.keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const nProgressStyles = css.global({
  ':root': { [nprogressColorVariable]: '#adb4b9' },
  '#nprogress': { pointerEvents: 'none' },
  '#nprogress .bar': {
    background: 'var(--nprogress-color)',
    position: 'fixed',
    zIndex: 1031,
    top: '0',
    left: '0',
    width: '100%',
    height: '2px',
  },
  '#nprogress .peg': {
    display: 'block',
    position: 'absolute',
    right: '0',
    width: '100px',
    height: '100%',
    boxShadow: '0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color)',
    opacity: 1,
    transform: 'rotate(3deg) translate(0, -4px)',
  },
  '#nprogress .spinner': {
    display: 'block',
    position: 'fixed',
    zIndex: 1031,
    top: '15px',
    right: '15px',
  },
  '#nprogress .spinner-icon': {
    width: '18px',
    height: '18px',
    boxSizing: 'border-box',
    border: 'solid 2px transparent',
    borderTopColor: 'var(--nprogress-color)',
    borderLeftColor: 'var(--nprogress-color)',
    borderRadius: '50%',
    animation: `${nprogressSpinner} 0.4s linear infinite`,
  },
  '.nprogress-custom-parent': { overflow: 'hidden', position: 'relative' },
  '.nprogress-custom-parent #nprogress .bar,\n.nprogress-custom-parent #nprogress .spinner': {
    position: 'absolute',
  },
})
