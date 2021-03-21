import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

const badgeStyles = css`
  padding: ${themeGet('space', '$1')} ${themeGet('space', '$2')};
  border: 1px solid ${themeGet('colors', '$grey400')};
  border-radius: ${themeGet('radii', '$sm')};
`

export { badgeStyles }
