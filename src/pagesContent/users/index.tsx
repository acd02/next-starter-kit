import { Button } from 'components/atoms/Button'
import { Text } from 'components/atoms/Text'
import { useSomeContext, useSomeDispatch } from 'contexts/someContext'
import type { User } from 'types/user'

import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const { count } = useSomeContext()
  const dispatch = useSomeDispatch()

  return (
    <>
      <Button
        color="grey"
        css={{ marginBottom: '$4' }}
        onClick={() => dispatch({ type: 'UPDATE_COUNT', payload: 1 })}
      >
        increment count
      </Button>
      <Text css={{ my: '$4' }}>count value: {count}</Text>
      <Text as="h2" fontSize="3xl" css={{ marginBottom: '$4' }}>
        Users:
      </Text>
      {users.map(user => (
        <UserLink key={user.id} {...user} />
      ))}
    </>
  )
}

export { RenderUsers }
