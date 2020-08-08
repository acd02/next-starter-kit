import React from 'react'

import { Root } from './styles'

type Props = React.Props<Props> & {
  onClick: React.MouseEventHandler
  className?: string
}

export function Button({ className, children, onClick }: Props) {
  return (
    <Root className={className} onClick={onClick}>
      {children}
    </Root>
  )
}
