import { User } from 'models/user'
import * as React from 'react'

import styles from './styles.module.css'

type Props = {
  user: User
}

export function RenderUser(props: Props) {
  const { user } = props

  return (
    <div className={styles.user}>
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
  )
}
