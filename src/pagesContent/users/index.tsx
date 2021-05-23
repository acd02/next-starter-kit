import { Button } from 'components/atoms/button'
import { useSomeContext, useSomeDispatch } from 'contexts/someContext'
import type { User } from 'types/user'

import styles from './styles.module.css'
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
        color="$grey300"
        textColor="#333"
        className={styles.btn}
        onClick={() => dispatch({ type: 'UPDATE_COUNT', payload: 1 })}
      >
        increment count
      </Button>
      <p className={styles.count}>count value: {count}</p>
      <h2 className={styles.header}>Users:</h2>
      {users.map(user => (
        <UserLink key={user.id} {...user} />
      ))}
    </>
  )
}

export { RenderUsers }
export type { Props }
