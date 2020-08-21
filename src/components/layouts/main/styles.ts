import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.div<UnkownObj, Theme>`
  flex-grow: 1;
  padding: ${({ theme: { spacings } }) => spacings[4]};
`
