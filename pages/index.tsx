import * as React from 'react'
import { css } from '@emotion/core'

import { MainLayout } from 'components/layouts/main'

const textStyles = css({
  fontSize: '40px'
})

export default function Home() {
  return (
    <MainLayout title="app">
      <p css={textStyles}>content</p>
    </MainLayout>
  )
}
