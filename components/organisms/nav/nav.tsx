import { Link } from 'components/atoms/link'
import * as React from 'react'
import { Routes } from 'routes'

import { styles } from './styles'

export const Nav = () => (
  <nav css={styles.root}>
    <header css={styles.header}>nav</header>
    <div css={styles.links}>
      <Link to={Routes.index} label="home" />
      <Link to={Routes.users} label="users" />
    </div>
  </nav>
)
