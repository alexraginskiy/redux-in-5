import App, {Container} from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../store/with_redux_cool_stuff'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  }
}
