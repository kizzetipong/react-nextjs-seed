import Head from 'next/head'
import { Todoapp } from '../modules/todoapp'

const Todo = () => (
  <div>
    <Head>
      <title>TODO Example App</title>
    </Head>
    <Todoapp />
  </div>
)

export default Todo