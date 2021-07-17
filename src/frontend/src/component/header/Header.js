import React, { useState } from 'react';
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Button,
  Input
} from 'reactstrap';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import HomePage from '../../page/HomePage';
import Register from '../../page/Register';
import Login from '../../page/Login';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class = "container">
            <NavLink to="/">
              <div id="logo_brand">
                <img src="/logo-iLearn.svg" style = {{height: "40px"}} alt="iLearn logo" />
              </div>
            </NavLink>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <div class = "Left">
                  <div><NavLink to="/">Home</NavLink></div>
                  <div><NavLink to="#">Categories</NavLink></div>
                  <div><NavLink to="#">Contact</NavLink></div>
                </div>
                <div class = "Right">
                  <div><NavLink to="/login"><button type="button" className="btn btn-outline-info">Login</button></NavLink></div>
                  <div><NavLink to="/register"><button type="button" className="btn btn-outline-info">Register</button></NavLink></div>
                </div>
              
            </Collapse>
        </div> 
      </nav>
      <Route path = "/" exact component = {HomePage}/>
      <Route path = "/login" component = {Login}/>
      <Route path = "/register" component = {Register}/>
      </Router>
    </div>
  );
}

export default Header;