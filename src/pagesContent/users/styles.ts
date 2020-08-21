import styled from '@emotion/styled'
import { Button as Btn } from 'components/atoms/button'
import { Theme } from 'theme'

export const Header = styled.h2<UnkownObj, Theme>`
  font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
  margin-bottom: ${({ theme: { spacings } }) => spacings[4]};
`

export const LinkWrapper = styled.span<UnkownObj, Theme>`
  display: block;
  margin-bottom: ${({ theme: { spacings } }) => spacings[2]};
`

export const Button = styled(Btn)<() => UnkownObj, Theme>`
  margin-bottom: ${t => t.theme.spacings[2]};
`
