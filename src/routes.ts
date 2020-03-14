export enum Routes {
  index = '/',
  users = '/users'
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
      return { basePath: 'users', paramBracket: '[id]', paramKey: 'id' }
  }
}
