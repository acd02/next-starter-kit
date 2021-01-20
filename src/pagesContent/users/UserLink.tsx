import { DynamicLink } from 'components/atoms/link'
import React from 'react'
import { DynamicRoutes, getRouteDetails } from 'routes'
import { User } from 'types/user'

import { LinkWrapper } from './styles'

function UserLink({ id, name }: User) {
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

export { UserLink }
