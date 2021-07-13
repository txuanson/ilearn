import React, { useState } from 'react';
import "./Header.css";
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
  NavbarText,
  Form,
  Button,
  Input
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div class = "container">
            <NavbarBrand href="/">
            ILEARN
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <div><NavLink href="#">Home</NavLink></div>
                <div><NavLink href="#">Categories</NavLink></div>
                <div><NavLink href="#">Contact</NavLink></div>
                <div><Input type="Search" name="Search" id="Search" placeholder="SEARCH" /></div>
                <div><Button color="success">Login</Button>{' '}</div>
                <div><Button color="success">Register</Button>{' '}</div>
            </Collapse>
        </div> 
      </Navbar>
    </div>
  );
}

export default Header;
