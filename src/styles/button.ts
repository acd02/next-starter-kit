import { css } from 'stitches'

const tokens = {
  color: '$$color',
  textColor: '$$textColor',
}

export const button = css({
  [tokens.color]: '',
  [tokens.textColor]: '',
  position: 'relative',
  zIndex: 1,
  display: 'inline-block',
  py: '$2',
  px: '$3',
  backgroundColor: tokens.color,
  color: tokens.textColor,
  fontSize: '$base',
  fontWeight: '$medium',
  cursor: 'pointer',

  '&:after': {
    position: 'absolute',
    transition: 'opacity 0.15s ease',
    opacity: 0,
    zIndex: -1,
    backgroundImage: `linear-gradient(
      0deg,
      rgba(161, 93, 93, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );`,

    content: '',
    inset: 0,
  },

  '&:hover': {
    '&:after': {
      opacity: 1,
    },
  },

  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 1px white, 0 0 0 3px ${tokens.color}`,
  },

  variants: {
    color: {
      default: {
        [tokens.color]: '$colors$primary',
        [tokens.textColor]: '$colors$white',
      },
      grey: {
        [tokens.color]: '$colors$grey300',
        [tokens.textColor]: '$colors$dark',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
})
