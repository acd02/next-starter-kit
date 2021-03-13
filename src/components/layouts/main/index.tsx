import { PropsWithChildren } from 'react'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'
import { styles } from './styles'

type Props = Parameters<typeof Meta>[0]

function MainLayout({ title, description, children }: PropsWithChildren<Props>) {
  return (
    <div css={styles.root}>
      <Meta title={title} description={description} />
      <Nav />
      <div css={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export { MainLayout }
