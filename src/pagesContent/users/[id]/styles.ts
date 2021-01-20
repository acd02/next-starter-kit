import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Root = styled.p`
  margin-bottom: ${themeGet('space', '$4')};
  span {
    font-weight: ${themeGet('fontWeights', '$bold')};
  }
`
