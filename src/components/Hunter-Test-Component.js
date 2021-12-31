/* 
  Base Imports
*/
import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Alert } from "reactstrap";
/* 
  Class Specific Imports
*/
import { Hunter } from "../talentinfo/Hunter";
import { HunterJSX } from "./ClassJSXForRender/HunterJSX";

let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class HunterTestComponent extends Component {
  
  
  render() {
    return (
      <HunterJSX />
    )
  }
}

<ReactTooltip data-html="true" />;

export default HunterTestComponent;
