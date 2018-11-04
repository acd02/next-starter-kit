import * as React from 'react'
import { style } from 'typestyle'

import { Meta } from '../atoms'
import { Nav, Footer } from '../organisms'

const rootStyles = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const containerStyles = style({
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
