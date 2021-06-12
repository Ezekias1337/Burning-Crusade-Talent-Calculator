import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ClassSelector from './components/ClassSelectorComponent';
import CalculatorComponent from './components/CalculatorComponent';
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
              <CalculatorComponent />
          </div>
      );
  }
}

export default App;
