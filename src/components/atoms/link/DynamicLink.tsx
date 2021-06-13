import NextLink from 'next/link'
import { DynamicRoutes, getRouteDetails } from 'routes'
import type { CSS } from 'stitches'

import { Styled } from './styles'
import { handleKeyPress } from './utils'

type Props = {
  route: keyof DynamicRoutes
  param: string
  label: string
  css?: CSS
}

function DynamicLink({ route, label, param, ...rest }: Props) {
  const { basePath } = getRouteDetails(route)

  return (
    <NextLink href={`${basePath}/${param}`}>
      <Styled.Root
        href={`${basePath}/${param}`}
        tabIndex={0}
        onKeyPress={handleKeyPress}
        {...rest}
      >
        {label}
      </Styled.Root>
    </NextLink>
  )
}

export { DynamicLink }
