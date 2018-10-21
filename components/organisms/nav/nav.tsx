import * as React from 'react'

import { styles } from './styles'
import { cx } from 'react-emotion'

export const Nav = () => (
  <nav className={cx(styles.root, 1 > 2 && styles.second)}>nav</nav>
)
