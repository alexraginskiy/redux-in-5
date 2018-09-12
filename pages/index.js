import Link from 'next/link'
import store from '../store/plain_javascript'
import { Container } from 'semantic-ui-react'

export default () =>
  <Container>
    <h1>Plain javascript example</h1>
    <p>
      Check the console, see <code>store/plain_javascript.js</code>
    </p>
    <p>
      <Link href="/redux">
        <a>next</a>
      </Link>
    </p>
  </Container>
