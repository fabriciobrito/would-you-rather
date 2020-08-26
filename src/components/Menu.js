import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import LoginMenu from './LoginMenu';

const Menu = (props) => {
  return(
    <Navbar brand={<LoginMenu />}>
      <NavItem>
        Home
      </NavItem>
      <NavItem>
        New Question
      </NavItem>
      <NavItem>
        Leaderboard
      </NavItem>
    </Navbar>
  )
}

export default Menu;