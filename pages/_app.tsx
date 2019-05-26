import * as React from 'react'
import App, { Container } from 'next/app'

class Root extends App {
  public render() {
    const { Component } = this.props

    return (
      <Container>
        <Component />
      </Container>
    )
  }
}

export default Root
