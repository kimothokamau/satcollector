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
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SatCollector</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/buybitcoin/">BuyBitcoin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Wallets
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Bitcoin wallet
                </DropdownItem>
                <DropdownItem>
                  Ethereum wallet
                </DropdownItem>
                <DropdownItem>
                  KSH wallet
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
          <NavLink href="/signin/">Log In</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

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
        <NavbarBrand href="/">SatCollector</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/buybitcoin/">BuyBitcoin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog/">Blog</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Wallets
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Bitcoin wallet
                </DropdownItem>
                <DropdownItem>
                  KSH wallet
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
          <NavLink href="/signin/">Log In</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
  );
};




export default Navigation;
