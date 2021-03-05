import Document, { Head, Html, Main, NextScript } from 'next/document'

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  public render() {
    return (
      <Html {...{ lang: 'en' }}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
