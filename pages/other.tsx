import { css } from '@emotion/core'
import { MainLayout } from 'components/layouts/main'
import * as React from 'react'
import { Theme } from 'theme'

export default function OtherPage() {
  return (
    <MainLayout title="other">
      <Content />
    </MainLayout>
  )
}

const btnStyles = (t: Theme) =>
  css({
    backgroundColor: t.colors.primary,
    marginBottom: t.spacings.sm,
    padding: `${t.spacings.xs} ${t.spacings.sm}`,
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
