import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';

import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const NavigationNonAuth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/buybitcoin">SatCollector</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/buybitcoin/">Buy bitcoin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wallet/">Wallet</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          <NavLink href="/signin/">Log In</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    
  );
};

const Navigation = () => (
  
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/buybitcoin/">SATCOLLECTOR</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/buybitcoin/">Buy bitcoin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/wallet/">Wallet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/account/">Profile</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          <NavLink href="/signin/">Log In</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
  );
};




export default Navigation;
