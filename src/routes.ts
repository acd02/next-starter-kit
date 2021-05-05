const routes = {
  index: '/',
  users: '/users',
} as const

const dynamicRoutes = {
  users: '/users',
} as const

function getRouteDetails(route: keyof DynamicRoutes): DynamicRoutesDetail {
  switch (route) {
    case 'users':
      return { basePath: dynamicRoutes[route], paramBracket: '[id]' }
  }
}

type DynamicRoutesDetail = {
  basePath: string
  paramBracket: string
}

type Routes = typeof routes
type DynamicRoutes = typeof dynamicRoutes

export { routes, getRouteDetails }
export type { DynamicRoutesDetail, DynamicRoutes, Routes }
