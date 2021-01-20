import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Root = styled.button`
  padding: ${themeGet('space', '$1')} ${themeGet('space', '$2')};
  font-size: ${themeGet('fontSizes', '$base')};
  background-color: ${themeGet('colors', '$grey300')};
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${themeGet('colors', '$grey400')};
  }
`
