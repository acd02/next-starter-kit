import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

export const header = css`
  font-size: ${themeGet('fontSizes', '$3xl')};
  margin-bottom: ${themeGet('space', '$4')};
`

export const linkWrapper = css`
  display: block;
  width: fit-content;
  margin-bottom: ${themeGet('space', '$2')};
`

export const styles = { header, linkWrapper }
