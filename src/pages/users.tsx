import { css } from '@emotion/core'
import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { NextPage } from 'next'
import { RenderUsers } from 'pagesContent/users'
import { api, useStore } from 'pagesContent/users/store'
import * as React from 'react'
import { Theme } from 'theme'
import { get, setAPIUrl } from 'utils/http'

type Props = {
  fetchedUsers: User[]
}

const btnStyles = (t: Theme) =>
  css({
    backgroundColor: t.colors.primary,
    marginBottom: t.spacings.sm,
    padding: `${t.spacings.xs} ${t.spacings.sm}`,
    cursor: 'pointer'
  })

const Users: NextPage<Props, {}> = props => {
  const [showUsers, setShowUsers] = React.useState(true)
  const initUsers = useStore(s => s.initUsers)
  const maybeUsers = useStore(s => s.maybeUsers)

  React.useEffect(() => {
    !maybeUsers && initUsers(props.fetchedUsers)
  }, [])

  return (
    <MainLayout title="users">
      <button css={btnStyles} onClick={() => setShowUsers(s => !s)}>
        {showUsers ? 'hide' : 'show'} users
      </button>
      {showUsers && maybeUsers && <RenderUsers users={maybeUsers} />}
    </MainLayout>
  )
}

Users.getInitialProps = async ({ req }): Promise<Partial<Props>> => {
  const { maybeUsers } = api.getState()

  if (maybeUsers) {
    return { fetchedUsers: maybeUsers }
  } else {
    const fetchedUsers = await get<User[]>(setAPIUrl('api/users', req))

    return {
      fetchedUsers
    }
  }
}

export default Users
