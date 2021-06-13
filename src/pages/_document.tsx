import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssString } from 'stitches'

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  public render() {
    return (
      <Html {...{ lang: 'en' }}>
        <Head />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
