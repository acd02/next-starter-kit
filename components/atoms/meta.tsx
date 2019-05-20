import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const Meta = (props: Props) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{props.title}</title>
  </Head>
)
