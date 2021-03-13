import { theme } from './'
import type { Theme } from './types'
import { invertTheme } from './utils'

const invertedTheme = invertTheme(theme)

// see: https://codewithstyle.info/Deep-property-access-in-TypeScript/
function themeGet<
  P1 extends keyof NonNullable<Theme>,
  P2 extends keyof NonNullable<NonNullable<Theme>[P1]>
>(
  prop1: P1,
  prop2: P2,
  fallback?: string
): NonNullable<NonNullable<Theme>[P1]>[P2] | undefined
function themeGet(prop1: string, prop2: string, fallback?: string) {
  return (
    [prop1, prop2].reduce(
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (result, prop) => (result === null ? undefined : (result as any)[prop]),
      invertedTheme
    ) ?? fallback
  )
}

export { themeGet }
