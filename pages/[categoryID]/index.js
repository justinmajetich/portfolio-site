import Head from 'next/head'
import CategoryLayout from 'components/layouts/CategoryLayout'

export default function Category() {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CategoryLayout />
    </>
  )
}