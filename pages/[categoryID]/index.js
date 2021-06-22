import Head from 'next/head'
import CategoryLayout from 'components/layouts/CategoryLayout'

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


// This function gets called at build time
export async function getStaticPaths() {

  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1337/categories')
  const categories = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { categoryID: category.slug },
  }))

  return { paths, fallback: false }
}

  // params contains the 'categoryID'.
  export async function getStaticProps({ params }) {

  // If the route is like '/categories/code', then params.categoryID is 'code'
  const res = await fetch(`http://localhost:1337/categories?slug=${params.categoryID}`)

  const data = await res.json()

  return { 
    props: {
      content: data[0]
    } 
  }
}