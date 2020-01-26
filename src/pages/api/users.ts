import { User } from 'models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'utils/http'

export default (_req: NextApiRequest, res: NextApiResponse) => {
  return get<User[]>('https://jsonplaceholder.typicode.com/users').then(res.json)
}
