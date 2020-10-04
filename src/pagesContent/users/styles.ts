import styled from '@emotion/styled'
import { Button as Btn } from 'components/atoms/button'
import { theme } from 'theme'

const { fontSize, spacings } = theme

export const Header = styled.h2`
  font-size: ${fontSize['4xl']};
  margin-bottom: ${spacings[4]};
`

export const LinkWrapper = styled.span`
  display: block;
  margin-bottom: ${spacings[2]};
`

export const Button = styled(Btn)`
  margin-bottom: ${spacings[2]};
`
