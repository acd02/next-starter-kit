import { Link } from 'components/atoms/Link'
import { memo } from 'react'
import { box } from 'styles/box'

function _Nav() {
  return (
    <nav
      className={box({
        textAlign: 'center',
        uFlexNone: true,
        py: '$4',
        borderBottom: '1px solid $grey300',
      })}
    >
      <header className={box({ display: 'inline-block', uBadge: true, mb: '$4' })}>
        nav
      </header>
      <div
        className={box({
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          columnGap: '$3',
        })}
      >
        <Link route="index" label="home" />
        <Link route="users" label="users" />
      </div>
    </nav>
  )
}

export const Nav = memo(_Nav)
