import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { Root } from './styles'

type Props = {
  className?: string
  as?: ElementType
}

function Button<T extends ElementType = 'button'>({
  className,
  children,
  as,
  ...rest
}: PropsWithChildren<Props> & ComponentPropsWithoutRef<T>) {
  return (
    <Root as={as} className={className} {...rest}>
      {children}
    </Root>
  )
}

export { Button }
