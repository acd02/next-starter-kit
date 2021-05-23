import Document, { Head, Html, Main, NextScript } from 'next/document'
import { theme } from 'theme'
import { toCSSVariables } from 'theme/utils'

const stringifiedTheme = Object.entries(toCSSVariables(theme))
  .map(([k, v]) => `${k}:${v}`)
  .join(';')

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  public render() {
    return (
      <Html {...{ lang: 'en' }}>
        <Head />
        <style>
          {`
          :root {
            ${stringifiedTheme}
          }
        `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
