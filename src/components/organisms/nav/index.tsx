import { Link } from 'components/atoms/link'
import { memo } from 'react'
import { Routes } from 'routes'

import { Header, LinksContainer, Root } from './styles'

function _Nav() {
  return (
    <Root>
      <Header>nav</Header>
      <LinksContainer>
        <Link to={Routes.index} label="home" />
        <Link to={Routes.users} label="users" />
      </LinksContainer>
    </Root>
  )
}

export const Nav = memo(_Nav)
