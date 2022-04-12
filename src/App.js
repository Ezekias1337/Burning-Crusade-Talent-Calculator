import React, { Component, useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
} from "reactstrap";
import ClassSelector from "./components/ClassSelectorComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";
import CustomNavbar from "./components/NavbarComponent";
import ReactTooltip from "react-tooltip";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <ClassSelector />
        <FooterComponent />
        <ReactTooltip html={true} backgroundColor="transparent" />
      </div>
    );
  }
}

export default App;
