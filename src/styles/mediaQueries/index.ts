import { css, SerializedStyles } from '@emotion/react'
import { theme } from 'theme'

type MQProps = {
  sm?: SerializedStyles
  md?: SerializedStyles
  lg?: SerializedStyles
  xl?: SerializedStyles
}

function mq({ sm, md, lg, xl }: MQProps) {
  return css`
    @media screen and (min-width: ${theme.sizes.$maxSm}) {
      ${sm}
    }
    @media screen and (min-width: ${theme.sizes.$maxmd}) {
      ${md}
    }
    @media screen and (min-width: ${theme.sizes.$maxlg}) {
      ${lg}
    }
    @media screen and (min-width: ${theme.sizes.$maxXl}) {
      ${xl}
    }
  `
}

export { mq }
