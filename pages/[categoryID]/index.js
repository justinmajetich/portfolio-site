import Head from 'next/head'
import CategoryLayout from 'components/layouts/CategoryLayout'
import { apiURL } from 'config/apiURL'

export default function Category({ content }) {
  return (
    <>
      <Head>
        <title>Justin Majetich</title>
        <meta name="description" content="Justin Majetich's portfolio site" />
        <link rel="icon" href="/favicon.ico" />
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

  // If the route is like '/categories/code', then params.categoryID is 'code'
  const res = await fetch(apiURL + `categories?slug=${params.categoryID}`)

  const data = await res.json()

  return { 
    props: {
      key: data[0].id,
      content: data[0]
    },
    revalidate: 60,
  }
}