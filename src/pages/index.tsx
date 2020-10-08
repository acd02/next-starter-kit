import styled from '@emotion/styled'
import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import React from 'react'
import { theme } from 'theme'

const { fontWeight } = theme

const P = styled.p`
  font-weight: ${fontWeight.medium};
`

export default function Home() {
  return <P>content</P>
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)
