import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.a<{ isActive?: boolean }, Theme>`
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.grey[600]};
  border-bottom: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.grey[600] : 'transparent')};
`
