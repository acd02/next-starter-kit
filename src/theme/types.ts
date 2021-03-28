import { theme } from './'

type Theme = typeof theme
type CSSVariablesTheme = Record<string, string>
type InvertedTheme = Record<keyof Theme, Record<string, string>>
type Color = keyof Theme['colors']

export type { Theme, Color, CSSVariablesTheme, InvertedTheme }
