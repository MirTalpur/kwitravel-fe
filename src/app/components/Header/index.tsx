import * as React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const style = require('./style.css');

export const Header = () => (
  <div className={style.nav}>
    <Navbar  toggleable>
      <NavbarToggler right onClick={this.toggleNavbar} className="mr-3" />
        <NavbarBrand href="/" className={style.navBrand}>kwitravel</NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className={style.navLinkOne} href="#works">How it works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={style.navLinkOne} href="#inspirations">Inspirations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={style.navLinkSecond} href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  </div>
);
