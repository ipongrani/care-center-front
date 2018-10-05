import React from 'react';
import Styled from 'styled-components';
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
  DropdownItem } from 'reactstrap';
import Link from 'next/link';



let Container = Styled.div`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

//Navbar
 .navbar {
   background-color: rgb(63, 52, 119); //rgb(68, 41, 206);


   //NavbarBrand
    .navbar-brand {
      color: rgb(247, 218, 34);
    }
   //------


   //NavbarToggler
    .navbar-toggler {
      background-color: rgb(84, 65, 145);
    }
   //------


   //NavItem
    .nav-item a {
      color: rgb(247, 218, 34) !important;
      text-decoration: none;
    }
   //------

   //DropdownMenu
     .dropdown-menu button {
       color: black !important;
     }
   //------

 }
//------



`;


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="/">Blue Care Services</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link as={"/rani"} href="/something"><a>Something</a></Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link as={"/tester"} href="https://www.google.com/"><a>Something</a></Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link as={"Login"} href={"/form?fType=login"}><a className="dList">Login</a></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link as={"Registration"} href={"/form?fType=register"}><a className="dList">SignUp</a></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    FAQ
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}
