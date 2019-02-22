import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import JssProvider from 'react-jss/lib/JssProvider'
import flush from 'styled-jsx/server'
import getPageContext from '../src/getPageContext'

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props

      const hotjarScript = '';
        // `(function(h,o,t,j,a,r){
        //   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        //   h._hjSettings={hjid:920821,hjsv:6};
        //   a=o.getElementsByTagName('head')[0];
        //   r=o.createElement('script');r.async=1;
        //   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        //   a.appendChild(r);
        // })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`

    return (
      <html lang="en" dir="ltr">
        <Head>
          <base href="/" />
          <meta name="Title" content=" React -NextJS " />
          <title>React -NextJS</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit" />
          { process.env.NODE_ENV !== 'development' ? <script dangerouslySetInnerHTML={{__html: hotjarScript}} /> : ''}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          @font-face {
            font-family: 'Supermarket';
            src:url("/static/fonts/supermarket.ttf") format("truetype");
          }
          body {
            margin: 0;
            font-family: "Roboto", "Kanit", "Helvetica", "Arial", sans-serif;
          }
        `}</style>
      </html>
    )
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Get the context of the page to collected side effects.
  const pageContext = getPageContext()
  const page = ctx.renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ))

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  }
}

export default MyDocument;
