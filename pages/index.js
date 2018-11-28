import React from 'react'
import Layout from '../layouts/main.js'
import withRoot from '../src/withRoot'

class Index extends React.Component {
  constructor (props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
    }
  }
  render () {
    return (
      <Layout>
      </Layout>
    )
  }
}

export default withRoot(Index)