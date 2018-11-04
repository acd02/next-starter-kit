import * as React from 'react'

import { styles } from './styles'
import { classes } from 'typestyle'

export const Nav = () => (
  <nav className={classes(styles.root, 1 > 2 && styles.second)}>nav</nav>
)
