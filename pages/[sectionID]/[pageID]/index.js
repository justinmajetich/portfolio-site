import ProjectLayout from 'components/layouts/ProjectLayout'
import Head from 'next/head'

export default function Section() {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ProjectLayout />
    </>
  )
}