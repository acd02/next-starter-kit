import * as React from 'react'
import Link from 'next/link'
import { css } from 'react-emotion'

export const Home = () => (
  <div>
    <Link href="/other">
      <a className={css({ display: 'block', marginBottom: '1rem' })}>other ➡️</a>
    </Link>
    <p>content</p>
  </div>
)

export default Home
