import { css } from '@emotion/react'
import { Button } from 'components/atoms/button'
import { useSomeContext, useSomeDispatch } from 'contexts/someContext'
import { themeGet } from 'theme/get'
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
        color="$grey300"
        textColor="#333"
        css={styles.button}
        onClick={() => dispatch({ type: 'UPDATE_COUNT', payload: 1 })}
      >
        increment count
      </Button>
      <p css={styles.count}>count value: {count}</p>
      <h2 css={styles.header}>Users:</h2>
      {users.map(user => (
        <UserLink {...user} />
      ))}
    </>
  )
}

const styles = {
  button: css`
    margin-bottom: ${themeGet('space', '$4')};
  `,
  header: css`
    font-size: ${themeGet('fontSizes', '$3xl')};
    margin-bottom: ${themeGet('space', '$4')};
  `,
  count: css`
    margin: ${themeGet('space', '$4')} 0;
  `,
}

export { RenderUsers }
