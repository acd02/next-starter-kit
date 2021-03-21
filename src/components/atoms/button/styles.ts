import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

export const root = css`
  padding: ${themeGet('space', '$2')} ${themeGet('space', '$3')};
  font-size: ${themeGet('fontSizes', '$base')};
  background-color: ${themeGet('colors', '$grey300')};
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${themeGet('colors', '$grey400')};
  }
`

export const styles = { root }
