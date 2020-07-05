import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.button<NoProps, Theme>`
  padding: ${({ theme: { spacings } }) => `${spacings[1]} ${spacings[2]}`};
  font-size: ${({ theme: { fontSize } }) => fontSize.base};
  background-color: ${({ theme: { colors } }) => colors.grey[300]};
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.grey[400]};
  }
`
