import { memo } from 'react'
import badgeStyles from 'styles/common/badge/styles.module.css'

import styles from './styles.module.css'

function _Footer() {
  return (
    <footer className={styles.root}>
      <span className={badgeStyles.root}>footer</span>
    </footer>
  )
}

export const Footer = memo(_Footer)
