import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global'
import { useStore } from 'stores/someStore'
import { box } from 'styles/box'
import { text } from 'styles/text'

function Home() {
  const count = useStore(s => s.count)

  return (
    <>
      <p className={text({ fontWeight: 'medium' })}>content</p>
      <p className={box({ my: '$4' })}>count value: {count}</p>
    </>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
