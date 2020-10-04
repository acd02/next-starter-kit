import styled from '@emotion/styled'
import { theme } from 'theme'

const { colors } = theme

export const Root = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  color: ${colors.grey[600]};
  border-bottom: 1px solid
    ${({ isActive }) => (isActive ? colors.grey[600] : 'transparent')};
`
