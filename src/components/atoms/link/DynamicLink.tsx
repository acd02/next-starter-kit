import NextLink from 'next/link'
import { DynamicRoutesDetail } from 'routes'

import { Root } from './styles'
import { handleKeyPress } from './utils'

type Props = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
  className?: string
}

function DynamicLink({ className, routeDetails, label, param }: Props) {
  const { basePath } = routeDetails

  return (
    <NextLink href={`${basePath}/${param}`}>
      <Root
        href={`${basePath}/${param}`}
        className={className}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {label}
      </Root>
    </NextLink>
  )
}

export { DynamicLink }
