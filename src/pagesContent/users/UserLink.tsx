import { css } from '@emotion/react'
import { DynamicLink } from 'components/atoms/link'
import { themeGet } from 'theme/get'
import type { User } from 'types/user'

function UserLink({ name, id }: User) {
  return <DynamicLink css={styles.link} route="users" param={`${id}`} label={name} />
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
