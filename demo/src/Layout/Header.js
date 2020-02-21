import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Button, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logoutUser } from '../Action/logoutAction';


function Header() {
  const login = useSelector(state => state.login);
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutUser())
  }
  return (
    (login.token && login.token !== "") ?
      <Navbar style={{ backgroundColor: 'skyblue' }} expand="md">
        <NavbarBrand to="/">Player</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <Button color="dark" onClick={onLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Navbar>
      :
      <Navbar style={{ backgroundColor: 'skyblue' }} expand="md">
        <NavbarBrand to="/">Home</NavbarBrand>
        <Nav>
          <NavItem >
            <NavLink tag={Link} to="/">Login</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/register">Registration</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
  )

}

export default Header
