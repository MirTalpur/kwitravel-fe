import * as React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const style = require('./style.css');

class Header extends React.Component<any, any> {
  public constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  public toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  public render() {
    return(
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
    )
  }
}

export { Header }
