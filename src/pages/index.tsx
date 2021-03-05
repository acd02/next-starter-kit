import styled from '@emotion/styled'
import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import { themeGet } from 'theme/utils'

const P = styled.p`
  font-weight: ${themeGet('fontWeights', '$medium')};
`

function Home() {
  return <P>content</P>
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
