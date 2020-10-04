import { render } from '@testing-library/react'
import React from 'react'

const wrapper: React.FC = ({ children }) => <>{children}</>

// see: https://bit.ly/305a0g1
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

export { customRender as render }
