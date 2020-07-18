import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { theme } from 'theme'

const wrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

// see: https://bit.ly/305a0g1
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

export { customRender as render }
