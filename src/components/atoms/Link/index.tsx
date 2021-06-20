import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { Routes } from 'routes'
import { routes } from 'routes'
import type { CSS } from 'stitches'

import { Styled } from './styles'
import { handleKeyPress } from './utils'

type Props = {
  route: keyof Routes
  label: string
  param?: string
  css?: CSS
  isActive?: (pathname: string) => boolean
}

function Link({ route, label, param, isActive, ...rest }: Props) {
  const { pathname } = useRouter()
  const href = param ? `${routes[route]}/${param}` : routes[route]

  return (
    <NextLink href={href}>
      <Styled.Root
        href={href}
        active={isActive?.(pathname) ?? href === pathname}
        tabIndex={0}
        onKeyPress={handleKeyPress}
        {...rest}
      >
        {label}
      </Styled.Root>
    </NextLink>
  )
}

export { Link }
