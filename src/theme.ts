export type Theme = {
  colors: {
    primary: string
  }
  spacings: {
    xs: string
    sm: string
    md: string
  }
}

export const theme: Theme = {
  colors: {
    primary: '#eee'
  },
  spacings: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem'
  }
}
