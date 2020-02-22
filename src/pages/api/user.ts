import { result } from 'acd-utils'
import { User } from 'models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import { DynamicRoutes, getRouteDetails } from 'routes'
import { get } from 'utils/http'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { paramKey } = getRouteDetails(DynamicRoutes.user)
  const param = req.query[paramKey] as string

  return result(
    await get<User[], { status: number }>(
      `https://jsonplaceholder.typicode.com/users/${param}`
    )
  ).fold(e => res.status(e.status).json(e), res.json)
}
