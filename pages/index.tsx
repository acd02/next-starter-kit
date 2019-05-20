import * as React from 'react'
import Link from 'next/link'
import { css } from 'emotion'

import { Layout } from 'components/layouts'

const textStyles = css({
  fontSize: '40px'
})

export default function Home() {
  return (
    <Layout title="app">
      <Link href="/other">
        <a className={css({ display: 'block', marginBottom: '1rem' })}>other ➡️</a>
      </Link>
      <p className={textStyles}>content</p>
    </Layout>
  )
}
