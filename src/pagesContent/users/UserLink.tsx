import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import * as React from 'react'
import { DynamicRoutes, getRouteDetails } from 'routes'

import { LinkWrapper } from './styles'

export function UserLink({ id, name }: User) {
  return (
    <LinkWrapper key={id}>
      <DynamicLink
        routeDetails={getRouteDetails(DynamicRoutes.user)}
        param={`${id}`}
        label={name}
      />
    </LinkWrapper>
  )
}
