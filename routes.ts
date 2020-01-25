export enum Routes {
  index = '/',
  users = '/users',
  user = '/user/'
}

export enum DynamicRoutes {
  user
}

export type DynamicRoutesDetail = {
  basePath: string
  paramBracket: string
  paramKey: string
}

export function getRouteDetails(route: DynamicRoutes): DynamicRoutesDetail {
  switch (route) {
    case DynamicRoutes.user:
      return { basePath: 'user', paramBracket: '[id]', paramKey: 'id' }
  }
}
