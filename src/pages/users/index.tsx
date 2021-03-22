import { MainLayout } from 'components/layouts/main'
import type { NextPageWithLayout } from 'global'
import type { GetStaticProps } from 'next'
import { RenderUsers } from 'pagesContent/users'
import type { User } from 'types/user'
import { constant, identity } from 'utils/function'
import { get } from 'utils/http'

type Props = {
  fetchedUsers: User[]
}

function Users({ fetchedUsers }: Props) {
  return <RenderUsers users={fetchedUsers} />
}

;(Users as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="users" description="list of all users">
    {page}
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
