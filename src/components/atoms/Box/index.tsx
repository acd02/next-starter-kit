import { styled } from 'stitches'

export const Box = styled('div', {
  variants: {
    display: {
      'inline-block': {
        display: 'inline-block',
      },
      flex: {
        display: 'flex',
      },
      'inline-flex': {
        display: 'inline-flex',
      },
      grid: {
        display: 'grid',
      },
    },
    flexWrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    flexNone: {
      true: {
        flex: 'none',
      },
    },
    flexDirection: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    flexGrow: {
      0: {
        flexGrow: 0,
      },
      1: {
        flexGrow: 1,
      },
    },
    flexShrink: {
      0: {
        flexShrink: 0,
      },
      1: {
        flexShrink: 1,
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      flexEnd: {
        alignItems: 'flex-end',
      },
      flexStart: {
        alignItems: 'flex-start',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      flexStart: {
        justifyContent: 'flex-start',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
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
})
