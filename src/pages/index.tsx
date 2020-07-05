import styled from '@emotion/styled'
import { MainLayout } from 'components/layouts/main'
import * as React from 'react'
import { Theme } from 'theme'

const P = styled.p<NoProps, Theme>`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
`

export default function Home() {
  return (
    <MainLayout title="app">
      <P>content</P>
    </MainLayout>
  )
}
