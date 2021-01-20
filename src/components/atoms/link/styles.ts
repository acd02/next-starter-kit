import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

const Root = styled.a<{ isActive?: boolean }>`
  cursor: pointer;
  color: ${themeGet('colors', '$grey600')};
  border-bottom: 1px solid
    ${({ isActive }) => (isActive ? themeGet('colors', '$grey600') : 'transparent')};
`

export { Root }
