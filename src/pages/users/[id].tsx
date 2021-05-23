import { MainLayout } from 'components/layouts/main'
import type { NextPageWithLayout } from 'global'
import type { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import type { Props as RenderUserProps } from 'pagesContent/users/[id]'
import type { User } from 'types/user'
import { constant, identity, noop } from 'utils/function'
import { get } from 'utils/http'

type Props = {
  fetchedUser?: User
}

const DynamicRenderUser = dynamic<RenderUserProps>(() =>
  import('pagesContent/users/[id]').then(mod => mod.RenderUser)
)

function UserDetail({ fetchedUser }: Props) {
  return fetchedUser && <DynamicRenderUser user={fetchedUser} />
}

;(UserDetail as NextPageWithLayout<Props>).getLayout = page => (
  <MainLayout title={page.props.fetchedUser?.name ?? ''} description="user details">
    {page}
  </MainLayout>
)

// Next.js API
const getStaticPaths: GetStaticPaths = async () => {
  const fetchedUsers = await get<User[], unknown>(
    'https://jsonplaceholder.typicode.com/users'
  )

  const paths = fetchedUsers
    .fold(constant([]), identity)
    .map(({ id }) => ({ params: { id: String(id) } }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps: GetStaticProps<Partial<Props>> = async ({ params }) => {
  return {
    props: {
      fetchedUser: (
        await get<User, unknown>(
          `https://jsonplaceholder.typicode.com/users/${params?.id ?? ''}`
        )
      ).fold(noop, identity),
    },
  }
}

export default UserDetail
export { getStaticPaths, getStaticProps }
