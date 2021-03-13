import { css } from '@emotion/react'
import { MainLayout } from 'components/layouts/main'
import { NextPageWithLayout } from 'global'
import { themeGet } from 'theme/get'

function Home() {
  return (
    <p
      css={css`
        font-weight: ${themeGet('fontWeights', '$medium')};
      `}
    >
      content
    </p>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
