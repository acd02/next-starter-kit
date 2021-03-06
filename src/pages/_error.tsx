import styled from '@emotion/styled'
import { maybe } from 'acd-utils'
import { NextPage } from 'next'

type Props = {
  statusCode?: number
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  return (
    <Root>
      {maybe(statusCode)
        .map(code =>
          code === 404 ? 'Oops, missing page' : `An error ${code} occurred on the server`
        )
        .getOrElse('An error occurred on the client')}
    </Root>
  )
}

Error.getInitialProps = ({ err, res }) => {
  const getStatusCode = () => {
    if (err) return err.statusCode
    if (res) return res.statusCode
    else return 404
  }

  return { statusCode: getStatusCode() }
}

export default Error
