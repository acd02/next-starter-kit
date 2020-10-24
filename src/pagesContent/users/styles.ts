import { Button as Btn } from 'components/atoms/button'
import { styled } from 'stitches'

export const Header = styled('h2', {
  fontSize: '$4xl',
  marginBottom: '$4',
})

export const LinkWrapper = styled('span', {
  display: 'block',
  marginBottom: '$2',
})

export const Button = styled(Btn, {
  marginBottom: '$2',
})
