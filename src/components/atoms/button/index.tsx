import cx from 'classcat'
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'
import { themeGet } from 'theme/get'
import { Color } from 'theme/types'

import styles from './styles.module.css'

type Props = {
  className?: string
  as?: ElementType
  href?: string
  color?: Color
  textColor?: string
}

function Button({
  className,
  children,
  color = '$primary',
  textColor = '#fff',
  as: Comp = 'button',
  ...rest
}: PropsWithChildren<Props> & ComponentPropsWithoutRef<'button'>) {
  return (
    <Comp
      style={{
        '--bg-color': themeGet('colors', color),
        '--text-color': textColor,
      }}
      className={cx([styles.root, className])}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export { Button }
