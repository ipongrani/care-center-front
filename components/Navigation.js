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
      background-color: rgb(247, 218, 34); //rgb(84, 65, 145);
    }
   //------


   //NavItem
    .nav-item a {
      color: rgb(247, 218, 34);
      text-decoration: none;
    }

    .toggle {
      color: rgb(247, 218, 34);
      background-color: transparent;
      border: none;

      &:focus {
        box-shadow: 0 0 1.5px 1px rgb(247, 218, 34) !important;
        color: rgb(247, 218, 34);
        background-color: rgb(86, 46, 137);
      }
    }
   //------


   //NavLink
    div .navLink {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dList {
      cursor: pointer;

      a {
        color: black !important;
      }

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
        <Navbar light expand="md">
          <NavbarBrand href="/">Blue Care Services</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="navLink"><Link as={"/rani"} href="/something"><a>Something</a></Link></div>
              </NavItem>
              <NavItem>
                <div className="navLink"><Link as={"/tester"} href="https://www.google.com/"><a>Something</a></Link></div>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="toggle"  caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <Link as={"Login"} href={"/form?fType=login"}>
                    <DropdownItem className="dList">
                      <a>Login</a>
                    </DropdownItem>
                  </Link>
                  <Link as={"Registration"} href={"/form?fType=register"}>
                    <DropdownItem className="dList">
                      <a>SignUp</a>
                    </DropdownItem>
                  </Link>
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
