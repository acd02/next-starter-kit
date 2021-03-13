import { memo } from 'react'

import { styles } from './styles'

function _Footer() {
  return <footer css={styles.root}>footer</footer>
}

export const Footer = memo(_Footer)
