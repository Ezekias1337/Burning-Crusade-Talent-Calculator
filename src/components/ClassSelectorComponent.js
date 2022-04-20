import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import HunterComponent from "./HunterComponent";
import DruidComponent from "./DruidComponent";
import MageComponent from "./MageComponent";
import PaladinComponent from "./PaladinComponent";
import PriestComponent from "./PriestComponent";
import RogueComponent from "./RogueComponent";
import ShamanComponent from "./ShamanComponent";
import WarlockComponent from "./WarlockComponent";
import WarriorComponent from "./WarriorComponent";
import { HunterTestComponent } from "./Hunter-Test-Component";
import "../css/vanilla_css/class-selector.css";

const ClassSelector = (props) => {
  const arrayOfClassIcons = [];
  const objDestructured = props.classes[0];

  for (const [index, item] of objDestructured.entries()) {
    arrayOfClassIcons.push(
      <div
        className="col col-4 mt-3 hovereffect"
        data-theme={objDestructured[index].playableClassName}
        key={index + item}
      >
        <img
          src={objDestructured[index].classIcon}
          alt={objDestructured[index].playableClassName}
          className="classIcon img-fluid"
          style={{
            border: `2px solid ${objDestructured[index].classColor}`,
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <h3
          className="mt-2 playable-class-name"
          style={{
            color: objDestructured[index].classColor,
            fontSize: "150%",
          }}
        >
          {objDestructured[index].playableClassName}
        </h3>
        <div className="overlay class-icon">
          <Link
            to={"/" + objDestructured[index].playableClassName}
            className="info"
            id={objDestructured[index].playableClassName + "Link"}
            style={{
              color: objDestructured[index].classColor,
              boxShadow: `0 0 5px ${objDestructured[index].classColor}`,
              border: `2px solid ${objDestructured[index].classColor}`,
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Select
          </Link>
        </div>
      </div>
    );
  }

  let classSelectorPart1 = [
    arrayOfClassIcons[0],
    arrayOfClassIcons[1],
    arrayOfClassIcons[2],
  ];
  let classSelectorPart2 = [
    arrayOfClassIcons[3],
    arrayOfClassIcons[4],
    arrayOfClassIcons[5],
  ];
  let classSelectorPart3 = [
    arrayOfClassIcons[6],
    arrayOfClassIcons[7],
    arrayOfClassIcons[8],
  ];

  const classSelector = (
    <>
      <div className="row">{classSelectorPart1}</div>
      <div className="row">{classSelectorPart2}</div>
      <div className="row">{classSelectorPart3}</div>
      <div className="row">
        {arrayOfClassIcons && arrayOfClassIcons[9]
          ? arrayOfClassIcons[9]
          : null}
      </div>
    </>
  );

  return (
    <Router>
      <div style={{ position: "relative" }}>
        <div className="container mx-auto">
          <div className="row">
            <div className="col">
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                className="mt-2"
                id="select-a-class"
              >
                Select a Class
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row mx-auto">
            <div className="col-1 col-md-3"></div>
            <div className="col-10 col-md-6 mb-4">{classSelector}</div>
            <div className="col-1 col-md-3"></div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/Hunter">
          <HunterComponent />
        </Route>
        <Route path="/Hunter/:build">
          <HunterComponent />
        </Route>
        <Route path="/Druid">
          <DruidComponent />
        </Route>
        <Route path="/Druid/:build">
          <DruidComponent />
        </Route>
        <Route path="/Mage">
          <MageComponent />
        </Route>
        <Route path="/Mage/:build">
          <MageComponent />
        </Route>
        <Route path="/Paladin">
          <PaladinComponent />
        </Route>
        <Route path="/Paladin/:build">
          <PaladinComponent />
        </Route>
        <Route path="/Priest">
          <PriestComponent />
        </Route>
        <Route path="/Priest/:build">
          <PriestComponent />
        </Route>
        <Route path="/Rogue">
          <RogueComponent />
        </Route>
        <Route path="/Rogue/:build">
          <RogueComponent />
        </Route>
        <Route path="/Shaman">
          <ShamanComponent />
        </Route>
        <Route path="/Shaman/:build">
          <ShamanComponent />
        </Route>
        <Route path="/Warlock">
          <WarlockComponent />
        </Route>
        <Route path="/Warlock/:build">
          <WarlockComponent />
        </Route>
        <Route path="/Warrior">
          <WarriorComponent />
        </Route>
        <Route path="/Warrior/:build">
          <WarriorComponent />
        </Route>
        <Route path="/Test-Hunter">
          <HunterTestComponent />
        </Route>
        <Route path="/Test-Hunter/:build">
          <HunterTestComponent />
        </Route>
      </Switch>
    </Router>
  );
};

export default ClassSelector;
