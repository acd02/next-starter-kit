import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

import { styles } from './styles'

type Props = {
  className?: string
  as?: ElementType
  href?: string
}

function Button({
  className,
  children,
  as: Comp = 'button',
  ...rest
}: PropsWithChildren<Props> & ComponentPropsWithoutRef<'button'>) {
  return (
    <Comp css={styles.root} className={className} {...rest}>
      {children}
    </Comp>
  )
}

export { Button }
