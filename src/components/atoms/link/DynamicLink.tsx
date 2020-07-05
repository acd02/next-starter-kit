import NextLink from 'next/link'
import * as React from 'react'
import { DynamicRoutesDetail } from 'routes'

import { handleKeyPress } from './common'
import { Root } from './styles'

type Props = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
  className?: string
}

export function DynamicLink({ className, routeDetails, label, param }: Props) {
  const { basePath } = routeDetails

  return (
    <NextLink
      href={`${basePath}/${routeDetails.paramBracket}`}
      as={`${basePath}/${param}`}
    >
      <Root className={className} tabIndex={0} onKeyPress={handleKeyPress}>
        {label}
      </Root>
    </NextLink>
  )
}
