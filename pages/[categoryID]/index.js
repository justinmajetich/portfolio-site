import Head from 'next/head'
import { withTheme } from 'styled-components'
import CategoryLayout from 'components/layouts/CategoryLayout'
import { apiURL } from 'config/apiURL'
import GetGoogleFontsURL from 'utils/getGoogleFontsURL'

function Category({ content, theme }) {

  console.log(content)

  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={GetGoogleFontsURL(theme.headerFont)}></link>
      </Head>
      <CategoryLayout content={content}/>
    </>
  )
}

export async function getStaticPaths() {

  // Call an external API endpoint to get posts
  const res = await fetch(apiURL + 'categories')
  const categories = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { categoryID: category.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {

  // Retrieve category data.
  // If the route is like '/categories/code', then params.categoryID is 'code'.
  const categoryRes = await fetch(apiURL + `categories?slug=${params.categoryID}`)
  const categoryData = await categoryRes.json()

  // Retrieve project data filtered by category and sorted in descending (as defined by Strapi service).
  const projectRes = await fetch(apiURL + `projects?categories.slug=${params.categoryID}`)
  const projectData = await projectRes.json()

  // Replace category data's 'projects' field with sorted project data.
  categoryData[0].projects = projectData

  return { 
    props: {
      key: categoryData[0].id,
      content: categoryData[0]
    },
    revalidate: 60,
  }
}

export default withTheme(Category)