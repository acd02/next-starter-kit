import { Button } from 'components/atoms/button'
import { useState } from 'react'
import { User } from 'types/user'

import { Header } from './styles'
import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      <Button
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
