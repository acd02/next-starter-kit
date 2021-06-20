import { Text } from 'components/atoms/Text'
import { MainLayout } from 'components/layouts/Main'
import type { NextPageWithLayout } from 'global'
import { useStore } from 'stores/someStore'

function Home() {
  const count = useStore(s => s.count)

  return (
    <>
      <Text fontWeight="medium">content</Text>
      <Text css={{ my: '$4' }}>count value: {count}</Text>
    </>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Home
