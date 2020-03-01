import { when } from 'acd-utils'
import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { NextPage } from 'next'
import { RenderUsers } from 'pagesContent/users'
import { api, useStore } from 'pagesContent/users/store'
import * as React from 'react'
import { get } from 'utils/http'

type Props = {
  fetchedUsers: User[]
}

const Users: NextPage<Props, {}> = props => {
  const [showUsers, setShowUsers] = React.useState(true)
  const initUsers = useStore(s => s.initUsers)
  const storeUsers = useStore(s => s.maybeUsers)
  const users = when(storeUsers).getOrElse(props.fetchedUsers)

  React.useEffect(() => {
    !storeUsers && initUsers(props.fetchedUsers)
  }, [])

  return (
    <MainLayout title="users">
      <button
        className="cursor-pointer py-1 px-2 bg-gray-300 mb-2
        hover:bg-gray-400 focus:bg-gray-400 transition-colors duration-200"
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </button>
      {showUsers && <RenderUsers users={users} />}
    </MainLayout>
  )
}

Users.getInitialProps = async ({ req }): Promise<Partial<Props>> => {
  const { maybeUsers } = api.getState()

  return when(maybeUsers).fold(
    async () => {
      const fetchedUsers = await get<User[], {}>('api/users', req)

      return {
        fetchedUsers: fetchedUsers.fold(
          () => [],
          users => users
        )
      }
    },
    async users => ({ fetchedUsers: users })
  )
}

export default Users
