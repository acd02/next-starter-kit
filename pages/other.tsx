import * as React from 'react'
import Link from 'next/link'
import { style } from 'typestyle'

type State = {
  isOpen: boolean
}

export class Other extends React.Component<{}, State> {
  state: Readonly<State> = {
    isOpen: false
  }

  handleClick = () => this.setState(_ => ({ isOpen: !_.isOpen }))

  render() {
    const btnStyles = style({
      backgroundColor: '#eee',
      marginBottom: '1rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    })

    return (
      <>
        <Link href="/">
          <a className={style({ display: 'block', marginBottom: '1rem' })}>home ⬅️</a>
        </Link>
        <button className={btnStyles} onClick={this.handleClick}>
          update state
        </button>
        <div>
          state: <span>{`${JSON.stringify(this.state)}`}</span>
        </div>
      </>
    )
  }
}

export default Other
