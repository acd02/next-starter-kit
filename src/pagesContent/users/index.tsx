import { User } from 'models/user'
import * as React from 'react'

import { Button, Header } from './styles'
import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

export function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = React.useState(true)

  return (
    <>
      <Button onClick={() => setShowUsers(s => !s)}>
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <Header>Users:</Header>
      {showUsers && users.map(UserLink)}
    </>
  )
}
