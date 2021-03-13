import { theme } from './'

type Theme = typeof theme
type CSSVariablesTheme = Record<string, string>
type InvertedTheme = Record<keyof Theme, Record<string, string>>

export type { Theme, CSSVariablesTheme, InvertedTheme }
