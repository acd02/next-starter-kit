import { Box } from 'components/atoms/Box'
import { memo } from 'react'

function _Footer() {
  return (
    <Box
      as="footer"
      flexNone
      textAlign="center"
      css={{
        borderTop: '1px solid $grey300',
        py: '$4',
      }}
    >
      <Box
        as="span"
        css={{
          uBadge: true,
        }}
      >
        footer
      </Box>
    </Box>
  )
}

export const Footer = memo(_Footer)
