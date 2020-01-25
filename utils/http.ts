import { IncomingMessage } from 'http'
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'

// see: https://bit.ly/2JVfEgv
function handleErrors<Err>(res: Response) {
  if (!res.ok)
    /* eslint-disable-next-line prefer-promise-reject-errors */
    return Promise.reject((res as unknown) as Err)
  else return Promise.resolve(res)
}

export function get<Res>(url: string): Promise<Res> {
  return fetch(url)
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

export function setAPIUrl(url: string, req?: IncomingMessage) {
  const { protocol, host } = absoluteUrl(req)

  return `${protocol}//${host}/${url}`
}
