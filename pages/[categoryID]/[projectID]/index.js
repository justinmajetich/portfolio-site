import ProjectLayout from 'components/layouts/ProjectLayout'
import Head from 'next/head'
import { apiURL } from 'config/apiURL'

export default function Project({ content }) {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
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

  return { paths, fallback: false }
}

  // params contains the 'categoryID'.
  export async function getStaticProps({ params }) {

  // If the route is like '/categories/code', then params.categoryID is 'code'
  const res = await fetch(apiURL + `projects?slug=${params.projectID}`)

  const data = await res.json()

  return { 
    props: {
      content: data[0]
    } 
  }
}