import React, { PropsWithChildren } from 'react'

import { Root } from './styles'

type Props = {
  onClick: React.MouseEventHandler
  className?: string
}

export function Button({ className, children, onClick }: PropsWithChildren<Props>) {
  return (
    <Root className={className} onClick={onClick}>
      {children}
    </Root>
  )
}
