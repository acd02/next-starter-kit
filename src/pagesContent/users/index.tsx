import { css } from '@emotion/react'
import { Button } from 'components/atoms/button'
import { useState } from 'react'
import { themeGet } from 'theme/get'
import type { User } from 'types/user'

import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      <Button
        color="$grey300"
        textColor="#333"
        css={styles.button}
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <h2 css={styles.header}>Users:</h2>
      {showUsers && users.map(UserLink)}
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
}

export { RenderUsers }
