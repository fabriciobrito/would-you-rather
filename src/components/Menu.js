import React from 'react';
import { Navbar, Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import LoginMenu from './LoginMenu';

const Menu = (props) => {
  return(
    <Navbar
      brand={<LoginMenu />}
      centerChildren={true}
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavLink to='/'>
        <Icon left={true}>home</Icon>Home
      </NavLink>
      <NavLink to='/add'>
      <Icon left={true}>add</Icon>New Question
      </NavLink>
      <NavLink to='/leaderboard'>
      <Icon left={true}>grade</Icon>Leader Board
      </NavLink>
    </Navbar>
  )
}

export default Menu;