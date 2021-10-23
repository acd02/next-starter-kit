import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FC } from 'react'

const wrapper: FC = ({ children }) => <>{children}</>

// see: https://bit.ly/305a0g1
const customRender = (ui: JSX.Element, options = {}) => {
  return render(ui, { wrapper, ...options })
}

export { customRender as render, screen, waitFor, userEvent }
