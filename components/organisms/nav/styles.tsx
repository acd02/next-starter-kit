import { css } from 'emotion'

const root = css({
  flex: 'none',
  padding: '1rem 0',
  borderBottom: '1px solid #e0e0e0',
  textAlign: 'center'
})

const second = css({
  $nest: {
    'p:first-of-type': {
      fontSize: '2rem'
    }
  }
})

export const styles = {
  root,
  second
}
