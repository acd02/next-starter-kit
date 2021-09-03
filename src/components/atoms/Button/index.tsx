import type { VariantProps } from '@stitches/react'
import type { ElementType } from 'react'
import { PolymorphicComponentProps } from 'react-polymorphic-box'
import type { CSS } from 'stitches'

import { Styled } from './styles'

type Props = {
  css?: CSS
  color?: VariantProps<typeof Styled.Button>['color']
}

type PolymorphicProps<Elm extends ElementType> = PolymorphicComponentProps<Elm, Props>

const buttonElm = 'button'

function Button<Elm extends ElementType = typeof buttonElm>({
  className,
  children,
  variants,
  color,
  as = buttonElm as Elm,
  ...rest
}: PolymorphicProps<Elm>) {
  return (
    <Styled.Button color={color} as={as} className={className} {...rest}>
      {children}
    </Styled.Button>
  )
}

export { Button }
