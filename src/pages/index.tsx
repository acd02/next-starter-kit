import { css } from '@emotion/react'
import { MainLayout } from 'components/layouts/main'
import { SomeProvider, useSomeContext } from 'contexts/someContext'
import type { NextPageWithLayout } from 'global'
import { themeGet } from 'theme/get'

function Home() {
  const { count } = useSomeContext()

  return (
    <>
      <p css={styles.text}>content</p>
      <p css={styles.count}>count value: {count}</p>
    </>
  )
}

const styles = {
  text: css`
    font-weight: ${themeGet('fontWeights', '$medium')};
  `,
  count: css`
    margin: ${themeGet('space', '$4')} 0;
  `,
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    <SomeProvider>{page}</SomeProvider>
  </MainLayout>
)

export default Home
