import { CSS } from 'stitches'

const root: CSS = {
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
}

export const styles = {
  root,
}
