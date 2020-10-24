import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import React from 'react'
import { styled } from 'stitches'

const P = styled('p', {
  fontWeight: '$medium',
})

export default function Home() {
  return <P>content</P>
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)
