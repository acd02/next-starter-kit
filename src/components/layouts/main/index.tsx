import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { themeGet } from 'theme/get'

import { Meta } from '../../atoms/meta'
import { Footer, Nav } from '../../organisms'

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

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  content: css`
    flex-grow: 1;
    padding: ${themeGet('space', '$4')};
  `,
}

export { MainLayout }
