import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { Root } from './styles'

type Props = {
  className?: string
  as?: ElementType
  href?: string
}

function Button({
  className,
  children,
  as,
  ...rest
}: PropsWithChildren<Props> & ComponentPropsWithoutRef<ElementType>) {
  return (
    <Root as={as} className={className} {...rest}>
      {children}
    </Root>
  )
}

export { Button }
