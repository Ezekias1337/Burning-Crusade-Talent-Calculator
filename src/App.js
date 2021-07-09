import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';
import ClassSelector from './components/ClassSelectorComponent';
import HunterComponent from './components/HunterComponent';
import FooterComponent from './components/FooterComponent'
import ReactTooltip from 'react-tooltip';
import './App.css';



class App extends Component {
  
  
    render() {
      return (
          <div className="App">
              <Navbar dark color="success">
              <div className="container">
                  <NavbarBrand href="/">Burning Crusade Talent Calculator</NavbarBrand>
              </div>
              </Navbar>
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

