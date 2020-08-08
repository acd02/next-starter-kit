import { Link } from 'components/atoms/link'
import React from 'react'
import { Routes } from 'routes'

import { Header, LinksContainer, Root } from './styles'

export const Nav = React.memo(() => (
  <Root>
    <Header>nav</Header>
    <LinksContainer>
      <Link to={Routes.index} label="home" />
      <Link to={Routes.users} label="users" />
    </LinksContainer>
  </Root>
))
