import '../styles/nprogress.css'

import { Global, ThemeProvider } from '@emotion/react'
import { NextPageWithLayout } from 'global'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { theme } from 'theme'

import { reset } from '../styles/reset'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout<unknown>).getLayout || (page => page)

  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps}></Component>)}
      </ThemeProvider>
    </>
  )
}
