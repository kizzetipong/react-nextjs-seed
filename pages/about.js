import Head from 'next/head'
import Layout from '../layouts/main.js'
import withRoot from '../src/withRoot'

const About = () => (
  <Layout>
    <Head>
      <title>ABOUT</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Add meta header here*/}
    </Head>
    <p>This is the about page</p>
  </Layout>
)

export default withRoot(About)