import { css } from '@emotion/react'
import { themeGet } from 'theme/get'
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
    <p css={styles.field}>
      <span>{label}:</span> {value}
    </p>
  )
}

const styles = {
  field: css`
    margin-bottom: ${themeGet('space', '$4')};
    span {
      font-weight: ${themeGet('fontWeights', '$bold')};
    }
  `,
}

export { RenderUser }
export type { Props }
