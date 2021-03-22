import Router, { NextRouter } from 'next/router'
import { useEffect } from 'react'

type ScrollPos = {
  x: number
  y: number
}

function saveScrollPos(url: string) {
  const scrollPos: ScrollPos = { x: window.scrollX, y: window.scrollY }
  sessionStorage.setItem(url, JSON.stringify(scrollPos))
}

function restoreScrollPos(url: string) {
  const lsData = sessionStorage.getItem(url)

  if (lsData) {
    const { x, y } = JSON.parse(lsData) as ScrollPos
    window.scrollTo(x, y)
  }
}

/* eslint-disable fp/no-delete, fp/no-mutation, fp/no-let */
/* 👀 see corresponding issue: https://github.com/vercel/next.js/issues/3303 */
function useScrollRestoration(router: NextRouter) {
  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return

    let shouldScrollRestore = false
    window.history.scrollRestoration = 'manual'
    restoreScrollPos(router.asPath)

    const onBeforeUnload = (event: { returnValue: unknown }) => {
      saveScrollPos(router.asPath)
      delete event.returnValue
    }

    const onRouteChangeStart = () => {
      saveScrollPos(router.asPath)
    }

    const onRouteChangeComplete = (url: string) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false
        restoreScrollPos(url)
      }
    }

    window.addEventListener('beforeunload', onBeforeUnload)
    Router.events.on('routeChangeStart', onRouteChangeStart)
    Router.events.on('routeChangeComplete', onRouteChangeComplete)
    Router.beforePopState(() => {
      shouldScrollRestore = true

      return true
    })

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      Router.events.off('routeChangeStart', onRouteChangeStart)
      Router.events.off('routeChangeComplete', onRouteChangeComplete)
      Router.beforePopState(() => true)
    }
  }, [router])
}

export { useScrollRestoration }
