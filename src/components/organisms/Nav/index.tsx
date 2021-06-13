import { Box } from 'components/atoms/Box'
import { Link } from 'components/atoms/Link'
import { memo } from 'react'

function _Nav() {
  return (
    <Box
      as="nav"
      css={{
        flex: 'none',
        py: '$4',
        borderBottom: '1px solid $grey300',
        textAlign: 'center',
      }}
    >
      <Box
        as="header"
        css={{ uBadge: true, display: 'inline-block', marginBottom: '$4' }}
      >
        nav
      </Box>
      <Box
        as="div"
        css={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          columnGap: '$3',
        }}
      >
        <Link route="index" label="home" />
        <Link route="users" label="users" />
      </Box>
    </Box>
  )
}

export const Nav = memo(_Nav)
