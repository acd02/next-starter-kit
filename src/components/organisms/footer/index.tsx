import { css } from '@emotion/react'
import { memo } from 'react'
import { badgeStyles } from 'styles/common/badge'
import { themeGet } from 'theme/get'

function _Footer() {
  return (
    <footer css={styles.root}>
      <span css={badgeStyles}>footer</span>
    </footer>
  )
}

const styles = {
  root: css`
    flex: none;
    padding: ${themeGet('space', '$4')} 0;
    border-top: 1px solid ${themeGet('colors', '$grey300')};
    text-align: center;
  `,
}

export const Footer = memo(_Footer)
