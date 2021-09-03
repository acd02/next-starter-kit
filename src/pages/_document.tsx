import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches'

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  public render() {
    return (
      <Html {...{ lang: 'en' }}>
        <Head />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
