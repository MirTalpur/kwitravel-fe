import * as React from 'react';
import {  Jumbotron, Button, Container, Form, Fieldset, FormGroup, Navbar, Input, NavbarBrand, NavbarToggler, Collapse, Nav,NavLink, NavItem   } from 'reactstrap';
const style = require('./style.css');
import { Header } from 'components';
class Home extends React.Component<any, any> {
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
    return (
      <div className={style.Home}>
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
        <div className={style.jumbo}>


          <Container fluid={true}>
            <div className={style.container}>
              <h1 className={style.heading}>You're picture perfect</h1>
              <h1 className={style.headingTwo}>vacation starts here.</h1>
                <div className="row">
                  <div className={style.flightInput}>
                    <Form className="form-horizontal">
                      <div className="form-group col-xs-12 pull-right">
                        <div className="col-xs-3">
                          <Input type="text"/>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
            </div>
          </Container>
        </div>
        <div id="works">
          <p>How it works?</p>
        </div>
      </div>
    );
  }
}

export { Home }
