import { memo } from 'react'
import { badgeStyles } from 'styles/common/badge'

import { styles } from './styles'

function _Footer() {
  return (
    <footer css={styles.root}>
      <span css={badgeStyles}>footer</span>
    </footer>
  )
}

export const Footer = memo(_Footer)
