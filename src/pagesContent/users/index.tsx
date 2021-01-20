import { Button } from 'components/atoms/button'
import React from 'react'
import { User } from 'types/user'

import { Header } from './styles'
import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = React.useState(true)

  return (
    <>
      <Button<'button'>
        css={({ space }) => ({ marginBottom: space.$2 })}
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <Header>Users:</Header>
      {showUsers && users.map(UserLink)}
    </>
  )
}

export { RenderUsers }
