import { css } from '@emotion/core'

const root = css({
  flex: 'none',
  padding: '1rem 0',
  borderBottom: '1px solid #e0e0e0',
  textAlign: 'center'
})

const header = css({
  marginBottom: '16px'
})

const links = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  'a:not(:last-of-type)': {
    marginRight: '12px'
  }
})

export const styles = {
  root,
  header,
  links
}
