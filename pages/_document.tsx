import * as React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps
} from 'next/document'

import { getStyles } from 'typestyle'

type MergedProps = DocumentProps & {
  typeStyles: string
}

export default class MyDocument extends Document<MergedProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const page = ctx.renderPage()

    return { ...page, typeStyles: getStyles() }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/reset.css" />
          <style id="styles-target">{this.props.typeStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
