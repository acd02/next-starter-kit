import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.nav<UnkownObj, Theme>`
  flex: none;
  padding: ${({ theme: { spacings } }) => `${spacings[4]} 0`};
  border-bottom: ${({
    theme: {
      colors: { grey },
    },
  }) => `1px solid${grey[300]}`};
  text-align: center;
`

export const Header = styled.header<UnkownObj, Theme>`
  margin-bottom: ${({ theme: { spacings } }) => spacings[4]};
`

export const LinksContainer = styled.div<UnkownObj, Theme>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a:not(:last-of-type) {
    margin-right: ${({ theme: { spacings } }) => spacings[3]};
  }
`
