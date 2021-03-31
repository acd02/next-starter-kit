import { theme } from 'theme'
import type { Theme } from 'theme/types'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

function mq(bp: Breakpoint) {
  const mapper: Record<Breakpoint, keyof Theme['sizes']> = {
    sm: '$maxSm',
    md: '$maxmd',
    lg: '$maxlg',
    xl: '$maxXl',
  }

  return `@media screen and (min-width: ${theme.sizes[mapper[bp]]})`
}

export { mq }
