import { err, ok, Result } from 'acd-utils'
import to from 'await-to-js'
import { IncomingMessage } from 'http'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'

export async function get<Res, Err>(
  url: string,
  req?: IncomingMessage
): Promise<Result<Err, Res>> {
  const prefixedUrl = `${/^api/.test(url) ? '/' : ''}${url}`
  const formattedUrl = req ? formatAPIUrl(url, req) : prefixedUrl

  const [error, data] = await to<Res, Err>(
    fetch(formattedUrl)
      .then(handleErrors)
      .then(i => i.json())
  )

  if (error) return err(error)
  else return ok(data as Res)
}

export function post<Data, Res>(body: Data) {
  /* eslint-disable-next-line no-undef */
  const headers = new Headers({
    'Content-type': 'application/json; charset=UTF-8'
  })

  return (url: string): Promise<Res> =>
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(handleErrors)
      .then(i => i.json())
}

// utils

// see: https://bit.ly/2JVfEgv
function handleErrors<Err>(res: Response) {
  if (!res.ok)
    /* eslint-disable-next-line prefer-promise-reject-errors */
    return Promise.reject((res as unknown) as Err)
  else return Promise.resolve(res)
}

function formatAPIUrl(url: string, req: IncomingMessage) {
  const { protocol, host } = absoluteUrl(req)

  return `${protocol}//${host}/${url}`
}
