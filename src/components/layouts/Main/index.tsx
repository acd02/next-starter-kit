import { PropsWithChildren } from 'react'
import { box } from 'styles/box'

import { Meta } from '../../atoms/Meta'
import { Footer, Nav } from '../../organisms'

type Props = Parameters<typeof Meta>[0]

function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <div className={box({ display: 'flex', flexDirection: 'column', height: '100%' })}>
      <Meta title={title} description={description} />
      <Nav />
      <div className={box({ flexGrow: 1, padding: '$4' })}>{children}</div>
      <Footer />
    </div>
  )
}

export { MainLayout }
