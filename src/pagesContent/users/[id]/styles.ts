import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.p<UnkownObj, Theme>`
  margin-bottom: ${({ theme: { spacings } }) => spacings[4]};
  span {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`
