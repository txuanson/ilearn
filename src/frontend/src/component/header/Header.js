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
      <nav class="navbar navbar-expand-md navbar-light">
        <div class = "container">
            <NavbarBrand href="/">
              <div id="logo_brand">
                <img src="/logo-iLearn.svg" style = {{height: "40px"}} alt="iLearn logo" />
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <div class = "Left">
                  <div><NavLink href="#">Home</NavLink></div>
                  <div><NavLink href="#">Categories</NavLink></div>
                  <div><NavLink href="#">Contact</NavLink></div>
                </div>
                <div class = "Right">
                  <div><button type="button" className="btn btn-outline-info">Login</button></div>
                  <div><button type="button" className="btn btn-outline-info">Register</button></div>
                </div>
              
            </Collapse>
        </div> 
      </nav>
    </div>
  );
}

export default Header;
