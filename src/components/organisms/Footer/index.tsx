import { memo } from 'react'
import { box } from 'styles/box'

function _Footer() {
  return (
    <footer
      className={box({
        textAlign: 'center',
        py: '$4',
        uFlexNone: true,
        borderTop: '1px solid $grey300',
      })}
    >
      <span className={box({ uBadge: true })}>footer</span>
    </footer>
  )
}

export const Footer = memo(_Footer)
