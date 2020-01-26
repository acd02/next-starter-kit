import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
