import styled from '@emotion/styled'
import { theme } from 'theme'

const { spacings } = theme

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.div`
  flex-grow: 1;
  padding: ${spacings[4]};
`
