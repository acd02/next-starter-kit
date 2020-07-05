import * as React from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'
import { Content, Root } from './styles'

type Props = {
  title: string
}

export const MainLayout = ({ title, children }: Props & React.Props<Props>) => (
  <Root>
    <Meta title={title} />
    <Nav />
    <Content>{children}</Content>
    <Footer />
  </Root>
)
