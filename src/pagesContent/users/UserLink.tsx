import { css } from '@emotion/react'
import { DynamicLink } from 'components/atoms/link'
import { DynamicRoutes, getRouteDetails } from 'routes'
import { themeGet } from 'theme/get'
import type { User } from 'types/user'

function UserLink({ id, name }: User) {
  return (
    <DynamicLink
      key={id}
      css={styles.link}
      routeDetails={getRouteDetails(DynamicRoutes.user)}
      param={`${id}`}
      label={name}
    />
  )
}

const styles = {
  link: css`
    display: block;
    width: fit-content;
    margin-bottom: ${themeGet('space', '$2')};
    text-decoration: underline;
  `,
}

export { UserLink }
