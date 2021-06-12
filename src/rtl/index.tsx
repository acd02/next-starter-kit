import { render } from '@testing-library/react'
import { SomeProvider } from 'contexts/someContext'
import type { FC } from 'react'

const wrapper: FC = ({ children }) => <>{children}</>
const someProviderWrapper: FC = ({ children }) => <SomeProvider>{children}</SomeProvider>

// see: https://bit.ly/305a0g1
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

const renderWithSomeContext = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper: someProviderWrapper, ...options })
}

export { customRender as render, renderWithSomeContext }
