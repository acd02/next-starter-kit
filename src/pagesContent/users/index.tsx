import { DynamicLink } from 'components/atoms/link'
import { User } from 'models/user'
import * as React from 'react'
import { DynamicRoutes, getRouteDetails } from 'routes'

type Props = {
  users: User[]
}

export function RenderUsers(props: Props) {
  return (
    <>
      <h2 className="text-4xl mb-4">Users:</h2>
      {props.users.map(u => (
        <span className="block mb-2" key={u.id}>
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
