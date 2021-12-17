import Head from 'next/head'
import { withTheme } from 'styled-components'
import { apiURL } from 'config/apiURL'
import LandingLayout from 'components/layouts/LandingLayout'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'
import SortProjectsByDate from 'utils/sortProjectsByDate'

function Home({ content, theme }) {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
      </Head>
      <LandingLayout content={content}/>
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(apiURL + `landing`)
  const data = await res.json()

  // Sorts projects in place descending by date.
  SortProjectsByDate(data[0].projects)

  return { 
    props: {
      content: data[0]
    },
    revalidate: 60,
  }
}

export default withTheme(Home)