import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { Routes } from 'routes'
import { routes } from 'routes'
import { CSS, css as stitchesCss } from 'stitches'

import { styles } from './styles'
import { handleKeyPress } from './utils'

type Props = {
  route: keyof Routes
  label: string
  param?: string
  css?: CSS
  isActive?: (pathname: string) => boolean
}

function Link({ route, label, param, isActive, css, ...rest }: Props) {
  const { pathname } = useRouter()
  const href = param ? `${routes[route]}/${param}` : routes[route]

  return (
    <NextLink href={href}>
      <a
        className={stitchesCss({
          ...styles.root,
          ...css,
        })({
          active: isActive?.(pathname) ?? href === pathname,
        })}
        href={href}
        tabIndex={0}
        onKeyPress={handleKeyPress}
        {...rest}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { Link }
