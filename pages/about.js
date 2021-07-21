import Head from 'next/head'
import { apiURL } from 'config/apiURL'
import AboutLayout from 'components/layouts/AboutLayout'

export default function About({ content }) {
  return (
    <>
        <Head>
            <title>Justin Majetich</title>
            <meta name="description" content="Justin Majetich's portfolio site" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Laila&family=Gotu&family=Yatra+One"></link>
        </Head>
        <AboutLayout content={content}/>
    </>
  )
}


export async function getStaticProps() {

  const res = await fetch(apiURL + `about`)
  const data = await res.json()

  return { 
    props: {
      content: data
    },
    revalidate: 60,
  }
}