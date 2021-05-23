import cx from 'classcat'
import NextLink from 'next/link'
import { DynamicRoutes, getRouteDetails } from 'routes'

import styles from './styles.module.css'
import { handleKeyPress } from './utils'

type Props = {
  route: keyof DynamicRoutes
  param: string
  label: string
  className?: string
}

function DynamicLink({ className, route, label, param }: Props) {
  const { basePath } = getRouteDetails(route)

  return (
    <NextLink href={`${basePath}/${param}`}>
      <a
        href={`${basePath}/${param}`}
        className={cx([styles.root, className])}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { DynamicLink }
