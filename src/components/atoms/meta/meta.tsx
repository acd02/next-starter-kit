import Head from 'next/head'
import * as React from 'react'

type Props = {
  title: string
}

export const Meta = ({ title }: Props) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
  </Head>
)
