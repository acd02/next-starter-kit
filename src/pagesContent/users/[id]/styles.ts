import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

export const root = css`
  margin-bottom: ${themeGet('space', '$4')};
  span {
    font-weight: ${themeGet('fontWeights', '$bold')};
  }
`

export const styles = { root }
