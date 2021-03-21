import { Link } from 'components/atoms/link'
import { memo } from 'react'
import { Routes } from 'routes'
import { badgeStyles } from 'styles/common/badge'

import { styles } from './styles'

function _Nav() {
  return (
    <nav css={styles.root}>
      <header css={[styles.header, badgeStyles]}>nav</header>
      <div css={styles.linksContainer}>
        <Link to={Routes.index} label="home" />
        <Link to={Routes.users} label="users" />
      </div>
    </nav>
  )
}

export const Nav = memo(_Nav)
