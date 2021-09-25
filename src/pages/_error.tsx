import type { NextPage } from 'next'
import { box } from 'styles/box'
import { makeMapper } from 'utils/makeMapper'

type Props = {
  statusCode?: number
}

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  const content = makeMapper({
    values: [
      [() => statusCode === 404, () => 'Oops, missing page'],
      [() => !!statusCode, () => `An error ${statusCode} occurred on the server`],
    ],
    fallback: () => 'An error occurred on the client',
  })

  return (
    <div
      className={box({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      })}
    >
      {content}
    </div>
  )
}

Error.getInitialProps = ({ err, res }): Props => {
  const statusCode = makeMapper({
    values: [
      [() => !!err, () => err?.statusCode],
      [() => !!res, () => res?.statusCode],
    ],
    fallback: () => 404,
  })

  return {
    statusCode,
  }
}

export default Error
