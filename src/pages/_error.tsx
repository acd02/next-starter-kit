import { Box } from 'components/atoms/Box'
import type { NextPage } from 'next'
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
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      css={{
        height: '100%',
      }}
    >
      {content}
    </Box>
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
