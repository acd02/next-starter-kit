import styled from '@emotion/styled'
import { theme } from 'theme'

const { spacings, colors, fontSize } = theme

export const Root = styled.button`
  padding: ${spacings[1]} ${spacings[2]};
  font-size: ${fontSize.base};
  background-color: ${colors.grey[300]};
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${colors.grey[400]};
  }
`
