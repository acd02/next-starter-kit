import { renderWithSomeContext } from 'rtl'

import { RenderUsers } from '../index'

describe('RenderUsers', () => {
  it('should render the content', () => {
    const { getByText } = renderWithSomeContext(<RenderUsers users={[]} />)

    expect(getByText(/users:/i)).toBeInTheDocument()
  })
})
