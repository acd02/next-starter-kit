import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

const root = css`
  cursor: pointer;
  color: ${themeGet('colors', '$grey600')};
  border-bottom: 1px solid;
  border-color: transparent;
`

const isActive = css`
  border-color: ${themeGet('colors', '$grey600')};
`

export const styles = { root, isActive }
