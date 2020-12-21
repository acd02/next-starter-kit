import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import React from 'react'
import { getRouteDetails } from 'routes'

import { LinkWrapper } from './styles'

export function UserLink({ id, name }: User) {
  return (
    <LinkWrapper key={id}>
      <DynamicLink routeDetails={getRouteDetails('user')} param={`${id}`} label={name} />
    </LinkWrapper>
  )
}
