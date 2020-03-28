import * as React from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'

type Props = {
  title: string
}

export const MainLayout = ({ title, children }: Props & React.Props<{}>) => (
  <div className="flex flex-col h-full">
    <Meta title={title} />
    <Nav />
    <div className="p-4 flex-grow">{children}</div>
    <Footer />
  </div>
)
