import NextLink from 'next/link'
import { DynamicRoutesDetail } from 'routes'

import { styles } from './styles'
import { handleKeyPress } from './utils'

type Props = {
  routeDetails: DynamicRoutesDetail
  param: string
  label: string
  className?: string
}

function DynamicLink({ className, routeDetails, label, param }: Props) {
  const { basePath } = routeDetails

  return (
    <NextLink href={`${basePath}/${param}`}>
      <a
        href={`${basePath}/${param}`}
        className={className}
        css={styles.root}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        {label}
      </a>
    </NextLink>
  )
}

export { DynamicLink }
