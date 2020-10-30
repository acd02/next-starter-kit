import { styled } from 'stitches'

export const Root = styled('a', {
  cursor: 'pointer',
  color: '$grey600',
  borderBottom: '1px solid',
  borderBottomColor: 'transparent',
  textDecoration: 'none',
  variants: {
    active: {
      true: {
        borderBottomColor: '$grey600',
      },
    },
  },
})
