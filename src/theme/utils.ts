/* eslint-disable fp/no-mutation */
import { objectEntries, objectKeys } from 'utils/object'

import type { CSSVariablesTheme, InvertedTheme, Theme } from './types'

function toCSSVariables(theme: Theme): CSSVariablesTheme {
  return objectKeys(theme).reduce<CSSVariablesTheme>((acc, cur) => {
    objectEntries(theme[cur]).forEach(([key, value]) => {
      acc[`--${cur}-${(key as string).replace('$', '')}`] = value
    })

    return acc
  }, {})
}

function invertTheme(theme: Theme): InvertedTheme {
  return objectKeys(theme).reduce<InvertedTheme>((acc, cur) => {
    acc[cur] = objectKeys(theme[cur]).reduce((tokensObj, key: string) => {
      tokensObj[key] = `var(--${cur}-${key.replace('$', '')})`

      return tokensObj
    }, {} as Record<string, string>)

    return acc
  }, {} as InvertedTheme)
}

export { toCSSVariables, invertTheme }
