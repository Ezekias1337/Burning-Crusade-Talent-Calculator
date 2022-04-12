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

class HunterTestComponent extends Component {
  
  
  render() {
    return (
      <HunterJSX />
    )
  }
}

<ReactTooltip data-html="true" type="warning" />;

export default HunterTestComponent;
