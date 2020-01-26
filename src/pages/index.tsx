import { css } from '@emotion/core'
import { MainLayout } from 'components/layouts/main'
import * as React from 'react'

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
