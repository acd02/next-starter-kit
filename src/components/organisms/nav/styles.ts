import styled from '@emotion/styled'
import { theme } from 'theme'

const { spacings, colors } = theme

export const Root = styled.nav`
  flex: none;
  padding: ${spacings[4]} 0;
  border-bottom: 1px solid ${colors.grey[300]};
  text-align: center;
`

export const Header = styled.header`
  margin-bottom: ${spacings[4]};
`

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a:not(:last-of-type) {
    margin-right: ${spacings[3]};
  }
`
