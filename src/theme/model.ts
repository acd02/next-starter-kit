export type Theme = {
  colors: {
    primary: string
    secondary: string
    grey: ColorWheel
  }
  spacings: Spacings
  borderWidth: BorderWidths
  borderRadius: BorderRadiuses
  boxShadow: BoxShadows
  fontSize: FontSizes
  fontWeight: FontWeights
  letterSpacing: LetterSpacings
  lineHeight: LineHeights
  maxWitdh: MaxWidths
  screens: Screens
  zIndex: ZIndexes
}

type ColorWheel = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type Spacings = {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  8: string
  10: string
  12: string
  16: string
  20: string
  24: string
  32: string
  40: string
  48: string
  56: string
  64: string
}

type BorderWidths = {
  default: string
  '0': string
  '2': string
  '4': string
  '8': string
}

type BorderRadiuses = {
  none: string
  sm: string
  default: string
  md: string
  lg: string
  full: string
}

type BoxShadows = {
  xs: string
  sm: string
  default: string
  md: string
  lg: string
  xl: string
  '2xl': string
  inner: string
  outline: string
  none: string
}

type FontSizes = {
  xs: string
  sm: string
  base: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
}

type FontWeights = {
  hairline: number
  thin: number
  light: number
  normal: number
  medium: number
  semibold: number
  bold: number
  extrabold: number
  black: number
}

type LetterSpacings = {
  tighter: string
  tight: string
  normal: string
  wide: string
  wider: string
  widest: string
}

type LineHeights = {
  none: string
  tight: string
  snug: string
  normal: string
  relaxed: string
  loose: string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
  '10': string
}

type MaxWidths = {
  sm: string
  md: string
  lg: string
  xl: string
}

type ZIndexes = {
  auto: string
  '0': string
  '10': string
  '20': string
  '30': string
  '40': string
  '50': string
}

type Screens = {
  sm: string
  md: string
  lg: string
  xl: string
}
