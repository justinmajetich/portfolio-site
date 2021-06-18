import Head from 'next/head'
import Section from 'components/layouts/SectionLayout'

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
