import { css } from '@emotion/react'
import type { NextPage } from 'next'
import { __, match } from 'ts-pattern'

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
  return (
    <div css={styles}>
      {match(statusCode)
        .with(404, () => 'Oops, missing page')
        .with(__.number, code => `An error ${code} occurred on the server`)
        .otherwise(() => 'An error occurred on the client')}
    </div>
  )
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
