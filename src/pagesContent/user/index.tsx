import { User } from 'models/user'
import * as React from 'react'

import { styles } from './styles'

type Props = {
  user?: User
}

export function RenderUser(props: Props) {
  const { user } = props

  return user ? (
    <div css={styles.root}>
      <p>
        <span>name:</span> {user.name}
      </p>
      <p>
        <span>email:</span> {user.email}
      </p>
      <p>
        <span>company:</span> {user.company.name}
      </p>
      <p>
        <span>city:</span> {user.address.city}
      </p>
      <p>
        <span>street:</span> {user.address.street}
      </p>
    </div>
  ) : (
    <></>
  )
}
