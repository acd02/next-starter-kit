import { css } from '@emotion/react'
import { DynamicLink } from 'components/atoms/link'
import { DynamicRoutes, getRouteDetails } from 'routes'
import type { User } from 'types/user'

import { styles } from './styles'

function UserLink({ id, name }: User) {
  return (
    <DynamicLink
      key={id}
      css={[
        styles.linkWrapper,
        css`
          text-decoration: underline;
        `,
      ]}
      routeDetails={getRouteDetails(DynamicRoutes.user)}
      param={`${id}`}
      label={name}
    />
  )
}

export { UserLink }
