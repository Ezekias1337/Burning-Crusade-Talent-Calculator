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

import Druid from "../images/Druid_Icon.png";
import Hunter from "../images/Hunter_Icon.png";
import Mage from "../images/Mage_Icon.png";
import Paladin from "../images/Paladin_Icon.png";
import Rogue from "../images/Rogue_Icon.png";
import Shaman from "../images/Shaman_Icon.png";
import Warlock from "../images/Warlock_Icon.png";
import Warrior from "../images/Warrior_Icon.png";
import Priest from "../images/Priest_Icon.png";

class ClassSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          id: 0,
          playableClassName: "Hunter",
          classIcon: Hunter,
          classColor: "#ABD473",
        },
        {
          id: 1,
          playableClassName: "Shaman",
          classIcon: Shaman,
          classColor: "#0070DE",
        },
        {
          id: 2,
          playableClassName: "Warlock",
          classIcon: Warlock,
          classColor: "#9482C9",
        },
        {
          id: 3,
          playableClassName: "Warrior",
          classIcon: Warrior,
          classColor: "#C79C6E",
        },
        {
          id: 4,
          playableClassName: "Rogue",
          classIcon: Rogue,
          classColor: "#FFF569",
        },
        {
          id: 5,
          playableClassName: "Priest",
          classIcon: Priest,
          classColor: "#FFFFFF",
        },
        {
          id: 6,
          playableClassName: "Paladin",
          classIcon: Paladin,
          classColor: "#F58CBA",
        },
        {
          id: 7,
          playableClassName: "Mage",
          classIcon: Mage,
          classColor: "#69CCF0",
        },
        {
          id: 8,
          playableClassName: "Druid",
          classIcon: Druid,
          classColor: "#FF7D0A",
        },
      ],
    };
  }

  render() {
    const arrayOfClassIcons = [];
    for (const [index, item] of this.state.classes.entries()) {
      arrayOfClassIcons.push(
        <div
          className="col mt-5 hovereffect"
          style={{ height: "130px", width: "130px" }}
        >
          <img
            src={this.state.classes[index].classIcon}
            alt={this.state.classes[index].playableClassName}
            className="classIcon img-fluid"
            style={{
              border: `2px solid ${this.state.classes[index].classColor}`,
            }}
          />
          <h4 style={{ color: this.state.classes[index].classColor }}>
            {this.state.classes[index].playableClassName}
          </h4>
          <div class="overlay" style={{ height: "100%", width: "100%" }}>
            <Link
              to={"/" + this.state.classes[index].playableClassName}
              class="info"
              id={this.state.classes[index].playableClassName + "Link"}
              style={{
                color: this.state.classes[index].classColor,
                boxShadow: `0 0 5px ${this.state.classes[index].classColor}`,
                border: `2px solid ${this.state.classes[index].classColor}`,
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
                >
                  Select a Class
                </h1>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="row mx-auto">
              <div className="col-3 "></div>
              <div className="col-6 col-md-6 col-xl-5 mb-4">
                {classSelector}
              </div>
              <div className="col-3 "></div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/Hunter">
            <HunterComponent />
          </Route>
          <Route path="/Druid">
            <DruidComponent />
          </Route>
          <Route path="/Mage">
            <MageComponent />
          </Route>
          <Route path="/Paladin">
            <PaladinComponent />
          </Route>
          <Route path="/Priest">
            <PriestComponent />
          </Route>
          <Route path="/Rogue">
            <RogueComponent />
          </Route>
          <Route path="/Shaman">
            <ShamanComponent />
          </Route>
          <Route path="/Warlock">
            <WarlockComponent />
          </Route>
          <Route path="/Warrior">
            <WarriorComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default ClassSelector;
