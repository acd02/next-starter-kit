import { render } from 'rtl'

import { RenderUsers } from '../index'

describe('RenderUsers', () => {
  it('should render the content', () => {
    const { getByText } = render(<RenderUsers users={[]} />)

    expect(getByText(/users:/i)).toBeInTheDocument()
  })
})
