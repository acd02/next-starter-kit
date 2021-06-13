import { Box } from 'components/atoms/Box'
import { PropsWithChildren } from 'react'

import { Meta } from '../../atoms/Meta'
import { Footer, Nav } from '../../organisms'

type Props = Parameters<typeof Meta>[0]

function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Meta title={title} description={description} />
      <Nav />
      <Box css={{ flexGrow: 1, padding: '$4' }}>{children}</Box>
      <Footer />
    </Box>
  )
}

export { MainLayout }
