import { css, Global } from '@emotion/core'
import React from 'react'

import { nprogress } from './nprogress'
import { reset } from './reset'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${reset}
        ${nprogress}
      `}
    />
  )
}
