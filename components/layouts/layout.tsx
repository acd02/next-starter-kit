import * as React from 'react'
import { css } from 'emotion'

import { Meta } from '../atoms'
import { Nav, Footer } from '../organisms'

const rootStyles = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const containerStyles = css({
  flex: '1 0 auto',
  padding: '1rem'
})

export const Layout = (props: React.Props<{}>) => (
  <div className={rootStyles}>
    <Meta />
    <Nav />
    <div className={containerStyles}>{props.children}</div>
    <Footer />
  </div>
)
