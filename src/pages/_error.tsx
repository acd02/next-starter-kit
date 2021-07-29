import { Box } from 'components/atoms/Box'
import type { NextPage } from 'next'
import { makeMapper } from 'utils/makeMapper'

type Props = {
  statusCode?: number
}

const Error: NextPage<Props, unknown> = ({ statusCode }) => {
  const content = makeMapper({
    key: () => {
      if (statusCode === 404) return 'missingPage'
      if (statusCode) return 'serverError'
      else return 'clientError'
    },
    mapper: {
      missingPage: 'Oops, missing page',
      serverError: `An error ${statusCode} occurred on the server`,
      clientError: 'An error occurred on the client',
    },
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
    key: () => {
      if (err) return 'isErr'
      if (res) return 'isRes'
      else return 'isMissing'
    },
    mapper: {
      isErr: err?.statusCode,
      isRes: res?.statusCode,
      isMissing: 404,
    },
  })

  return {
    statusCode,
  }
}

export default Error
