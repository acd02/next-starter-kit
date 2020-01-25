import { css } from '@emotion/core'
import { Theme } from 'theme'

const root = (t: Theme) =>
  css({
    span: {
      fontWeight: 700
    },
    '> p': {
      marginBottom: t.spacings.sm
    }
  })

export const styles = {
  root
}
