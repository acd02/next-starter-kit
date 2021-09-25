import { css } from 'stitches'

export const text = css({
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
    color: {
      default: {
        color: '$dark',
      },
      lightGrey: {
        color: '$lightGrey',
      },
      frostBlue: {
        color: '$frostBlue',
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
    color: 'default',
  },
})
