import { css } from '@emotion/react'
import type { NextPage } from 'next'

type Props = {
  statusCode?: number
}

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  const content = (() => {
    if (statusCode === 404) return 'Oops, missing page'
    if (statusCode) return `An error ${statusCode} occurred on the server`
    else return 'An error occurred on the client'
  })()

  return <div css={styles}>{content}</div>
}

Error.getInitialProps = ({ err, res }): Props => {
  const statusCode = (() => {
    if (err) return err.statusCode
    if (res) return res.statusCode
    else return 404
  })()

  return { statusCode }
}

export default Error
