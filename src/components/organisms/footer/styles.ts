import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

export const root = css`
  flex: none;
  padding: ${themeGet('space', '$4')} 0;
  border-top: 1px solid ${themeGet('colors', '$grey300')};
  text-align: center;
`

export const styles = {
  root,
}
