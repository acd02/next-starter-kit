import '../styles/nprogress.css'

import type { NextPageWithLayout } from 'global'
import { useScrollRestoration } from 'hooks/useScrollRestoration'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { reset } from 'styles/reset'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

reset()

export default function App({ Component, pageProps, router }: AppProps) {
  const getLayout = (Component as NextPageWithLayout<unknown>).getLayout || (page => page)

  useScrollRestoration(router)

  return <>{getLayout(<Component {...pageProps}></Component>)}</>
}
