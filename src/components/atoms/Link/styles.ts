import { styled } from 'stitches'

const Root = styled('a', {
  borderBottom: '1px solid',
  borderColor: 'transparent',
  cursor: 'pointer',
  color: '$grey600',
  variants: {
    active: {
      true: {
        borderColor: '$grey600',
      },
    },
  },
})

export const Styled = {
  Root,
}
