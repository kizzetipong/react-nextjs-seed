import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import Layout from '../layouts/main.js'
import { getStore } from '../modules/redux-config'
import withRoot from '../src/withRoot'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    let pathname = ctx.pathname

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps, pathname}
  }

  render () {
    const {Component, pageProps, pathname} = this.props
    return (
      <Container>
        <Provider store={ getStore() }>
          <Layout pathname={pathname}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRoot(MyApp)