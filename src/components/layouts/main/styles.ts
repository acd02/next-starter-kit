import { css } from '@emotion/react'
import { themeGet } from 'theme/get'

const root = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const content = css`
  flex-grow: 1;
  padding: ${themeGet('space', '$4')};
`

export const styles = {
  root,
  content,
}
