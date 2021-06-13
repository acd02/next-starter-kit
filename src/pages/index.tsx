import { Text } from 'components/atoms/Text'
import { MainLayout } from 'components/layouts/Main'
import { SomeProvider, useSomeContext } from 'contexts/someContext'
import type { NextPageWithLayout } from 'global'

function Home() {
  const { count } = useSomeContext()

  return (
    <>
      <Text fontWeight="medium">content</Text>
      <Text css={{ my: '$4' }}>count value: {count}</Text>
    </>
  )
}

;(Home as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    <SomeProvider>{page}</SomeProvider>
  </MainLayout>
)

export default Home
