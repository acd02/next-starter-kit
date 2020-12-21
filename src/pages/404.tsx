import React from 'react'
import { styled } from 'stitches'

const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

export default function Custom404() {
  return <Root>missing page</Root>
}
