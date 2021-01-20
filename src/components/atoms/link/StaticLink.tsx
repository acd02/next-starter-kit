import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Routes } from 'routes'

import { handleKeyPress } from './common'
import { Root } from './styles'

type Props = {
  to: Routes
  label: string
  className?: string
}

function Link({ to, label, className }: Props) {
  const { pathname } = useRouter()
  const isActive = to === pathname

  return (
    <NextLink href={to}>
      <Root
        href={to}
        className={className}
        tabIndex={0}
        isActive={isActive}
        onKeyPress={handleKeyPress}
      >
        {label}
      </Root>
    </NextLink>
  )
}

export { Link }
