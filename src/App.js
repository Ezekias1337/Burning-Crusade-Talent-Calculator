import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
import ClassSelector from './components/ClassSelectorComponent';
import HunterComponent from './components/HunterComponent';
import FooterComponent from './components/FooterComponent'
import ReactTooltip from 'react-tooltip';
import './App.css';
import BCLogo from "./images/BC_Logo.png"
import RepeatingTile from "./images/Repeating_Tile.PNG"
import CustomNavbar from "./components/NavbarComponent"

class App extends Component {
  
  
    render() {
      return (
          <div className="App">
              {/*<Navbar dark style={{backgroundColor: "#b9bfb4"}}>
              <div className="container">
                  <img className="mx-auto" style={{width: "300px"}} src={BCLogo} />
              </div>
              <div className="container">
                  <NavbarBrand href="/" className="mx-auto" style={{width: "300px", color: "#1f2229", fontWeight: "bold", fontSize: "2rem"}}>Talent Calculator</NavbarBrand>
              </div>
              </Navbar>*/}
              <CustomNavbar />
              <ClassSelector />
              
              <FooterComponent />
              <ReactTooltip 
                html={true}
              />
          </div>
      );
  }
}

export default App;

