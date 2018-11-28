import Head from 'next/head'
import { Provider } from 'react-redux'
import { Todoapp } from '../modules/todoapp'
import { getStore } from '../modules/redux-config'
import Layout from '../layouts/main.js'
import withRoot from '../src/withRoot'

const Todo = () => (
  <Provider store={getStore()}>
    <Layout>
      <Head>
        <title>TODO Example App</title>
      </Head>
      <Todoapp />
    </Layout>
  </Provider>
)

export default withRoot(Todo)