import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import HunterComponent from './HunterComponent';
import DruidComponent from './DruidComponent';
import MageComponent from './MageComponent';
import PaladinComponent from './PaladinComponent';
import PriestComponent from './PriestComponent';
import RogueComponent from './RogueComponent';
import ShamanComponent from './ShamanComponent';
import WarlockComponent from './WarlockComponent';
import WarriorComponent from './WarriorComponent';

import Druid from '../images/Druid_Icon.png'
import Hunter from '../images/Hunter_Icon.png'
import Mage from '../images/Mage_Icon.png'
import Paladin from '../images/Paladin_Icon.png'
import Rogue from '../images/Rogue_Icon.png'
import Shaman from '../images/Shaman_Icon.png'
import Warlock from '../images/Warlock_Icon.png'
import Warrior from '../images/Warrior_Icon.png'
import Priest from '../images/Priest_Icon.png'


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
          spec1: {
            name: "Beast Mastery",
            bg: "assets/images/talents/Hunter/Background/BeastMastery.jpg",
          },
          spec2: {
            name: "Marksmanship",
            bg: "assets/images/talents/Hunter/Background/Marksman.jpg",
          },
          spec3: {
            name: "Survival",
            bg: "assets/images/talents/Hunter/Background/Survival.jpg",
          },
        },
        {
          id: 1,
          playableClassName: "Shaman",
          classIcon: Shaman,
          classColor: "#0070DE",
          spec1: {
            name: "Elemental",
            bg: "assets/images/talents/Shaman/Background/Elemental.jpg",
          },
          spec2: {
            name: "Enhancement",
            bg: "assets/images/talents/Shaman/Background/Enhancement.jpg",
          },
          spec3: {
            name: "Restoration",
            bg: "assets/images/talents/Shaman/Background/Restoration.jpg",
          },
        },
        {
          id: 2,
          playableClassName: "Warlock",
          classIcon: Warlock,
          classColor: "#9482C9",
          spec1: {
            name: "Affliction",
            bg: "assets/images/talents/Warlock/Background/Affliction.jpg",
          },
          spec2: {
            name: "Demonology",
            bg: "assets/images/talents/Warlock/Background/Demonology.jpg",
          },
          spec3: {
            name: "Destruction",
            bg: "assets/images/talents/Warlock/Background/Destruction.jpg",
          },
        },
        {
          id: 3,
          playableClassName: "Warrior",
          classIcon: Warrior,
          classColor: "#C79C6E",
          spec1: {
            name: "Arms",
            bg: "assets/images/talents/Warrior/Background/Arms.jpg",
          },
          spec2: {
            name: "Fury",
            bg: "assets/images/talents/Warrior/Background/Fury.jpg",
          },
          spec3: {
            name: "Protection",
            bg: "assets/images/talents/Warrior/Background/Protection.jpg",
          },
        },
        {
          id: 4,
          playableClassName: "Rogue",
          classIcon: Rogue,
          classColor: "#FFF569",
          spec1: {
            name: "Assassination",
            bg: "assets/images/talents/Rogue/Background/Assassination.jpg",
          },
          spec2: {
            name: "Combat",
            bg: "assets/images/talents/Rogue/Background/Combat.jpg",
          },
          spec3: {
            name: "Subtlety",
            bg: "assets/images/talents/Rogue/Background/Subtlety.jpg",
          },
        },
        {
          id: 5,
          playableClassName: "Priest",
          classIcon: Priest,
          classColor: "#FFFFFF",
          spec1: {
            name: "Discipline",
            bg: "assets/images/talents/Priest/Background/Discipline.jpg",
          },
          spec2: {
            name: "Holy",
            bg: "assets/images/talents/Priest/Background/Holy.jpg",
          },
          spec3: {
            name: "Shadow",
            bg: "assets/images/talents/Priest/Background/Shadow.jpg",
          },
        },
        {
          id: 6,
          playableClassName: "Paladin",
          classIcon: Paladin,
          classColor: "#F58CBA",
          spec1: {
            name: "Holy",
            bg: "assets/images/talents/Paladin/Background/Holy.jpg",
          },
          spec2: {
            name: "Protection",
            bg: "assets/images/talents/Paladin/Background/Protection.jpg",
          },
          spec3: {
            name: "Retribution",
            bg: "assets/images/talents/Paladin/Background/Retribution.jpg",
          },
        },
        {
          id: 7,
          playableClassName: "Mage",
          classIcon: Mage,
          classColor: "#69CCF0",
          spec1: {
            name: "Arcane",
            bg: "assets/images/talents/Mage/Background/Arcane.jpg",
          },
          spec2: {
            name: "Fire",
            bg: "assets/images/talents/Mage/Background/Fire.jpg",
          },
          spec3: {
            name: "Frost",
            bg: "assets/images/talents/Mage/Background/Frost.jpg",
          },
        },
        {
          id: 8,
          playableClassName: "Druid",
          classIcon: Druid,
          classColor: "#FF7D0A",
          spec1: {
            name: "Balance",
            bg: "assets/images/talents/Druid/Background/Balance.jpg",
          },
          spec2: {
            name: "Feral Combat",
            bg: "assets/images/talents/Druid/Background/Feral Combat.jpg",
          },
          spec3: {
            name: "Restoration",
            bg: "assets/images/talents/Druid/Background/Restoration.jpg",
          },
        },
      ],
    };
  }

  fixNavLinks(){
    let navLinkToManipulate = document.getElementsByClassName("Hunter")[0];
    let navLinkFromClassSelector = document.getElementById("HunterLink");

    navLinkToManipulate.href = navLinkFromClassSelector.href;
  }

  render() {
    const classSelector = this.state.classes.map((playableClass) => {
      return (
        <div
          className="col mt-5 hovereffect"
          style={{ height: "130px", width: "130px"}}
          
        >
          <img
            src={playableClass.classIcon}
            alt={playableClass.playableClassName}
            className="classIcon img-fluid"
            style={{ border: `2px solid ${playableClass.classColor}` }}
          />
          <h4 style={{ color: playableClass.classColor }}>
            {playableClass.playableClassName}
          </h4>
          <div class="overlay" style={{ height: "110px", width: "135px" }}>
            <Link 
              to={"/" + playableClass.playableClassName}
              class="info"
              onClick={this.scrollComponentIntoView}
              id={playableClass.playableClassName + "Link"}
              
              style={{
                color: playableClass.classColor,
                boxShadow: `0 0 5px ${playableClass.classColor}`,
                border: `2px solid ${playableClass.classColor}`,
              }}
            >
              
              Select
            </Link>
          </div>
        </div>
      );
    });

    return (
      <Router>
        <div onLoad={this.fixNavLinks} style={{ position: "relative" }} >
          <div className="container mx-auto">
            <div className="row">
              <div className="col">
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }} className="mt-2">
                  Select a Class
                </h1>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="row">
              <div className="col "></div>
              <div className="col-12 col-md-6 col-xl-5 mb-4 ml-5">{classSelector}</div>
              <div className="col "></div>
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