import * as React from 'react'
import App, { Container } from 'next/app'
import { setStylesTarget, cssRaw } from 'typestyle'
import { Layout } from '../components/layouts'

cssRaw(`
  #__next {
    height: 100%;
  }
`)

class Root extends App {
  public componentDidMount() {
    setStylesTarget(document.getElementById('styles-target') as HTMLElement)
  }

  public render() {
    const { Component } = this.props

    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}

export default Root
