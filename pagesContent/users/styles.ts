import { css } from '@emotion/core'
import { Theme } from 'theme'

const title = css({
  fontSize: '1.5rem'
})

const user = (t: Theme) =>
  css({
    display: 'block',
    marginBottom: t.spacings.sm
  })

export const styles = {
  user,
  title
}
