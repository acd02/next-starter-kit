import NextLink from 'next/link'
import { DynamicRoutes, getRouteDetails } from 'routes'

import { styles } from './styles'
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
        className={className}
        css={styles.root}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { DynamicLink }
