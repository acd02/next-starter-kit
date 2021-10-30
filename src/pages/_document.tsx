import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches'

export default function Document() {
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
