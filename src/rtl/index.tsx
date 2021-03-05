import { ThemeProvider } from '@emotion/react'
import { render } from '@testing-library/react'
import { FC } from 'react'
import { theme } from 'theme'

const wrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

// see: https://bit.ly/305a0g1
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

export { customRender as render }
