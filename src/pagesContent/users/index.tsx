import { css } from '@emotion/react'
import { Button } from 'components/atoms/button'
import { useState } from 'react'
import { themeGet } from 'theme/get'
import { User } from 'types/user'

import { styles } from './styles'
import { UserLink } from './UserLink'

type Props = {
  users: User[]
}

function RenderUsers({ users }: Props) {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      <Button
        css={css`
          margin-bottom: ${themeGet('space', '$2')};
        `}
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </Button>
      <h2 css={styles.header}>Users:</h2>
      {showUsers && users.map(UserLink)}
    </>
  )
}

export { RenderUsers }
