import { styled } from 'stitches'

export const Root = styled('nav', {
  uFlexNone: true,
  padding: '$4 0',
  borderBottom: '1px solid $grey300',
  textAlign: 'center',
})

export const Header = styled('header', {
  marginBottom: '$4',
})

export const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& > a:not(:last-of-type)': {
    marginRight: '$3',
  },
})
