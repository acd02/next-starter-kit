import * as React from 'react'
import { css } from '@emotion/core'

import { Meta } from '../../atoms/meta'
import { Nav, Footer } from '../../organisms'

const rootStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const containerStyles = css({
  flex: '1 0 auto',
  padding: '1rem'
})

type Props = {
  title: string
}

export const MainLayout = (props: Props & React.Props<{}>) => (
  <div css={rootStyles}>
    <Meta title={props.title} />
    <Nav />
    <div css={containerStyles}>{props.children}</div>
    <Footer />
  </div>
)
