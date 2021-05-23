import { MainLayout } from 'components/layouts/main'
import { SomeProvider } from 'contexts/someContext'
import type { NextPageWithLayout } from 'global'
import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import type { Props as RenderUsersProps } from 'pagesContent/users'
import type { User } from 'types/user'
import { constant, identity } from 'utils/function'
import { get } from 'utils/http'

const DynamicRenderUsers = dynamic<RenderUsersProps>(() =>
  import('pagesContent/users').then(mod => mod.RenderUsers)
)

type Props = {
  fetchedUsers: User[]
}

function Users({ fetchedUsers }: Props) {
  return <DynamicRenderUsers users={fetchedUsers} />
}

;(Users as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="users" description="list of all users">
    <SomeProvider>{page}</SomeProvider>
  </MainLayout>
)

// Next.js API
const getStaticProps: GetStaticProps<Partial<Props>> = async () => {
  return {
    props: {
      fetchedUsers: (
        await get<User[], unknown>('https://jsonplaceholder.typicode.com/users')
      ).fold(constant([]), identity),
    },
  }
}

export default Users
export { getStaticProps }
