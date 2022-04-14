import React from "react";
import ClassSelector from "./components/ClassSelectorComponent";
import FooterComponent from "./components/FooterComponent";
import CustomNavbar from "./components/NavbarComponent";
import ReactTooltip from "react-tooltip";

const App = () => {

  return (
    <div className="App">
      <CustomNavbar />
      <ClassSelector />
      <FooterComponent />
      <ReactTooltip html={true} backgroundColor="transparent" />
    </div>
  );
};

export default App;
