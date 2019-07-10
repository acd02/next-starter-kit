import * as React from 'react'
import App, { Container } from 'next/app'

/**
 * HACK
 *
 * 1. workaround until the @types/next are fixed
 */
type Props = {
  props: {
    Component: React.Factory<{}> /* 1 */
  }
}

class Root extends App {
  public render() {
    const {
      props: { Component }
    } = (this as unknown) as Props /* 1 */

    return (
      <Container>
        <Component />
      </Container>
    )
  }
}

export default Root
