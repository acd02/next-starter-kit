import { NextPage } from 'next'
import { ReactElement } from 'react'

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement<T>) => ReactElement
}

declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}
