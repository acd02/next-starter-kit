import styled from '@emotion/styled'
import { themeGet } from 'theme/utils'

export const Header = styled.h2`
  font-size: ${themeGet('fontSizes', '$4xl')};
  margin-bottom: ${themeGet('space', '$4')};
`

export const LinkWrapper = styled.span`
  display: block;
  margin-bottom: ${themeGet('space', '$2')};
`
