import { memo } from 'react'

import { Root } from './styles'

function _Footer() {
  return <Root>footer</Root>
}

export const Footer = memo(_Footer)
