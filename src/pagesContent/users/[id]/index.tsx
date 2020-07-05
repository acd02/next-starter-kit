import { User } from 'models/user'
import * as React from 'react'

import { Root } from './styles'

type Props = {
  user: User
}

export function RenderUser({ user }: Props) {
  return (
    <>
      <P label="name" value={user.name} />
      <P label="email" value={user.email} />
      <P label="company" value={user.company.name} />
      <P label="city" value={user.address.city} />
      <P label="street" value={user.address.street} />
    </>
  )
}

// utils

function P({ label, value }: { label: string; value: string }) {
  return (
    <Root>
      <span>{label}:</span> {value}
    </Root>
  )
}
