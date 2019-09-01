import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Routes } from 'routes'

import { styles } from './styles'

type Props = {
  to: Routes
  label: string
}
export function Link(props: Props) {
  const { pathname } = useRouter()
  const isActive = props.to === pathname

  return (
    <NextLink href={props.to}>
      <a css={[styles.root, isActive && styles.isActive]}>{props.label}</a>
    </NextLink>
  )
}
