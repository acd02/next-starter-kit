import { DynamicLink } from 'components/atoms/link'
import { DynamicRoutes, getRouteDetails } from 'routes'
import { User } from 'types/user'

import { styles } from './styles'

function UserLink({ id, name }: User) {
  return (
    <span css={styles.linkWrapper} key={id}>
      <DynamicLink
        routeDetails={getRouteDetails(DynamicRoutes.user)}
        param={`${id}`}
        label={name}
      />
    </span>
  )
}

export { UserLink }
