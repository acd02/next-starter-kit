import { PropsWithChildren } from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'
import { Content, Root } from './styles'

type Props = Parameters<typeof Meta>[0]

const MainLayout = ({ title, description, children }: PropsWithChildren<Props>) => (
  <Root>
    <Meta title={title} description={description} />
    <Nav />
    <Content>{children}</Content>
    <Footer />
  </Root>
)

export { MainLayout }
