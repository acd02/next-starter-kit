import { DynamicLink } from 'components/atoms/Link'
import type { User } from 'types/user'

function UserLink({ name, id }: User) {
  return (
    <DynamicLink
      css={{
        display: 'block',
        marginBottom: '$2',
        width: 'fit-content',
        textDecoration: 'underline',
      }}
      route="users"
      param={`${id}`}
      label={name}
    />
  )
}

export { UserLink }
