import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { css } from '../stitches.config'

/* eslint-disable-next-line fp/no-class */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    try {
      /* eslint-disable-next-line fp/no-let */
      let extractedStyles: string[] = []
      /* eslint-disable-next-line fp/no-mutation */
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage)
        /* eslint-disable-next-line fp/no-mutation */
        extractedStyles = styles

        return result
      }

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style key={index} dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </>
        ),
      }
    } finally {
    }
  }

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
