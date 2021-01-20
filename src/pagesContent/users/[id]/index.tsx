import React from 'react'
import { User } from 'types/user'

import { Root } from './styles'

type Props = {
  user: User
}

function RenderUser({ user }: Props) {
  return (
    <>
      <Line label="name" value={user.name} />
      <Line label="email" value={user.email} />
      <Line label="company" value={user.company.name} />
      <Line label="city" value={user.address.city} />
      <Line label="street" value={user.address.street} />
    </>
  )
}

// utils

function Line({ label, value }: { label: string; value: string }) {
  return (
    <Root>
      <span>{label}:</span> {value}
    </Root>
  )
}

export { RenderUser }
