import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Root = styled.nav`
  flex: none;
  padding: ${themeGet('space', '$4')} 0;
  border-bottom: 1px solid ${themeGet('colors', '$grey300')};
  text-align: center;
`

export const Header = styled.header`
  margin-bottom: ${themeGet('space', '$4')};
`

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a:not(:last-of-type) {
    margin-right: ${themeGet('space', '$3')};
  }
`
