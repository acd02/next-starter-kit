import styled from '@emotion/styled'
import { Theme } from 'theme'

export const Root = styled.footer<UnkownObj, Theme>`
  flex: none;
  padding: ${({ theme: { spacings } }) => `${spacings[4]} 0`};
  border-top: ${({
    theme: {
      colors: { grey },
    },
  }) => `1px solid${grey[300]}`};
  text-align: center;
`
