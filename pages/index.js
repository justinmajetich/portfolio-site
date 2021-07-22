import Head from 'next/head'
import { withTheme } from 'styled-components'
import LandingLayout from 'components/layouts/LandingLayout'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'

function Home({ theme }) {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
      </Head>
      <LandingLayout />
    </>
  )
}

export default withTheme(Home)