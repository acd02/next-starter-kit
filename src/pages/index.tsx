import styled from '@emotion/styled'
import { MainLayout } from 'components/layouts/main'
import React from 'react'
import { Theme } from 'theme'

const P = styled.p<UnkownObj, Theme>`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`

export default function Home() {
  return (
    <MainLayout title="app" description="home">
      <P>content</P>
    </MainLayout>
  )
}
