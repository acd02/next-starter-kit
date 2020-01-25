import { User } from 'models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { DynamicRoutes, getRouteDetails } from 'routes'
import { get } from 'utils/http'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { paramKey } = getRouteDetails(DynamicRoutes.user)
  const param = req.query[paramKey] as string

  return get<User[]>(`https://jsonplaceholder.typicode.com/users/${param}`).then(res.json)
}
