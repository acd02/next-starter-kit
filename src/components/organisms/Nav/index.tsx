import { Box } from 'components/atoms/Box'
import { Link } from 'components/atoms/Link'
import { memo } from 'react'

function _Nav() {
  return (
    <Box
      as="nav"
      flexNone
      textAlign="center"
      css={{
        py: '$4',
        borderBottom: '1px solid $grey300',
      }}
    >
      <Box display="inline-block" as="header" css={{ uBadge: true, marginBottom: '$4' }}>
        nav
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap
        css={{
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
