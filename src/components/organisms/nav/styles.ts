import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.nav<NoProps, Theme>`
  flex: none;
  padding: ${({ theme: { spacings } }) => `${spacings[4]} 0`};
  border-bottom: ${({
    theme: {
      colors: { grey },
    },
  }) => `1px solid${grey[300]}`};
  text-align: center;
`

export const Header = styled.header<NoProps, Theme>`
  margin-bottom: ${({ theme: { spacings } }) => spacings[4]};
`

export const LinksContainer = styled.div<NoProps, Theme>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a:not(:last-of-type) {
    margin-right: ${({ theme: { spacings } }) => spacings[3]};
  }
`
