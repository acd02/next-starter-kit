import { MainLayout } from 'components/layouts/main'
import { SomeProvider, useSomeContext } from 'contexts/someContext'
import type { NextPageWithLayout } from 'global'

import styles from './styles.module.css'

function Home() {
  const { count } = useSomeContext()

  return (
    <>
      <p className={styles.text}>content</p>
      <p className={styles.count}>count value: {count}</p>
    </>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    <SomeProvider>{page}</SomeProvider>
  </MainLayout>
)

export default Home
