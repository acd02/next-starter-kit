import { Text } from 'components/atoms/Text'
import type { User } from 'types/user'

type Props = {
  user: User
}

function RenderUser({ user }: Props) {
  return (
    <>
      <Field label="name" value={user.name} />
      <Field label="email" value={user.email} />
      <Field label="company" value={user.company.name} />
      <Field label="city" value={user.address.city} />
      <Field label="street" value={user.address.street} />
    </>
  )
}

// utils
function Field({ label, value }: { label: string; value: string }) {
  return (
    <Text css={{ marginBottom: '$4' }}>
      <Text as="span" fontWeight="bold">
        {label}:
      </Text>{' '}
      {value}
    </Text>
  )
}

export { RenderUser }
export type { Props }
