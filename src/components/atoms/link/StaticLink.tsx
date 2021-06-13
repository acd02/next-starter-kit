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
  css?: CSS
}

function Link({ route, label, ...rest }: Props) {
  const { pathname } = useRouter()
  const isActive = routes[route] === pathname

  return (
    <NextLink href={routes[route]}>
      <Styled.Root
        href={routes[route]}
        active={isActive}
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
