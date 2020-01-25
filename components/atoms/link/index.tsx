import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { DynamicRoutesDetail, Routes } from 'routes'

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

type DynamicLinkProps = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
}

export function DynamicLink(props: DynamicLinkProps) {
  const { routeDetails, label, param } = props

  return (
    <NextLink
      href={`${routeDetails.basePath}/${routeDetails.paramBracket}`}
      as={`${routeDetails.basePath}/${param}`}
    >
      <a css={[styles.root]}>{label}</a>
    </NextLink>
  )
}
