import { css } from '@emotion/react'
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'
import { themeGet } from 'theme/get'

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

const styles = {
  root: css`
    padding: ${themeGet('space', '$2')} ${themeGet('space', '$3')};
    font-size: ${themeGet('fontSizes', '$base')};
    background-color: ${themeGet('colors', '$grey300')};
    transition-property: background-color;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${themeGet('colors', '$grey400')};
    }
  `,
}

export { Button }
