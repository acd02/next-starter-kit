import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { RenderUser } from 'pagesContent/user'
import * as React from 'react'
import { identity, noop } from 'utils/function'
import { get } from 'utils/http'

type Props = {
  fetchedUser?: User
}

const UserDetail: NextPage<Props, {}> = props => {
  const { fetchedUser } = props

  return (
    <MainLayout title={fetchedUser?.name ?? ''}>
      {fetchedUser && <RenderUser user={fetchedUser} />}
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedUsers = await get<User[], {}>('https://jsonplaceholder.typicode.com/users')

  const paths = fetchedUsers
    .fold(() => [], identity)
    .map(u => ({ params: { id: String(u.id) } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<{
  props: Partial<Props>
}> => {
  return {
    props: {
      fetchedUser: await (
        await get<User, {}>(
          `https://jsonplaceholder.typicode.com/users/${params?.id ?? ''}`
        )
      ).fold(noop, identity)
    }
  }
}

export default UserDetail
