import { ThemeProvider } from 'emotion-theming'
import { AppProps } from 'next/app'
import Router from 'next/router'
import * as NProgress from 'nprogress'
import * as React from 'react'
import { theme } from 'theme'

import { GlobalStyles } from '../styles/Global'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
