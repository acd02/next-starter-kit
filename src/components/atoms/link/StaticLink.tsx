import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Routes } from 'routes'

import { styles } from './styles'
import { handleKeyPress } from './utils'

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
      <a
        href={to}
        className={className}
        tabIndex={0}
        css={[styles.root, isActive && styles.isActive]}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { Link }
