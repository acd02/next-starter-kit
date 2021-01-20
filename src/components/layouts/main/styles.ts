import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Content = styled.div`
  flex-grow: 1;
  padding: ${themeGet('space', '$4')};
`
