import { DynamicLink } from 'components/atoms/link'
import type { User } from 'types/user'

import styles from './styles.module.css'

function UserLink({ name, id }: User) {
  return (
    <DynamicLink className={styles.link} route="users" param={`${id}`} label={name} />
  )
}

export { UserLink }
