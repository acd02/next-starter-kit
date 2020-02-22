import { User } from 'models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'utils/http'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  return (
    await get<User[], { status: number }>('https://jsonplaceholder.typicode.com/users')
  ).fold(e => res.status(e.status).json(e), res.json)
}
