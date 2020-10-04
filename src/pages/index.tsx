import styled from '@emotion/styled'
import { MainLayout } from 'components/layouts/main'
import React from 'react'
import { theme } from 'theme'

const { fontWeight } = theme

const P = styled.p`
  font-weight: ${fontWeight.medium};
`

export default function Home() {
  return (
    <MainLayout title="app" description="home">
      <P>content</P>
    </MainLayout>
  )
}
