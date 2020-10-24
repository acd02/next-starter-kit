import { Link } from 'components/atoms/link'
import React from 'react'

import { Header, LinksContainer, Root } from './styles'

export const Nav = React.memo(() => (
  <Root>
    <Header>nav</Header>
    <LinksContainer>
      <Link to="/" label="home" />
      <Link to="/users" label="users" />
    </LinksContainer>
  </Root>
))
