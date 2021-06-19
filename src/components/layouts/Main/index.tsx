import { Box } from 'components/atoms/Box'
import { PropsWithChildren } from 'react'

import { Meta } from '../../atoms/Meta'
import { Footer, Nav } from '../../organisms'

type Props = Parameters<typeof Meta>[0]

function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <Box display="flex" flexDirection="column" css={{ height: '100%' }}>
      <Meta title={title} description={description} />
      <Nav />
      <Box flexGrow="1" css={{ padding: '$4' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export { MainLayout }
