import Head from 'next/head'

type Props = {
  title: string
  description: string
}

function Meta({ title, description }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  )
}

export { Meta }
