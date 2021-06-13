import { styled } from 'stitches'

export const Text = styled('p', {
  variants: {
    fontSize: {
      default: {
        fontSize: '$base',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: 'medium',
      },
      lg: {
        fontSize: 'large',
      },
      '3xl': {
        fontSize: '$3xl',
      },
    },
    fontWeight: {
      default: {
        fontWeight: '$normal',
      },
      light: {
        fontWeight: '$light',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },
  defaultVariants: {
    fontSize: 'default',
    fontWeight: 'default',
  },
})
