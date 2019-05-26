import * as React from 'react'
import { css } from '@emotion/core'

import { MainLayout } from 'components/layouts/main'

export default function OtherPage() {
  return (
    <MainLayout title="other">
      <Switch />
    </MainLayout>
  )
}

function Switch() {
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
    <>
      <button css={btnStyles} onClick={handleClick}>
        update state
      </button>
      <div>
        state: <span>{`${isOpen}`}</span>
      </div>
    </>
  )
}
