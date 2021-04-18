import '../styles/nprogress.css'

import { Global } from '@emotion/react'
import type { NextPageWithLayout } from 'global'
import { useScrollRestoration } from 'hooks/useScrollRestoration'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { theme } from 'theme'
import { toCSSVariables } from 'theme/utils'

import { reset } from '../styles/reset'

const cssVariablesTheme = toCSSVariables(theme)

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps, router }: AppProps) {
  const getLayout = (Component as NextPageWithLayout<unknown>).getLayout || (page => page)

  useScrollRestoration(router)

  return (
    <>
      <Global
        styles={[
          reset,
          {
            ':root': cssVariablesTheme,
          },
        ]}
      />
      {getLayout(<Component {...pageProps}></Component>)}
    </>
  )
}
