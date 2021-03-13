import { css } from '@emotion/react'

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export default function Custom404() {
  return <div css={styles}>missing page</div>
}
