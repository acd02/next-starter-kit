import styled from '@emotion/styled'
import { theme } from 'theme'

const { spacings, fontWeight } = theme

export const Root = styled.p`
  margin-bottom: ${spacings[4]};
  span {
    font-weight: ${fontWeight.bold};
  }
`
