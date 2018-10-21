import * as React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps
} from 'next/document'
import { extractCritical } from 'emotion-server'

import { hydrate } from 'react-emotion'

// the returned value from the 'extractCritical' function
type ExtractCriticalProps = {
  html: string
  ids: string[]
  css: string
}

type MergedProps = DocumentProps & ExtractCriticalProps

// Adds server generated styles to emotion cache
if (typeof window !== 'undefined') {
  hydrate((window as any).__NEXT_DATA__.ids)
}

export default class MyDocument extends Document<ExtractCriticalProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const page = ctx.renderPage()
    const styles = extractCritical(page.html as string)

    return { ...page, ...styles }
  }

  constructor(
    props: MergedProps) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      (__NEXT_DATA__ as any).ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/reset.css" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
