import { NextPage } from 'next'
import { ReactElement } from 'react'

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement<T>) => ReactElement
}
