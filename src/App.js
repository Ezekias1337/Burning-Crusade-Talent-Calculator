import React from "react";
import ClassSelector from "./components/ClassSelectorComponent";
import FooterComponent from "./components/FooterComponent";
import CustomNavbar from "./components/NavbarComponent";
import ReactTooltip from "react-tooltip";

import { playableClassInfoVanilla } from "./playable-class-info/vanilla/playable-class-info-vanilla";
import { playableClassInfoBurningCrusade } from "./playable-class-info/burning-crusade/playable-class-info-bc";
import { playableClassInfoWrathOfTheLichKing } from "./playable-class-info/wotlk/playable-class-info-wotlk";


const App = () => {

  return (
    <div className="App">
      <CustomNavbar />
      <ClassSelector classes={playableClassInfoBurningCrusade} />
      <FooterComponent />
      <ReactTooltip html={true} backgroundColor="transparent" />
    </div>
  );
};

export default App;
