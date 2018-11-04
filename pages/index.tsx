import * as React from 'react'
import Link from 'next/link'
import { style } from 'typestyle'

const textStyles = style({
  fontSize: '40px'
})

export const Home = () => (
  <div>
    <Link href="/other">
      <a className={style({ display: 'block', marginBottom: '1rem' })}>other ➡️</a>
    </Link>
    <p className={textStyles}>content</p>
  </div>
)

export default Home
