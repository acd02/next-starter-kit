import cx from 'classcat'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { Routes } from 'routes'
import { routes } from 'routes'

import styles from './styles.module.css'
import { handleKeyPress } from './utils'

type Props = {
  route: keyof Routes
  label: string
  className?: string
}

function Link({ route, label, className }: Props) {
  const { pathname } = useRouter()
  const isActive = routes[route] === pathname

  return (
    <NextLink href={routes[route]}>
      <a
        href={routes[route]}
        className={cx([styles.root, isActive && styles.isActive, className])}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { Link }
