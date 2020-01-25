import { css } from '@emotion/core'
import { NextPage } from 'next'
import * as React from 'react'

type Props = {
  statusCode?: number
}

const styles = css({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})

const Error: NextPage<Props, {}> = ({ statusCode }) => {
  return (
    <div css={styles}>
      {(() => {
        if (statusCode)
          return statusCode === 404
            ? 'Oops, missing page'
            : `An error ${statusCode} occurred on server`
        else return 'An error occurred on client'
      })()}
    </div>
  )
}

Error.getInitialProps = ({ err, res }) => {
  const statusCode = (() => {
    if (err) return err.statusCode
    if (res) return res.statusCode
    else return 404
  })()

  return { statusCode }
}

export default Error
