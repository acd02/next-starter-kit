import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
