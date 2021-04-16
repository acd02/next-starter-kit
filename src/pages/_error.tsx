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
  const getContent = () => {
    if (statusCode === 404) return 'Oops, missing page'
    if (statusCode) return `An error ${statusCode} occurred on the server`
    else return 'An error occurred on the client'
  }

  return <div css={styles}>{getContent()}</div>
}

Error.getInitialProps = ({ err, res }): Props => {
  const getStatusCode = () => {
    if (err) return err.statusCode
    if (res) return res.statusCode
    else return 404
  }

  return { statusCode: getStatusCode() }
}

export default Error
