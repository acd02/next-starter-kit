import { styled } from 'stitches'

export const Root = styled('button', {
  padding: '$1 $2',
  fontSize: '$base',
  backgroundColor: '$grey300',
  transitionProperty: 'background-color',
  transitionDuration: '0.2s',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '$grey400',
  },
  ':focus': {
    backgroundColor: '$grey400',
  },
})
