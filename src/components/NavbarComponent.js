import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import BCLogo from "../images/BC_Logo.png";
import HunterLogo from "../images/Hunter_Icon.png";
import ShamanLogo from "../images/Shaman_Icon.png";
import WarlockLogo from "../images/Warlock_Icon.png";
import WarriorLogo from "../images/Warrior_Icon.png";
import RogueLogo from "../images/Rogue_Icon.png";
import PriestLogo from "../images/Priest_Icon.png";
import PaladinLogo from "../images/Paladin_Icon.png";
import MageLogo from "../images/Mage_Icon.png";
import DruidLogo from "../images/Druid_Icon.png";
import HeaderBG from "../images/BGs/Warlock_BG.jpg";
import "../css/vanilla_css/navbar.css";

const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        backgroundImage: `url(${HeaderBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#b9bfb4",
      }}
    >
      <Router>
        <Navbar dark expand="md">
          <NavbarBrand
            tag="div" style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
          >
            <Link to="/">
              <img
                className="mx-auto"
                style={{ width: "250px", display: "block" }}
                src={BCLogo}
              />
            </Link>
            Talent Calculator
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  className="Hunter"
                  href="#/Hunter"
                  style={{ color: "rgb(171, 212, 115)", fontWeight: "bold" }}
                >
                  <img
                    src={HunterLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(171, 212, 115)",
                    }}
                  />
                  Hunter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Shaman"
                  href="#/Shaman"
                  style={{ color: "rgb(0, 112, 222)", fontWeight: "bold" }}
                >
                  <img
                    src={ShamanLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(0, 112, 222)",
                    }}
                  />
                  Shaman
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Warlock"
                  href="#/Warlock"
                  style={{ color: "rgb(148, 130, 201)", fontWeight: "bold" }}
                >
                  <img
                    src={WarlockLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(148, 130, 201)",
                    }}
                  />
                  Warlock
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Warrior"
                  href="#/Warrior"
                  style={{ color: "rgb(199, 156, 110)", fontWeight: "bold" }}
                >
                  <img
                    src={WarriorLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(199, 156, 110)",
                    }}
                  />
                  Warrior
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Rogue"
                  href="#/Rogue"
                  style={{ color: "rgb(255, 245, 105)", fontWeight: "bold" }}
                >
                  <img
                    src={RogueLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(255, 245, 105)",
                    }}
                  />
                  Rogue
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Priest"
                  href="#/Priest"
                  style={{ color: "rgb(255, 255, 255)", fontWeight: "bold" }}
                >
                  <img
                    src={PriestLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(255, 255, 255)",
                    }}
                  />
                  Priest
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Paladin"
                  href="#/Paladin"
                  style={{ color: "rgb(245, 140, 186)", fontWeight: "bold" }}
                >
                  <img
                    src={PaladinLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(245, 140, 186)",
                    }}
                  />
                  Paladin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Mage"
                  href="#/Mage"
                  style={{ color: "rgb(105, 204, 240)", fontWeight: "bold" }}
                >
                  <img
                    src={MageLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(105, 204, 240)",
                    }}
                  />
                  Mage
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="Druid"
                  href="#/Druid"
                  style={{ color: "rgb(255, 125, 10)", fontWeight: "bold" }}
                >
                  <img
                    src={DruidLogo}
                    style={{
                      width: "25px",
                      marginRight: "2px",
                      borderRadius: "5px",
                      border: "1.3px solid rgb(255, 125, 10)",
                    }}
                  />
                  Druid
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Router>
    </div>
  );
};

export default CustomNavbar;
