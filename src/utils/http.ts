import { IncomingMessage } from 'http'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'

export function get<Res>(url: string, req?: IncomingMessage): Promise<Res> {
  const formattedUrl = req ? formatAPIUrl(url, req) : url

  return fetch(formattedUrl)
    .then(handleErrors)
    .then(i => i.json())
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
