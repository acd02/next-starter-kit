import styled from '@emotion/styled'
import { theme } from 'theme'

const { spacings, colors } = theme

export const Root = styled.footer`
  flex: none;
  padding: ${spacings[4]} 0;
  border-top: 1px solid ${colors.grey[300]};
  text-align: center;
`
