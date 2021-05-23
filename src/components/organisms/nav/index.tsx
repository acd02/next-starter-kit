import cx from 'classcat'
import { Link } from 'components/atoms/link'
import { memo } from 'react'
import badgeStyles from 'styles/common/badge/styles.module.css'

import styles from './styles.module.css'

function _Nav() {
  return (
    <nav className={styles.root}>
      <header className={cx([styles.header, badgeStyles.root])}>nav</header>
      <div className={styles.linksContainer}>
        <Link route="index" label="home" />
        <Link route="users" label="users" />
      </div>
    </nav>
  )
}

export const Nav = memo(_Nav)
