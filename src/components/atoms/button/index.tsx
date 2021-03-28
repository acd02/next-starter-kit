import { css } from '@emotion/react'
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'
import { themeGet } from 'theme/get'
import { Color } from 'theme/types'

type Props = {
  className?: string
  as?: ElementType
  href?: string
  color?: Color
  textColor?: string
}

const CSSVariables = {
  textColor: '--text-color',
  bgColor: '--bg-color',
} as const

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
        [CSSVariables.bgColor]: themeGet('colors', color),
        [CSSVariables.textColor]: textColor,
      }}
      css={styles.root}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}

const styles = {
  root: css`
    ${CSSVariables.bgColor}: initial;
    ${CSSVariables.textColor}: initial;

    position: relative;
    z-index: 1;
    display: inline-block;
    padding: ${themeGet('space', '$2')} ${themeGet('space', '$3')};
    font-size: ${themeGet('fontSizes', '$base')};
    font-weight: ${themeGet('fontWeights', '$medium')};
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: box-shadow 0.15s ease;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      background-image: linear-gradient(
        0deg,
        rgba(161, 93, 93, 0.1) 0%,
        rgba(0, 0, 0, 0.1) 100%
      );
      z-index: -1;
      transition: opacity 0.15s ease;
    }

    &:hover {
      &:after {
        opacity: 1;
      }
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px white, 0 0 0 3px var(--bg-color);
    }
  `,
}

export { Button }
