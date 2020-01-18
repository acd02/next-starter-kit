import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import * as React from 'react'
import { theme } from 'theme'

/* eslint-disable @typescript-eslint/no-explicit-any, fp/no-class, fp/no-this */
class Root extends App {
  public render() {
    const {
      props: { Component }
    } = this as any

    return (
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    )
  }
}

export default Root
