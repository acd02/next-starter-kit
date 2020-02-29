import '../css/tailwind.css'

import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import Router from 'next/router'
import * as NProgress from 'nprogress'
import * as React from 'react'
import { theme } from 'theme'

/* eslint-disable @typescript-eslint/no-explicit-any, fp/no-class, fp/no-this */
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class Root extends App {
  public render() {
    const {
      props: { Component, pageProps }
    } = this as any

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default Root
