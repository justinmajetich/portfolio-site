import Head from 'next/head'
import Header from 'components/templates/Header'
import Landing from 'components/layouts/Landing'
import Section from 'components/layouts/Section'

export default function Home() {
  return (
    <>
        <Head>
            <title>Justin Majetich</title>
            <meta name="description" content="Justin Majetich's portfolio site" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Section />
    </>
  )
}
