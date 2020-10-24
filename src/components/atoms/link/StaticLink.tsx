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

export function Link({ to, label, className }: Props) {
  const { pathname } = useRouter()
  const isActive = to === pathname

  return (
    <NextLink href={to}>
      <Root
        className={className}
        tabIndex={0}
        status={isActive ? 'active' : undefined}
        onKeyPress={handleKeyPress}
      >
        {label}
      </Root>
    </NextLink>
  )
}
