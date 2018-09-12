import Link from 'next/link'
import store from '../store/with_redux'
import { Container } from 'semantic-ui-react'

export default () =>
  <Container>
    <h1>Redux Example</h1>
    <p>
      Check the console, see <code>store/with_redux.js</code>
    </p>
    <p>
      <Link href="/">
        <a>prev</a>
      </Link>
      {' | '}
      <Link href="/redux-cool-stuff">
        <a>next</a>
      </Link>
    </p>
  </Container>
