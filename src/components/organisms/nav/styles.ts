import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

export const root = css`
  flex: none;
  padding: ${themeGet('space', '$4')} 0;
  border-bottom: 1px solid ${themeGet('colors', '$grey300')};
  text-align: center;
`

export const header = css`
  margin-bottom: ${themeGet('space', '$4')};
`

export const linksContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a:not(:last-of-type) {
    margin-right: ${themeGet('space', '$3')};
  }
`

export const styles = { root, header, linksContainer }
