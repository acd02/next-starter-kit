import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import * as React from 'react'
import { DynamicRoutes, getRouteDetails } from 'routes'

import { styles } from './styles'

type Props = {
  users: User[]
}

export function RenderUsers(props: Props) {
  return (
    <>
      <h2 className="text-gray-900" css={styles.title}>
        Users:
      </h2>
      {props.users.map(u => (
        <span key={u.id} css={styles.user}>
          <DynamicLink
            routeDetails={getRouteDetails(DynamicRoutes.user)}
            param={`${u.id}`}
            label={u.name}
          />
        </span>
      ))}
    </>
  )
}
