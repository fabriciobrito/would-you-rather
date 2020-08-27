import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import LoginMenu from './LoginMenu';

const Menu = (props) => {
  return(
    <Navbar brand={<LoginMenu />}>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/add'>
        New Question
      </NavLink>
      <NavItem>
        Leaderboard
      </NavItem>
    </Navbar>
  )
}

export default Menu;