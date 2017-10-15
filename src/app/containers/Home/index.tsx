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
        <div className={style.jumbo}>
                <div className={style.nav}>
        <Navbar  toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} className="mr-3" />
            <NavbarBrand href="/" className="mr-auto">kwitravel</NavbarBrand>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className={style.navLink}href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={style.navLink} href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>

          <Container fluid={true}>
            <div className={style.container}>
              <h1 className={style.heading}>You're picture perfect vacation starts here</h1>
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
      </div>
    );
  }
}

export { Home }
