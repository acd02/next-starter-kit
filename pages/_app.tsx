import App from 'next/app'
import * as React from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any, fp/no-class, fp/no-this */
class Root extends App {
  public render() {
    const {
      props: { Component }
    } = this as any

    return <Component />
  }
}

export default Root
