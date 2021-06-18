import Head from 'next/head'
import LandingLayout from 'components/layouts/LandingLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout />
    </>
  )
}
