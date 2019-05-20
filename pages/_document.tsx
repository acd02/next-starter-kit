import * as React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps
} from 'next/document'
import { extractCritical } from 'emotion-server'

// the returned value from the 'extractCritical' function
type ExtractCriticalProps = {
  html: string
  ids: string[]
  css: string
}

type MergedProps = DocumentProps & ExtractCriticalProps

export default class MyDocument extends Document<ExtractCriticalProps> {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const page = ctx.renderPage()
    const styles = extractCritical(page.html as string)

    return { ...page, ...styles }
  }

  private constructor(props: MergedProps) {
    super(props)

    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  public render() {
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
