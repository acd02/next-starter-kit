import cx from 'classcat'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { DynamicRoutesDetail, Routes } from 'routes'

type Props = {
  to: Routes
  label: string
  className?: string
}

export function Link(props: Props) {
  const { pathname } = useRouter()
  const isActive = props.to === pathname

  return (
    <NextLink href={props.to}>
      <a
        tabIndex={0}
        className={cx([
          'cursor-pointer text-gray-600',
          isActive && 'border-b border-gray-600',
          props.className
        ])}
        onKeyPress={handleKeyPress}
      >
        {props.label}
      </a>
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
      <a
        tabIndex={0}
        onKeyPress={handleKeyPress}
        className={cx('cursor-pointer text-gray-600')}
      >
        {label}
      </a>
    </NextLink>
  )
}

// utils

function handleKeyPress(e: React.KeyboardEvent<HTMLAnchorElement>) {
  e.preventDefault()

  if (e.key === 'Enter' || e.location === 0) {
    const target = e.target as HTMLAnchorElement
    target.click()
  }
}
