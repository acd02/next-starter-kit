import * as React from 'react'
import Link from 'next/link'
import { css } from 'emotion'

import { Layout } from 'components/layouts'

export default function OtherPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  function handleClick() {
    setIsOpen(s => !s)
  }

  const btnStyles = css({
    backgroundColor: '#eee',
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  })

  return (
    <Layout title="other">
      <Link href="/">
        <a className={css({ display: 'block', marginBottom: '1rem' })}>home ⬅️</a>
      </Link>
      <button className={btnStyles} onClick={handleClick}>
        update state
      </button>
      <div>
        state: <span>{`${isOpen}`}</span>
      </div>
    </Layout>
  )
}
