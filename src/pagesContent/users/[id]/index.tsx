import { User } from 'types/user'

import { styles } from './styles'

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
    <p css={styles.root}>
      <span>{label}:</span> {value}
    </p>
  )
}

export { RenderUser }
