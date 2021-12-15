import { withTheme } from 'styled-components'
import Head from 'next/head'
import ProjectLayout from 'components/layouts/ProjectLayout'
import { apiURL } from 'config/apiURL'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'

function Project({ content, theme}) {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
      </Head>
      <ProjectLayout content={content}/>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {

  // Call an external API endpoint to get posts
  const res = await fetch(apiURL + 'projects')
  const projects = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: {
      categoryID: project.categories[0].slug,
      projectID: project.slug
    },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

  const res = await fetch(apiURL + `projects?slug=${params.projectID}`)

  const data = await res.json()

  return { 
    props: {
      content: data[0]
    },
    revalidate: 60,
  }
}

export default withTheme(Project)