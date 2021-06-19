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
    preWrap: {
      true: {
        whiteSpace: 'pre-wrap',
      },
    },
    tabularNums: {
      true: {
        fontVariantNumeric: 'tabular-nums',
      },
    },
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
      justify: {
        textAlign: 'justify',
      },
    },
  },
  defaultVariants: {
    fontSize: 'default',
    fontWeight: 'default',
  },
})
