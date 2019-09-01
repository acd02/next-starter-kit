import { css } from '@emotion/core'
import { MainLayout } from 'components/layouts/main'
import * as React from 'react'

export default function OtherPage() {
  return (
    <MainLayout title="other">
      <Content />
    </MainLayout>
  )
}

const btnStyles = css({
  backgroundColor: '#eee',
  marginBottom: '1rem',
  padding: '0.5rem 1rem',
  cursor: 'pointer'
})

function Content() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button css={btnStyles} onClick={() => setIsOpen(s => !s)}>
        update state
      </button>
      <div>
        state: <span>{`${isOpen}`}</span>
      </div>
    </>
  )
}
