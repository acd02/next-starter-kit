import { MainLayout } from 'components/layouts/main'
import { User } from 'models/user'
import { GetStaticProps } from 'next'
import { RenderUsers } from 'pagesContent/users'
import * as React from 'react'
import { constant, identity } from 'utils/function'
import { get } from 'utils/http'

type Props = {
  fetchedUsers: User[]
}

export default function Users({ fetchedUsers }: Props) {
  const [showUsers, setShowUsers] = React.useState(true)

  return (
    <MainLayout title="users">
      <button
        className="cursor-pointer py-1 px-2 bg-gray-300 mb-2
        hover:bg-gray-400 focus:bg-gray-400 transition-colors duration-200"
        onClick={() => setShowUsers(s => !s)}
      >
        {showUsers ? 'hide' : 'show'} users
      </button>
      {showUsers && <RenderUsers users={fetchedUsers} />}
    </MainLayout>
  )
}

// Next.js API

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Partial<Props>
}> => {
  return {
    props: {
      fetchedUsers: await (
        await get<User[], {}>('https://jsonplaceholder.typicode.com/users')
      ).fold(constant([]), identity)
    }
  }
}
