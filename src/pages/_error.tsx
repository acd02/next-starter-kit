import type { NextPage } from 'next'

import styles from './styles.module.css'

type Props = {
  statusCode?: number
}

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  const content = (() => {
    if (statusCode === 404) return 'Oops, missing page'
    if (statusCode) return `An error ${statusCode} occurred on the server`
    else return 'An error occurred on the client'
  })()

  return <div className={styles.genericPage}>{content}</div>
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
