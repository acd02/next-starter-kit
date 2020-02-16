import { when } from 'acd-utils'
import to from 'await-to-js'
import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { RenderUser } from 'pagesContent/user'
import { useStore } from 'pagesContent/users/store'
import * as React from 'react'
import { DynamicRoutes, getRouteDetails, Routes } from 'routes'
import { get } from 'utils/http'

type Props = {
  fetchedUser?: User
}

const UserDetail: NextPage<Props, {}> = props => {
  const { fetchedUser } = props
  const maybeUsers = useStore(s => s.maybeUsers)

  const router = useRouter()
  const { paramKey } = getRouteDetails(DynamicRoutes.user)

  const user = when(maybeUsers).fold(
    () => fetchedUser,
    users => users.find(u => String(u.id) === (router.query[paramKey] as string))
  )

  return (
    <MainLayout title={user?.name ?? ''}>
      <RenderUser user={user} />
    </MainLayout>
  )
}

UserDetail.getInitialProps = async ({ req, res, query }): Promise<Partial<Props>> => {
  // if page is being rendered on the client
  if (!req) return {}

  const { paramKey } = getRouteDetails(DynamicRoutes.user)
  const userID = query[paramKey] as string

  const [err, fetchedUser] = await to<User>(get(`api/user?id=${userID}`, req))

  if (err) {
    /* eslint-disable no-unused-expressions */
    res?.writeHead(301, {
      Location: Routes.users
    })
    res?.end()
    /* eslint-enable */
  }

  return { fetchedUser }
}

export default UserDetail