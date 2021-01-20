import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Root = styled.footer`
  flex: none;
  padding: ${themeGet('space', '$4')} 0;
  border-top: 1px solid ${themeGet('colors', '$grey300')};
  text-align: center;
`
