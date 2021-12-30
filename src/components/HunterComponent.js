import $ from "jquery";
import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Alert } from "reactstrap";
import { Hunter } from "../talentinfo/Hunter";
import spec1BG from "../images/talents/Hunter/Background/BeastMastery.jpg";
import spec2BG from "../images/talents/Hunter/Background/Marksman.jpg";
import spec3BG from "../images/talents/Hunter/Background/Survival.jpg";
import spec1Logo from "../images/talents/Hunter/Spec1Logo.jpg";
import spec2Logo from "../images/talents/Hunter/Spec2Logo.jpg";
import spec3Logo from "../images/talents/Hunter/Spec3Logo.jpg";

import overlayImage from "../images/Item_Hover.png";

import DownSilverSmall from "../images/DownSilverSmall.png";
import DownSilverMedium from "../images/DownSilverMedium.png";
import DownSilverLarge from "../images/DownSilverLarge.png";

import DownGoldSmall from "../images/DownGoldSmall.png";
import DownGoldMedium from "../images/DownGoldMedium.png";
import DownGoldLarge from "../images/DownGoldLarge.png";

import LeftSilverSmall from "../images/LeftSilverSmall.png";
import RightSilverSmall from "../images/RightSilverSmall.png";

import LeftGoldSmall from "../images/LeftGoldSmall.png";
import RightGoldSmall from "../images/RightGoldSmall.png";

import AngleArrowSilver from "../images/AngleArrowSilver.png";
import AngleArrowGold from "../images/AngleArrowGold.png";

//Spec1 Images

import AnimalHandler from "../images/talents/Hunter/Progression/spec1/AnimalHandler.jpg";
import CatlikeReflexes from "../images/talents/Hunter/Progression/spec1/CatlikeReflexes.jpg";
import Frenzy from "../images/talents/Hunter/Progression/spec1/Frenzy.jpg";
import Intimidation from "../images/talents/Hunter/Progression/spec1/Intimidation.jpg";
import UnleashedFury from "../images/talents/Hunter/Progression/spec1/UnleashedFury.jpg";
import EnduranceTraining from "../images/talents/Hunter/Progression/spec1/EnduranceTraining.jpg";
import ImprovedAspectHawk from "../images/talents/Hunter/Progression/spec1/ImprovedAspectHawk.jpg";
import Pathfinding from "../images/talents/Hunter/Progression/spec1/Pathfinding.jpg";
import BestialDiscipline from "../images/talents/Hunter/Progression/spec1/BestialDiscipline.jpg";
import FerociousInspiration from "../images/talents/Hunter/Progression/spec1/FerociousInspiration.jpg";
import ImprovedAspectMonkey from "../images/talents/Hunter/Progression/spec1/ImprovedAspectMonkey.jpg";
import SerpentsSwiftness from "../images/talents/Hunter/Progression/spec1/SerpentsSwiftness.jpg";
import BestialSwiftness from "../images/talents/Hunter/Progression/spec1/BestialSwiftness.jpg";
import Ferocity from "../images/talents/Hunter/Progression/spec1/Ferocity.jpg";
import ImprovedMendPet from "../images/talents/Hunter/Progression/spec1/ImprovedMendPet.jpg";
import SpiritBond from "../images/talents/Hunter/Progression/spec1/SpiritBond.jpg";
import FocusedFire from "../images/talents/Hunter/Progression/spec1/FocusedFire.jpg";
import ThickHide from "../images/talents/Hunter/Progression/spec1/ThickHide.jpg";
import ImprovedRevivePet from "../images/talents/Hunter/Progression/spec1/ImprovedRevivePet.jpg";
import BestialWrath from "../images/talents/Hunter/Progression/spec1/BestialWrath.jpg";
import TheBeastWithin from "../images/talents/Hunter/Progression/spec1/BeastWithin.jpg";

//Spec2 Images

import AimedShot from "../images/talents/Hunter/Progression/spec2/AimedShot.jpg";
import Efficiency from "../images/talents/Hunter/Progression/spec2/Efficiency.jpg";
import ImprovedStings from "../images/talents/Hunter/Progression/spec2/ImprovedStings.jpg";
import RapidKilling from "../images/talents/Hunter/Progression/spec2/RapidKilling.jpg";
import BarrageAndImprovedBarrage from "../images/talents/Hunter/Progression/spec2/BarrageAndImprovedBarrage.jpg";
import GoForTheThroat from "../images/talents/Hunter/Progression/spec2/GoForTheThroat.jpg";
import LethalShots from "../images/talents/Hunter/Progression/spec2/LethalShots.jpg";
import ScatterShot from "../images/talents/Hunter/Progression/spec2/ScatterShot.jpg";
import CarefulAim from "../images/talents/Hunter/Progression/spec2/CarefulAim.jpg";
import ImprovedArcaneShot from "../images/talents/Hunter/Progression/spec2/ImprovedArcaneShot.jpg";
import MasterMarksman from "../images/talents/Hunter/Progression/spec2/MasterMarksman.jpg";
import SilencingShot from "../images/talents/Hunter/Progression/spec2/SilencingShot.jpg";
import CombatExperience from "../images/talents/Hunter/Progression/spec2/CombatExperience.jpg";
import ImprovedConcussiveShot from "../images/talents/Hunter/Progression/spec2/ImprovedConcussiveShot.jpg";
import MortalShots from "../images/talents/Hunter/Progression/spec2/MortalShots.jpg";
import TrueshotAura from "../images/talents/Hunter/Progression/spec2/TrueshotAura.jpg";
import ConcussiveBarrage from "../images/talents/Hunter/Progression/spec2/ConcussiveBarrage.jpg";
import ImprovedHuntersMark from "../images/talents/Hunter/Progression/spec2/ImprovedHuntersMark.jpg";
import RangedWeaponSpecialization from "../images/talents/Hunter/Progression/spec2/RangedWeaponSpecialization.jpg";

//Spec3 Images

import CleverTraps from "../images/talents/Hunter/Progression/spec3/CleverTraps.jpg";
import ExposeWeakness from "../images/talents/Hunter/Progression/spec3/ExposeWeakness.jpg";
import KillerInstinct from "../images/talents/Hunter/Progression/spec3/KillerInstinct.jpg";
import Resourcefulness from "../images/talents/Hunter/Progression/spec3/Resourcefulness.jpg";
import ThrillOfTheHunt from "../images/talents/Hunter/Progression/spec3/ThrillOfTheHunt.jpg";
import Counterattack from "../images/talents/Hunter/Progression/spec3/Counterattack.jpg";
import HawkEye from "../images/talents/Hunter/Progression/spec3/HawkEye.jpg";
import LightningReflexes from "../images/talents/Hunter/Progression/spec3/LightningReflexes.jpg";
import SavageStrikes from "../images/talents/Hunter/Progression/spec3/SavageStrikes.jpg";
import TrapMastery from "../images/talents/Hunter/Progression/spec3/TrapMastery.jpg";
import Deflection from "../images/talents/Hunter/Progression/spec3/Deflection.jpg";
import HumanoidSlaying from "../images/talents/Hunter/Progression/spec3/HumanoidSlaying.jpg";
import MasterTactician from "../images/talents/Hunter/Progression/spec3/MasterTactician.jpg";
import Surefooted from "../images/talents/Hunter/Progression/spec3/Surefooted.jpg";
import WyvernSting from "../images/talents/Hunter/Progression/spec3/WyvernSting.jpg";
import Deterrence from "../images/talents/Hunter/Progression/spec3/Deterrence.jpg";
import ImprovedFeignDeath from "../images/talents/Hunter/Progression/spec3/ImprovedFeignDeath.jpg";
import MonsterSlaying from "../images/talents/Hunter/Progression/spec3/MonsterSlaying.jpg";
import SurvivalInstincts from "../images/talents/Hunter/Progression/spec3/SurvivalInstincts.jpg";
import Entrapment from "../images/talents/Hunter/Progression/spec3/Entrapment.jpg";
import ImprovedWingClip from "../images/talents/Hunter/Progression/spec3/ImprovedWingClip.jpg";
import Readiness from "../images/talents/Hunter/Progression/spec3/Readiness.jpg";
import Survivalist from "../images/talents/Hunter/Progression/spec3/Survivalist.jpg";

let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class HunterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rebuildToolTip() {
    ReactTooltip.rebuild();
  }

  rebuildToolTipOnClick() {}

  toolTipFunction() {
    let toolTipChecker;
    let toolTipIDChecker;
    let toolTipSelector;
    let toolTipStepper;

    // Get the element with the tooltip
    toolTipChecker = window.event.target.nextElementSibling.nextElementSibling;
    // Get the same element as before, but only the id
    toolTipIDChecker = window.event.target.id;
    // Subtract 1 from IDChecker since value in JS file starts at index[0]
    toolTipStepper = Hunter[toolTipIDChecker - 1];

    switch (toolTipChecker.innerText[2]) {
      case "1":
        switch (toolTipChecker.innerText) {
          case "0/1":
            //Assign variable the value of the first element in tooltip array
            toolTipSelector = toolTipStepper.toolTip[0];
            // Get Element by the ID and set it's tooltip to the correct element in the array
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "1/1":
            //Assign variable the value of the first element in tooltip array
            toolTipSelector = toolTipStepper.toolTip[1];
            // Get Element by the ID and set it's tooltip to the correct element in the array
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
        }

        break;
      case "2":
        switch (toolTipChecker.innerText) {
          case "0/2":
            toolTipSelector = toolTipStepper.toolTip[0];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "1/2":
            toolTipSelector = toolTipStepper.toolTip[1];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "2/2":
            toolTipSelector = toolTipStepper.toolTip[2];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
        }

        break;
      case "3":
        switch (toolTipChecker.innerText) {
          case "0/3":
            toolTipSelector = toolTipStepper.toolTip[0];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "1/3":
            toolTipSelector = toolTipStepper.toolTip[1];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "2/3":
            toolTipSelector = toolTipStepper.toolTip[2];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "3/3":
            toolTipSelector = toolTipStepper.toolTip[3];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
        }

        break;
      case "4":
        switch (toolTipChecker.innerText) {
          case "0/4":
            toolTipSelector = toolTipStepper.toolTip[0];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "1/4":
            toolTipSelector = toolTipStepper.toolTip[1];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "2/4":
            toolTipSelector = toolTipStepper.toolTip[2];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "3/4":
            toolTipSelector = toolTipStepper.toolTip[3];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "4/4":
            toolTipSelector = toolTipStepper.toolTip[4];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
        }

        break;
      case "5":
        switch (toolTipChecker.innerText) {
          case "0/5":
            toolTipSelector = toolTipStepper.toolTip[0];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "1/5":
            toolTipSelector = toolTipStepper.toolTip[1];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "2/5":
            toolTipSelector = toolTipStepper.toolTip[2];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "3/5":
            toolTipSelector = toolTipStepper.toolTip[3];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "4/5":
            toolTipSelector = toolTipStepper.toolTip[4];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
          case "5/5":
            toolTipSelector = toolTipStepper.toolTip[5];
            document
              .getElementById(toolTipIDChecker)
              .setAttribute("data-tip", toolTipSelector);

            break;
        }

        break;
      default:
        console.log("Tooltip Function failed");
    }
  }

  displayOverlayMobile() {
    window.event.target.previousElementSibling.style.display = "inline";
  }

  hideOverlayMobile() {
    window.event.target.previousElementSibling.style.display = "none";
  }

  displayMouseOverlay() {
    if (window.event.target.getElementsByTagName("img")[0]) {
      window.event.target.getElementsByTagName("img")[0].style.display =
        "inline";
    }
  }

  displayMouseOverlayInnerElement() {
    if (window.event.target.previousElementSibling) {
      window.event.target.previousElementSibling.style.display = "inline";
    }
  }

  hideMouseOverlay() {
    console.log(window.event.target.previousElementSibling);
    window.event.target.previousElementSibling.style.display = "none";
  }

  hideMouseOverlayInnerElement() {
    window.event.target.style.display = "none";
  }

  talentClick() {
    let valueString;
    let specString;
    let pointRequirementString;
    let onePointArray = ["0/1", "1/1"];
    let twoPointArray = ["0/2", "1/2", "2/2"];
    let threePointArray = ["0/3", "1/3", "2/3", "3/3"];
    let fourPointArray = ["0/4", "1/4", "2/4", "3/4", "4/4"];
    let fivePointArray = ["0/5", "1/5", "2/5", "3/5", "4/5", "5/5"];
    let individualPointTracker;
    let arrowChecker;

    let spec1Req5 = [];
    let spec1Req10 = [];
    let spec1Req15 = [];
    let spec1Req20 = [];
    let spec1Req25 = [];
    let spec1Req30 = [];
    let spec1Req35 = [];
    let spec1Req40 = [];

    let spec1Req5Output = [];
    let spec1Req10Output = [];
    let spec1Req15Output = [];
    let spec1Req20Output = [];
    let spec1Req25Output = [];
    let spec1Req30Output = [];
    let spec1Req35Output = [];
    let spec1Req40Output = [];

    let spec2Req5 = [];
    let spec2Req10 = [];
    let spec2Req15 = [];
    let spec2Req20 = [];
    let spec2Req25 = [];
    let spec2Req30 = [];
    let spec2Req35 = [];
    let spec2Req40 = [];

    let spec2Req5Output = [];
    let spec2Req10Output = [];
    let spec2Req15Output = [];
    let spec2Req20Output = [];
    let spec2Req25Output = [];
    let spec2Req30Output = [];
    let spec2Req35Output = [];
    let spec2Req40Output = [];

    let spec3Req5 = [];
    let spec3Req10 = [];
    let spec3Req15 = [];
    let spec3Req20 = [];
    let spec3Req25 = [];
    let spec3Req30 = [];
    let spec3Req35 = [];
    let spec3Req40 = [];

    let spec3Req5Output = [];
    let spec3Req10Output = [];
    let spec3Req15Output = [];
    let spec3Req20Output = [];
    let spec3Req25Output = [];
    let spec3Req30Output = [];
    let spec3Req35Output = [];
    let spec3Req40Output = [];

    function addGreenBorderSpec1() {
      if (iSpec1 >= 40) {
        //Gather all elements in tree with 40 point requirement
        spec1Req40 = document.getElementsByClassName("req-40-s1");
        //Iterate through array of elements and push their previous sibling to
        //Req40Output array
        for (let g = 0; g < spec1Req40.length; g++) {
          spec1Req40Output.push(spec1Req40[g].previousElementSibling);
        }
        //Iterate through array to update their class (to update green border color)
        for (let g = 0; g < spec1Req40Output.length; g++) {
          if (
            spec1Req40Output[g].className.includes("inactive-talent") &&
            !spec1Req40Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req40Output[g].className.includes("maxeds")
          ) {
            spec1Req40Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req40Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 35) {
        spec1Req35 = document.getElementsByClassName("req-35-s1");

        for (let g = 0; g < spec1Req35.length; g++) {
          spec1Req35Output.push(spec1Req35[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req35Output.length; g++) {
          if (
            spec1Req35Output[g].className.includes("inactive-talent") &&
            !spec1Req35Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req35Output[g].className.includes("maxeds")
          ) {
            spec1Req35Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req35Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 30) {
        spec1Req30 = document.getElementsByClassName("req-30-s1");

        for (let g = 0; g < spec1Req30.length; g++) {
          spec1Req30Output.push(spec1Req30[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req30Output.length; g++) {
          if (
            spec1Req30Output[g].className.includes("inactive-talent") &&
            !spec1Req30Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req30Output[g].className.includes("maxeds")
          ) {
            spec1Req30Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req30Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 25) {
        spec1Req25 = document.getElementsByClassName("req-25-s1");

        for (let g = 0; g < spec1Req25.length; g++) {
          spec1Req25Output.push(spec1Req25[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req25Output.length; g++) {
          if (
            spec1Req25Output[g].className.includes("inactive-talent") &&
            !spec1Req25Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req25Output[g].className.includes("maxeds")
          ) {
            spec1Req25Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req25Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 20) {
        spec1Req20 = document.getElementsByClassName("req-20-s1");

        for (let g = 0; g < spec1Req20.length; g++) {
          spec1Req20Output.push(spec1Req20[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req20Output.length; g++) {
          if (
            spec1Req20Output[g].className.includes("inactive-talent") &&
            !spec1Req20Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req20Output[g].className.includes("maxeds")
          ) {
            spec1Req20Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req20Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 15) {
        spec1Req15 = document.getElementsByClassName("req-15-s1");

        for (let g = 0; g < spec1Req15.length; g++) {
          spec1Req15Output.push(spec1Req15[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req15Output.length; g++) {
          if (
            spec1Req15Output[g].className.includes("inactive-talent") &&
            !spec1Req15Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req15Output[g].className.includes("maxeds")
          ) {
            spec1Req15Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req15Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 10) {
        spec1Req10 = document.getElementsByClassName("req-10-s1");

        for (let g = 0; g < spec1Req10.length; g++) {
          spec1Req10Output.push(spec1Req10[g].previousElementSibling);
        }

        for (let g = 0; g < spec1Req10Output.length; g++) {
          if (
            spec1Req10Output[g].className.includes("inactive-talent") &&
            !spec1Req10Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req10Output[g].className.includes("maxeds")
          ) {
            spec1Req10Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req10Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }

      if (iSpec1 >= 5) {
        spec1Req5 = document.getElementsByClassName("req-05-s1");

        for (let g = 0; g < spec1Req5.length; g++) {
          spec1Req5Output.push(spec1Req5[g].previousElementSibling);
        }
        console.log(spec1Req5Output);
        for (let g = 0; g < spec1Req5Output.length; g++) {
          if (
            spec1Req5Output[g].className.includes("inactive-talent") &&
            !spec1Req5Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec1Req5Output[g].className.includes("maxeds")
          ) {
            spec1Req5Output[g].className =
              "spec1 talentButton active-talent req-active";
          }

          if (spec1Req5Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec1();
          }
        }
      }
    }

    function addGreenBorderSpec2() {
      if (iSpec2 >= 40) {
        //Gather all elements in tree with 40 point requirement
        spec2Req40 = document.getElementsByClassName("req-40-s2");
        //Iterate through array of elements and push their previous sibling to
        //Req40Output array
        for (let g = 0; g < spec2Req40.length; g++) {
          spec2Req40Output.push(spec2Req40[g].previousElementSibling);
        }
        //Iterate through array to update their class (to update green border color)
        for (let g = 0; g < spec2Req40Output.length; g++) {
          if (
            spec2Req40Output[g].className.includes("inactive-talent") &&
            !spec2Req40Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req40Output[g].className.includes("maxeds")
          ) {
            spec2Req40Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req40Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 35) {
        spec2Req35 = document.getElementsByClassName("req-35-s2");

        for (let g = 0; g < spec2Req35.length; g++) {
          spec2Req35Output.push(spec2Req35[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req35Output.length; g++) {
          if (
            spec2Req35Output[g].className.includes("inactive-talent") &&
            !spec2Req35Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req35Output[g].className.includes("maxeds")
          ) {
            spec2Req35Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req35Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 30) {
        spec2Req30 = document.getElementsByClassName("req-30-s2");

        for (let g = 0; g < spec2Req30.length; g++) {
          spec2Req30Output.push(spec2Req30[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req30Output.length; g++) {
          if (
            spec2Req30Output[g].className.includes("inactive-talent") &&
            !spec2Req30Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req30Output[g].className.includes("maxeds")
          ) {
            spec2Req30Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          /*if(spec2Req30Output[g].nextElementSibling){
            turnArrowGoldIndirectlySpec2();
          }*/
        }
      }

      if (iSpec2 >= 25) {
        spec2Req25 = document.getElementsByClassName("req-25-s2");

        for (let g = 0; g < spec2Req25.length; g++) {
          spec2Req25Output.push(spec2Req25[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req25Output.length; g++) {
          if (
            spec2Req25Output[g].className.includes("inactive-talent") &&
            !spec2Req25Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req25Output[g].className.includes("maxeds")
          ) {
            spec2Req25Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req25Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 20) {
        spec2Req20 = document.getElementsByClassName("req-20-s2");

        for (let g = 0; g < spec2Req20.length; g++) {
          spec2Req20Output.push(spec2Req20[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req20Output.length; g++) {
          if (
            spec2Req20Output[g].className.includes("inactive-talent") &&
            !spec2Req20Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req20Output[g].className.includes("maxeds")
          ) {
            spec2Req20Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req20Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 15) {
        spec2Req15 = document.getElementsByClassName("req-15-s2");

        for (let g = 0; g < spec2Req15.length; g++) {
          spec2Req15Output.push(spec2Req15[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req15Output.length; g++) {
          if (
            spec2Req15Output[g].className.includes("inactive-talent") &&
            !spec2Req15Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req15Output[g].className.includes("maxeds")
          ) {
            spec2Req15Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req15Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 10) {
        spec2Req10 = document.getElementsByClassName("req-10-s2");

        for (let g = 0; g < spec2Req10.length; g++) {
          spec2Req10Output.push(spec2Req10[g].previousElementSibling);
        }

        for (let g = 0; g < spec2Req10Output.length; g++) {
          if (
            spec2Req10Output[g].className.includes("inactive-talent") &&
            !spec2Req10Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req10Output[g].className.includes("maxeds")
          ) {
            spec2Req10Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req10Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }

      if (iSpec2 >= 5) {
        spec2Req5 = document.getElementsByClassName("req-05-s2");

        for (let g = 0; g < spec2Req5.length; g++) {
          spec2Req5Output.push(spec2Req5[g].previousElementSibling);
        }
        console.log(spec2Req5Output);
        for (let g = 0; g < spec2Req5Output.length; g++) {
          if (
            spec2Req5Output[g].className.includes("inactive-talent") &&
            !spec2Req5Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec2Req5Output[g].className.includes("maxeds")
          ) {
            spec2Req5Output[g].className =
              "spec2 talentButton active-talent req-active";
          }
          if (spec2Req5Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec2();
          }
        }
      }
    }

    function addGreenBorderSpec3() {
      if (iSpec3 >= 40) {
        //Gather all elements in tree with 40 point requirement
        spec3Req40 = document.getElementsByClassName("req-40-s3");
        //Iterate through array of elements and push their previous sibling to
        //Req40Output array
        for (let g = 0; g < spec3Req40.length; g++) {
          spec3Req40Output.push(spec3Req40[g].previousElementSibling);
        }
        //Iterate through array to update their class (to update green border color)
        for (let g = 0; g < spec3Req40Output.length; g++) {
          if (
            spec3Req40Output[g].className.includes("inactive-talent") &&
            !spec3Req40Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req40Output[g].className.includes("maxeds")
          ) {
            spec3Req40Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req40Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 35) {
        spec3Req35 = document.getElementsByClassName("req-35-s3");

        for (let g = 0; g < spec3Req35.length; g++) {
          spec3Req35Output.push(spec3Req35[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req35Output.length; g++) {
          if (
            spec3Req35Output[g].className.includes("inactive-talent") &&
            !spec3Req35Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req35Output[g].className.includes("maxeds")
          ) {
            spec3Req35Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req35Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 30) {
        spec3Req30 = document.getElementsByClassName("req-30-s3");

        for (let g = 0; g < spec3Req30.length; g++) {
          spec3Req30Output.push(spec3Req30[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req30Output.length; g++) {
          if (
            spec3Req30Output[g].className.includes("inactive-talent") &&
            !spec3Req30Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req30Output[g].className.includes("maxeds")
          ) {
            spec3Req30Output[g].className =
              "spec3 talentButton active-talent req-active";
          }
          if (spec3Req30Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 25) {
        spec3Req25 = document.getElementsByClassName("req-25-s3");

        for (let g = 0; g < spec3Req25.length; g++) {
          spec3Req25Output.push(spec3Req25[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req25Output.length; g++) {
          if (
            spec3Req25Output[g].className.includes("inactive-talent") &&
            !spec3Req25Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req25Output[g].className.includes("maxeds")
          ) {
            spec3Req25Output[g].className =
              "spec3 talentButton active-talent req-active";
          }
          if (spec3Req25Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 20) {
        spec3Req20 = document.getElementsByClassName("req-20-s3");

        for (let g = 0; g < spec3Req20.length; g++) {
          spec3Req20Output.push(spec3Req20[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req20Output.length; g++) {
          if (
            spec3Req20Output[g].className.includes("inactive-talent") &&
            !spec3Req20Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req20Output[g].className.includes("maxeds")
          ) {
            spec3Req20Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req20Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 15) {
        spec3Req15 = document.getElementsByClassName("req-15-s3");

        for (let g = 0; g < spec3Req15.length; g++) {
          spec3Req15Output.push(spec3Req15[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req15Output.length; g++) {
          if (
            spec3Req15Output[g].className.includes("inactive-talent") &&
            !spec3Req15Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req15Output[g].className.includes("maxeds")
          ) {
            spec3Req15Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req15Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 10) {
        spec3Req10 = document.getElementsByClassName("req-10-s3");

        for (let g = 0; g < spec3Req10.length; g++) {
          spec3Req10Output.push(spec3Req10[g].previousElementSibling);
        }

        for (let g = 0; g < spec3Req10Output.length; g++) {
          if (
            spec3Req10Output[g].className.includes("inactive-talent") &&
            !spec3Req10Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req10Output[g].className.includes("maxeds")
          ) {
            spec3Req10Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req10Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }

      if (iSpec3 >= 5) {
        spec3Req5 = document.getElementsByClassName("req-05-s3");

        for (let g = 0; g < spec3Req5.length; g++) {
          spec3Req5Output.push(spec3Req5[g].previousElementSibling);
        }
        console.log(spec3Req5Output);
        for (let g = 0; g < spec3Req5Output.length; g++) {
          if (
            spec3Req5Output[g].className.includes("inactive-talent") &&
            !spec3Req5Output[g].nextElementSibling.id.includes("prioReq") &&
            !spec3Req5Output[g].className.includes("maxeds")
          ) {
            spec3Req5Output[g].className =
              "spec3 talentButton active-talent req-active";
          }

          if (spec3Req5Output[g].nextElementSibling) {
            turnArrowGoldIndirectlySpec3();
          }
        }
      }
    }

    function removeGreenBorderSpec1() {
      let arrowSrc;
      let arrowSrcSize;
      let spanID;

      function idMatcherParse() {
        if (spanID.includes("prioReq1Spec1")) {
          arrowSrc = document.getElementById("arrwReq1Spec1");
        } else if (spanID.includes("prioReq2Spec1")) {
          arrowSrc = document.getElementById("arrwReq2Spec1");
        } else if (spanID.includes("prioReq3Spec1")) {
          arrowSrc = document.getElementById("arrwReq3Spec1");
        } else if (spanID.includes("prioReq4Spec1")) {
          arrowSrc = document.getElementById("arrwReq4Spec1");
        }
      }

      function arrowSizeParse() {
        if (arrowSrc.className.includes("sm")) {
          arrowSrcSize = "sm";
        } else if (arrowSrc.className.includes("med")) {
          arrowSrcSize = "med";
        } else if (arrowSrc.className.includes("lg")) {
          arrowSrcSize = "lg";
        } else if (arrowSrc.className.includes("angle")) {
          arrowSrcSize = "angle";
        } else if (arrowSrc.className.includes("left")) {
          arrowSrcSize = "left";
        } else if (arrowSrc.className.includes("right")) {
          arrowSrcSize = "right";
        }

        switch (arrowSrcSize) {
          case "sm":
            arrowSrc.src = DownSilverSmall;
            break;

          case "med":
            arrowSrc.src = DownSilverMedium;
            break;

          case "lg":
            arrowSrc.src = DownSilverLarge;
            break;

          case "angle":
            arrowSrc.src = AngleArrowSilver;
            break;

          case "left":
            arrowSrc.src = LeftSilverSmall;
            break;

          case "right":
            arrowSrc.src = RightSilverSmall;
            break;
        }
      }

      if (iSpec1 < 40) {
        spec1Req40 = document.getElementsByClassName("req-40-s1");

        for (let g = 0; g < spec1Req40.length; g++) {
          if (spec1Req40[g].id) {
            spanID = spec1Req40[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req40Output.push(spec1Req40[g].previousElementSibling);
        }
        console.log(spec1Req40Output);
        for (let g = 0; g < spec1Req40Output.length; g++) {
          if (spec1Req40Output[g].className.includes("active-talent")) {
            spec1Req40Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 35) {
        spec1Req35 = document.getElementsByClassName("req-35-s1");

        for (let g = 0; g < spec1Req35.length; g++) {
          if (spec1Req35[g].id) {
            spanID = spec1Req35[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req35Output.push(spec1Req35[g].previousElementSibling);
        }
        console.log(spec1Req35Output);
        for (let g = 0; g < spec1Req35Output.length; g++) {
          if (spec1Req35Output[g].className.includes("active-talent")) {
            spec1Req35Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 30) {
        spec1Req30 = document.getElementsByClassName("req-30-s1");

        for (let g = 0; g < spec1Req30.length; g++) {
          if (spec1Req30[g].id) {
            spanID = spec1Req30[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req30Output.push(spec1Req30[g].previousElementSibling);
        }
        console.log(spec1Req30Output);
        for (let g = 0; g < spec1Req30Output.length; g++) {
          if (spec1Req30Output[g].className.includes("active-talent")) {
            spec1Req30Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 25) {
        spec1Req25 = document.getElementsByClassName("req-25-s1");

        for (let g = 0; g < spec1Req25.length; g++) {
          if (spec1Req25[g].id) {
            spanID = spec1Req25[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req25Output.push(spec1Req25[g].previousElementSibling);
        }
        console.log(spec1Req25Output);
        for (let g = 0; g < spec1Req25Output.length; g++) {
          if (spec1Req25Output[g].className.includes("active-talent")) {
            spec1Req25Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 20) {
        spec1Req20 = document.getElementsByClassName("req-20-s1");

        for (let g = 0; g < spec1Req20.length; g++) {
          if (spec1Req20[g].id) {
            spanID = spec1Req20[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req20Output.push(spec1Req20[g].previousElementSibling);
        }
        console.log(spec1Req20Output);
        for (let g = 0; g < spec1Req20Output.length; g++) {
          if (spec1Req20Output[g].className.includes("active-talent")) {
            spec1Req20Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 15) {
        spec1Req15 = document.getElementsByClassName("req-15-s1");

        for (let g = 0; g < spec1Req15.length; g++) {
          if (spec1Req15[g].id) {
            spanID = spec1Req15[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req15Output.push(spec1Req15[g].previousElementSibling);
        }
        console.log(spec1Req15Output);
        for (let g = 0; g < spec1Req15Output.length; g++) {
          if (spec1Req15Output[g].className.includes("active-talent")) {
            spec1Req15Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 10) {
        spec1Req10 = document.getElementsByClassName("req-10-s1");

        for (let g = 0; g < spec1Req10.length; g++) {
          if (spec1Req10[g].id) {
            spanID = spec1Req10[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req10Output.push(spec1Req10[g].previousElementSibling);
        }
        console.log(spec1Req10Output);
        for (let g = 0; g < spec1Req10Output.length; g++) {
          if (spec1Req10Output[g].className.includes("active-talent")) {
            spec1Req10Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec1 < 5) {
        spec1Req5 = document.getElementsByClassName("req-05-s1");

        for (let g = 0; g < spec1Req5.length; g++) {
          if (spec1Req5[g].id) {
            spanID = spec1Req5[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req5Output.push(spec1Req5[g].previousElementSibling);
        }
        console.log(spec1Req5Output);
        for (let g = 0; g < spec1Req5Output.length; g++) {
          if (spec1Req5Output[g].className.includes("active-talent")) {
            spec1Req5Output[g].className =
              "spec1 talentButton inactive-talent req-inactive";
          }
        }
      }
    }

    function removeGreenBorderSpec2() {
      let arrowSrc;
      let arrowSrcSize;
      let spanID;

      function idMatcherParse() {
        if (spanID.includes("prioReq1Spec2")) {
          arrowSrc = document.getElementById("arrwReq1Spec2");
        } else if (spanID.includes("prioReq2Spec2")) {
          arrowSrc = document.getElementById("arrwReq2Spec2");
        } else if (spanID.includes("prioReq3Spec2")) {
          arrowSrc = document.getElementById("arrwReq3Spec2");
        } else if (spanID.includes("prioReq4Spec2")) {
          arrowSrc = document.getElementById("arrwReq4Spec2");
        }
      }

      function arrowSizeParse() {
        if (arrowSrc.className.includes("sm")) {
          arrowSrcSize = "sm";
        } else if (arrowSrc.className.includes("med")) {
          arrowSrcSize = "med";
        } else if (arrowSrc.className.includes("lg")) {
          arrowSrcSize = "lg";
        } else if (arrowSrc.className.includes("angle")) {
          arrowSrcSize = "angle";
        } else if (arrowSrc.className.includes("left")) {
          arrowSrcSize = "left";
        } else if (arrowSrc.className.includes("right")) {
          arrowSrcSize = "right";
        }

        switch (arrowSrcSize) {
          case "sm":
            arrowSrc.src = DownSilverSmall;
            break;

          case "med":
            arrowSrc.src = DownSilverMedium;
            break;

          case "lg":
            arrowSrc.src = DownSilverLarge;
            break;

          case "angle":
            arrowSrc.src = AngleArrowSilver;
            break;

          case "left":
            arrowSrc.src = LeftSilverSmall;
            break;

          case "right":
            arrowSrc.src = RightSilverSmall;
            break;
        }
      }

      if (iSpec2 < 40) {
        spec2Req40 = document.getElementsByClassName("req-40-s2");

        for (let g = 0; g < spec2Req40.length; g++) {
          if (spec2Req40[g].id) {
            spanID = spec2Req40[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req40Output.push(spec2Req40[g].previousElementSibling);
        }
        console.log(spec2Req40Output);
        for (let g = 0; g < spec2Req40Output.length; g++) {
          if (spec2Req40Output[g].className.includes("active-talent")) {
            spec2Req40Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 35) {
        spec2Req35 = document.getElementsByClassName("req-35-s2");

        for (let g = 0; g < spec2Req35.length; g++) {
          if (spec2Req35[g].id) {
            spanID = spec2Req35[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req35Output.push(spec2Req35[g].previousElementSibling);
        }
        console.log(spec2Req35Output);
        for (let g = 0; g < spec2Req35Output.length; g++) {
          if (spec2Req35Output[g].className.includes("active-talent")) {
            spec2Req35Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 30) {
        spec2Req30 = document.getElementsByClassName("req-30-s2");

        for (let g = 0; g < spec2Req30.length; g++) {
          if (spec2Req30[g].id) {
            spanID = spec2Req30[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req30Output.push(spec2Req30[g].previousElementSibling);
        }
        console.log(spec2Req30Output);
        for (let g = 0; g < spec2Req30Output.length; g++) {
          if (spec2Req30Output[g].className.includes("active-talent")) {
            spec2Req30Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 25) {
        spec2Req25 = document.getElementsByClassName("req-25-s2");

        for (let g = 0; g < spec2Req25.length; g++) {
          if (spec2Req25[g].id) {
            spanID = spec2Req25[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req25Output.push(spec2Req25[g].previousElementSibling);
        }
        console.log(spec2Req25Output);
        for (let g = 0; g < spec2Req25Output.length; g++) {
          if (spec2Req25Output[g].className.includes("active-talent")) {
            spec2Req25Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 20) {
        spec2Req20 = document.getElementsByClassName("req-20-s2");

        for (let g = 0; g < spec2Req20.length; g++) {
          if (spec2Req20[g].id) {
            spanID = spec2Req20[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req20Output.push(spec2Req20[g].previousElementSibling);
        }
        console.log(spec2Req20Output);
        for (let g = 0; g < spec2Req20Output.length; g++) {
          if (spec2Req20Output[g].className.includes("active-talent")) {
            spec2Req20Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 15) {
        spec2Req15 = document.getElementsByClassName("req-15-s2");

        for (let g = 0; g < spec2Req15.length; g++) {
          if (spec2Req15[g].id) {
            spanID = spec2Req15[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req15Output.push(spec2Req15[g].previousElementSibling);
        }
        console.log(spec2Req15Output);
        for (let g = 0; g < spec2Req15Output.length; g++) {
          if (spec2Req15Output[g].className.includes("active-talent")) {
            spec2Req15Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 10) {
        spec2Req10 = document.getElementsByClassName("req-10-s2");

        for (let g = 0; g < spec2Req10.length; g++) {
          if (spec2Req10[g].id) {
            spanID = spec2Req10[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req10Output.push(spec2Req10[g].previousElementSibling);
        }
        console.log(spec2Req10Output);
        for (let g = 0; g < spec2Req10Output.length; g++) {
          if (spec2Req10Output[g].className.includes("active-talent")) {
            spec2Req10Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec2 < 5) {
        spec2Req5 = document.getElementsByClassName("req-05-s2");

        for (let g = 0; g < spec2Req5.length; g++) {
          if (spec2Req5[g].id) {
            spanID = spec2Req5[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req5Output.push(spec2Req5[g].previousElementSibling);
        }
        console.log(spec2Req5Output);
        for (let g = 0; g < spec2Req5Output.length; g++) {
          if (spec2Req5Output[g].className.includes("active-talent")) {
            spec2Req5Output[g].className =
              "spec2 talentButton inactive-talent req-inactive";
          }
        }
      }
    }

    function removeGreenBorderSpec3() {
      let arrowSrc;
      let arrowSrcSize;
      let spanID;

      function idMatcherParse() {
        if (spanID.includes("prioReq1Spec3")) {
          arrowSrc = document.getElementById("arrwReq1Spec3");
        } else if (spanID.includes("prioReq2Spec3")) {
          arrowSrc = document.getElementById("arrwReq2Spec3");
        } else if (spanID.includes("prioReq3Spec3")) {
          arrowSrc = document.getElementById("arrwReq3Spec3");
        } else if (spanID.includes("prioReq4Spec3")) {
          arrowSrc = document.getElementById("arrwReq4Spec3");
        }
      }

      function arrowSizeParse() {
        if (arrowSrc.className.includes("sm")) {
          arrowSrcSize = "sm";
        } else if (arrowSrc.className.includes("med")) {
          arrowSrcSize = "med";
        } else if (arrowSrc.className.includes("lg")) {
          arrowSrcSize = "lg";
        } else if (arrowSrc.className.includes("angle")) {
          arrowSrcSize = "angle";
        } else if (arrowSrc.className.includes("left")) {
          arrowSrcSize = "left";
        } else if (arrowSrc.className.includes("right")) {
          arrowSrcSize = "right";
        }

        switch (arrowSrcSize) {
          case "sm":
            arrowSrc.src = DownSilverSmall;
            break;

          case "med":
            arrowSrc.src = DownSilverMedium;
            break;

          case "lg":
            arrowSrc.src = DownSilverLarge;
            break;

          case "angle":
            arrowSrc.src = AngleArrowSilver;
            break;

          case "left":
            arrowSrc.src = LeftSilverSmall;
            break;

          case "right":
            arrowSrc.src = RightSilverSmall;
            break;
        }
      }

      if (iSpec3 < 40) {
        spec3Req40 = document.getElementsByClassName("req-40-s3");

        for (let g = 0; g < spec3Req40.length; g++) {
          if (spec3Req40[g].id) {
            spanID = spec3Req40[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req40Output.push(spec3Req40[g].previousElementSibling);
        }
        console.log(spec3Req40Output);
        for (let g = 0; g < spec3Req40Output.length; g++) {
          if (spec3Req40Output[g].className.includes("active-talent")) {
            spec3Req40Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 35) {
        spec3Req35 = document.getElementsByClassName("req-35-s3");

        for (let g = 0; g < spec3Req35.length; g++) {
          if (spec3Req35[g].id) {
            spanID = spec3Req35[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req35Output.push(spec3Req35[g].previousElementSibling);
        }
        console.log(spec3Req35Output);
        for (let g = 0; g < spec3Req35Output.length; g++) {
          if (spec3Req35Output[g].className.includes("active-talent")) {
            spec3Req35Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 30) {
        spec3Req30 = document.getElementsByClassName("req-30-s3");

        for (let g = 0; g < spec3Req30.length; g++) {
          if (spec3Req30[g].id) {
            spanID = spec3Req30[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req30Output.push(spec3Req30[g].previousElementSibling);
        }
        console.log(spec3Req30Output);
        for (let g = 0; g < spec3Req30Output.length; g++) {
          if (spec3Req30Output[g].className.includes("active-talent")) {
            spec3Req30Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 25) {
        spec3Req25 = document.getElementsByClassName("req-25-s3");

        for (let g = 0; g < spec3Req25.length; g++) {
          if (spec3Req25[g].id) {
            spanID = spec3Req25[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req25Output.push(spec3Req25[g].previousElementSibling);
        }
        console.log(spec3Req25Output);
        for (let g = 0; g < spec3Req25Output.length; g++) {
          if (spec3Req25Output[g].className.includes("active-talent")) {
            spec3Req25Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 20) {
        spec3Req20 = document.getElementsByClassName("req-20-s3");

        for (let g = 0; g < spec3Req20.length; g++) {
          if (spec3Req20[g].id) {
            spanID = spec3Req20[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req20Output.push(spec3Req20[g].previousElementSibling);
        }
        console.log(spec3Req20Output);
        for (let g = 0; g < spec3Req20Output.length; g++) {
          if (spec3Req20Output[g].className.includes("active-talent")) {
            spec3Req20Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 15) {
        spec3Req15 = document.getElementsByClassName("req-15-s3");

        for (let g = 0; g < spec3Req15.length; g++) {
          if (spec3Req15[g].id) {
            spanID = spec3Req15[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req15Output.push(spec3Req15[g].previousElementSibling);
        }
        console.log(spec3Req15Output);
        for (let g = 0; g < spec3Req15Output.length; g++) {
          if (spec3Req15Output[g].className.includes("active-talent")) {
            spec3Req15Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 10) {
        spec3Req10 = document.getElementsByClassName("req-10-s3");

        for (let g = 0; g < spec3Req10.length; g++) {
          if (spec3Req10[g].id) {
            spanID = spec3Req10[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req10Output.push(spec3Req10[g].previousElementSibling);
        }
        console.log(spec3Req10Output);
        for (let g = 0; g < spec3Req10Output.length; g++) {
          if (spec3Req10Output[g].className.includes("active-talent")) {
            spec3Req10Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }

      if (iSpec3 < 5) {
        spec3Req5 = document.getElementsByClassName("req-05-s3");

        for (let g = 0; g < spec3Req5.length; g++) {
          if (spec3Req5[g].id) {
            spanID = spec3Req5[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec3Req5Output.push(spec3Req5[g].previousElementSibling);
        }
        console.log(spec3Req5Output);
        for (let g = 0; g < spec3Req5Output.length; g++) {
          if (spec3Req5Output[g].className.includes("active-talent")) {
            spec3Req5Output[g].className =
              "spec3 talentButton inactive-talent req-inactive";
          }
        }
      }
    }

    function addYellowBorder() {
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[0] ===
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[2]
      ) {
        if (specString[4] === "1") {
          window.event.srcElement.nextElementSibling.className =
            "spec1 talentButton maxeds req-active";
        }
        if (specString[4] === "2") {
          window.event.srcElement.nextElementSibling.className =
            "spec2 talentButton maxeds req-active";
        }
        if (specString[4] === "3") {
          window.event.srcElement.nextElementSibling.className =
            "spec3 talentButton maxeds req-active";
        }
      }
    }

    function removeYellowBorderSpec1() {
      window.event.srcElement.nextElementSibling.className =
        "spec1 talentButton active-talent req-active";
    }

    function removeYellowBorderSpec2() {
      window.event.srcElement.nextElementSibling.className =
        "spec2 talentButton active-talent req-active";
    }

    function removeYellowBorderSpec3() {
      window.event.srcElement.nextElementSibling.className =
        "spec3 talentButton active-talent req-active";
    }

    function turnArrowSilverSpec1() {
      let pointValidation;
      if (iSpec1 >= 40) {
        pointValidation = 40;
      } else if (iSpec1 >= 35) {
        pointValidation = 35;
      } else if (iSpec1 >= 30) {
        pointValidation = 30;
      } else if (iSpec1 >= 25) {
        pointValidation = 25;
      } else if (iSpec1 >= 20) {
        pointValidation = 20;
      } else if (iSpec1 >= 15) {
        pointValidation = 15;
      } else if (iSpec1 >= 10) {
        pointValidation = 10;
      } else if (iSpec1 >= 5) {
        pointValidation = 5;
      }

      switch (pointValidation) {
        case 40:
          break;

        case 35:
          break;

        case 30:
          break;

        case 25:
          break;

        case 20:
          break;

        case 15:
          break;

        case 10:
          break;

        case 5:
          break;

        default:
          break;
      }
    }

    function turnArrowGoldOnClick() {
      function ArrowGold() {
        if (arrowChecker.includes("angle")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            AngleArrowGold;
        }
        if (arrowChecker.includes("left")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            LeftGoldSmall;
        }
        if (arrowChecker.includes("right")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            RightGoldSmall;
        }
        if (arrowChecker.includes("sm")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            DownGoldSmall;
        }
        if (arrowChecker.includes("med")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            DownGoldMedium;
        }
        if (arrowChecker.includes("lg")) {
          window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
            DownGoldLarge;
        }
      }

      if (
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[0] ===
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[2]
      ) {
        if (
          window.event.srcElement.nextElementSibling.nextElementSibling
            .nextElementSibling
        ) {
          arrowChecker =
            window.event.srcElement.nextElementSibling.nextElementSibling
              .nextElementSibling.className;
          console.log("arrowChecker is: ");
          console.log(arrowChecker);

          console.log(
            window.event.srcElement.nextElementSibling.nextElementSibling.id
          );
          //////////////////////////////////////////////////////////////////////////////////////////////
          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq1Spec1"
            ) &&
            document
              .querySelector('[id*="prioReq1Spec1"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq1Spec1"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec1 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq2Spec1"
            ) &&
            document
              .querySelector('[id*="prioReq2Spec1"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq2Spec1"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec1 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq3Spec1"
            ) &&
            document
              .querySelector('[id*="prioReq3Spec1"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq3Spec1"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec1 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq4Spec1"
            ) &&
            document
              .querySelector('[id*="prioReq4Spec1"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq4Spec1"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s1");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec1 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec1"]'
                    ).previousElementSibling.className =
                      "spec1 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq1Spec2"
            ) &&
            document
              .querySelector('[id*="prioReq1Spec2"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq1Spec2"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec2 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq2Spec2"
            ) &&
            document
              .querySelector('[id*="prioReq2Spec2"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq2Spec2"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec2 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq3Spec2"
            ) &&
            document
              .querySelector('[id*="prioReq3Spec2"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq3Spec2"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec2 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq4Spec2"
            ) &&
            document
              .querySelector('[id*="prioReq4Spec2"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq4Spec2"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s2");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec2 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec2"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq1Spec3"
            ) &&
            document
              .querySelector('[id*="prioReq1Spec3"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq1Spec3"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec3 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq1Spec3"]'
                    ).previousElementSibling.className =
                      "spec3 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq2Spec3"
            ) &&
            document
              .querySelector('[id*="prioReq2Spec3"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq2Spec3"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec3 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq2Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq3Spec3"
            ) &&
            document
              .querySelector('[id*="prioReq3Spec3"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq3Spec3"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec3 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq3Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }

          //////////////////////////////////////////////////////////////////////////////////////////////

          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
              "subsReq4Spec3"
            ) &&
            document
              .querySelector('[id*="prioReq4Spec3"]')
              .previousElementSibling.className.includes("req-inactive")
          ) {
            let buttonsArray = [];
            let button;
            let newStr = document.querySelector(
              '[id*="prioReq4Spec3"]'
            ).className;
            let altStr = newStr.match(/\d+/g)[0];
            console.log(altStr);

            switch (altStr) {
              case "05":
                buttonsArray = document.getElementsByClassName("req-05-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }

                break;
              case "10":
                buttonsArray = document.getElementsByClassName("req-10-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "15":
                buttonsArray = document.getElementsByClassName("req-15-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "20":
                buttonsArray = document.getElementsByClassName("req-20-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "25":
                buttonsArray = document.getElementsByClassName("req-25-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "30":
                buttonsArray = document.getElementsByClassName("req-30-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "35":
                buttonsArray = document.getElementsByClassName("req-35-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    )
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
              case "40":
                buttonsArray = document.getElementsByClassName("req-40-s3");
                for (button of buttonsArray) {
                  console.log(button.previousElementSibling);
                  if (
                    button.previousElementSibling.className.includes(
                      "req-active"
                    ) ||
                    iSpec3 >= 40
                  ) {
                    document.querySelector(
                      '[id*="prioReq4Spec3"]'
                    ).previousElementSibling.className =
                      "spec2 talentButton active-talent req-active";
                    ArrowGold();
                    {
                      break;
                    }
                  }
                }
                break;
            }
          }
        }
      }
    }
    //If Arrow should turn gold because iSpec1/2/3 is high enough, but
    //element clicked wasnt the arrow connected to arrow
    function turnArrowGoldIndirectlySpec1() {
      console.log("Arrow Gold Indirectly");
      console.log(
        window.event.srcElement.nextElementSibling.nextElementSibling
      );
      //counter variable
      let g;
      //This variable determines which if statement we enter
      let reqVariable;

      if (iSpec1 >= 40) {
        reqVariable = 40;
      } else if (iSpec1 >= 35) {
        reqVariable = 35;
      } else if (iSpec1 >= 30) {
        reqVariable = 30;
      } else if (iSpec1 >= 25) {
        reqVariable = 25;
      } else if (iSpec1 >= 20) {
        reqVariable = 20;
      } else if (iSpec1 >= 15) {
        reqVariable = 15;
      } else if (iSpec1 >= 10) {
        reqVariable = 10;
      } else if (iSpec1 >= 5) {
        reqVariable = 5;
      }

      console.log(`Yo the Reqvariable is here! ${reqVariable}`);

      //Commenting reqVariable = 5 case only
      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 5) {
        //iterate through elements with this class name
        for (
          g = 0;
          g < document.getElementsByClassName("req-5-s1").length;
          g++
        ) {
          if (spec1Req5Output[g].nextElementSibling) {
            //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
            if (
              spec1Req5Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              //applying this class name enables the button and gives green border
              if (!spec1Req5Output[g].className.includes("maxeds")) {
                spec1Req5Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");
              //switch determines class name of arrow, and replaces it with gold equivalent
              switch (arrow.className) {
                case "angleArrow":
                  arrow.src = AngleArrowGold;
                  break;
                case "leftArrow":
                  arrow.src = LeftGoldSmall;
                  break;
                case "rightArrow":
                  arrow.src = RightGoldSmall;
                  break;
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;
                case "lgArrowPaladin":
                  arrow.src = DownGoldLarge;
                  break;
                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req5Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req5Output[g].className.includes("maxeds")) {
                spec1Req5Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req5Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req5Output[g].className.includes("maxeds")) {
                spec1Req5Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req5Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req5Output[g].className.includes("maxeds")) {
                spec1Req5Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 10) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-10-s1").length;
          g++
        ) {
          if (spec1Req10Output[g].nextElementSibling) {
            if (
              spec1Req10Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req10Output[g].className.includes("maxeds")) {
                spec1Req10Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req10Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req10Output[g].className.includes("maxeds")) {
                spec1Req10Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req10Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req10Output[g].className.includes("maxeds")) {
                spec1Req10Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req10Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req10Output[g].className.includes("maxeds")) {
                spec1Req10Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 15) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-15-s1").length;
          g++
        ) {
          if (spec1Req15Output[g].nextElementSibling) {
            if (
              spec1Req15Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req15Output[g].className.includes("maxeds")) {
                spec1Req15Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req15Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req15Output[g].className.includes("maxeds")) {
                spec1Req15Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req15Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req15Output[g].className.includes("maxeds")) {
                spec1Req15Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req15Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req15Output[g].className.includes("maxeds")) {
                spec1Req15Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 20) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-20-s1").length;
          g++
        ) {
          if (spec1Req20Output[g].nextElementSibling) {
            if (
              spec1Req20Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req20Output[g].className.includes("maxeds")) {
                spec1Req20Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req20Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req20Output[g].className.includes("maxeds")) {
                spec1Req20Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req20Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req20Output[g].className.includes("maxeds")) {
                spec1Req20Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req20Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req20Output[g].className.includes("maxeds")) {
                spec1Req20Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 25) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-25-s1").length;
          g++
        ) {
          if (spec1Req25Output[g].nextElementSibling) {
            if (
              spec1Req25Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req25Output[g].className.includes("maxeds")) {
                spec1Req25Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req25Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req25Output[g].className.includes("maxeds")) {
                spec1Req25Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req25Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req25Output[g].className.includes("maxeds")) {
                spec1Req25Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req25Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req25Output[g].className.includes("maxeds")) {
                spec1Req25Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 30) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-30-s1").length;
          g++
        ) {
          if (spec1Req30Output[g].nextElementSibling) {
            if (
              spec1Req30Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req30Output[g].className.includes("maxeds")) {
                spec1Req30Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req30Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req30Output[g].className.includes("maxeds")) {
                spec1Req30Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req30Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req30Output[g].className.includes("maxeds")) {
                spec1Req30Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req30Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req30Output[g].className.includes("maxeds")) {
                spec1Req30Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 35) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-35-s1").length;
          g++
        ) {
          if (spec1Req35Output[g].nextElementSibling) {
            if (
              spec1Req35Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req35Output[g].className.includes("maxeds")) {
                spec1Req35Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req35Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req35Output[g].className.includes("maxeds")) {
                spec1Req35Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req35Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold 35");
              if (!spec1Req35Output[g].className.includes("maxeds")) {
                spec1Req35Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req35Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req35Output[g].className.includes("maxeds")) {
                spec1Req35Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 40) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-40-s1").length;
          g++
        ) {
          if (spec1Req40Output[g].nextElementSibling) {
            if (
              spec1Req40Output[g].nextElementSibling.id.includes(
                "prioReq1Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req40Output[g].className.includes("maxeds")) {
                spec1Req40Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req40Output[g].nextElementSibling.id.includes(
                "prioReq2Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req40Output[g].className.includes("maxeds")) {
                spec1Req40Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec1Req40Output[g].nextElementSibling.id.includes(
                "prioReq3Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req40Output[g].className.includes("maxeds")) {
                spec1Req40Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec1Req40Output[g].nextElementSibling.id.includes(
                "prioReq4Spec1"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec1"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec1Req40Output[g].className.includes("maxeds")) {
                spec1Req40Output[g].className =
                  "spec1 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec1");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }
    }

    function turnArrowGoldIndirectlySpec2() {
      console.log("Arrow Gold Indirectly");
      console.log(
        window.event.srcElement.nextElementSibling.nextElementSibling
      );
      //counter variable
      let g;
      //This variable determines which if statement we enter
      let reqVariable;

      if (iSpec2 >= 40) {
        reqVariable = 40;
      } else if (iSpec2 >= 35) {
        reqVariable = 35;
      } else if (iSpec2 >= 30) {
        reqVariable = 30;
      } else if (iSpec2 >= 25) {
        reqVariable = 25;
      } else if (iSpec2 >= 20) {
        reqVariable = 20;
      } else if (iSpec2 >= 15) {
        reqVariable = 15;
      } else if (iSpec2 >= 10) {
        reqVariable = 10;
      } else if (iSpec2 >= 5) {
        reqVariable = 5;
      }

      //Commenting reqVariable = 5 case only
      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 5) {
        //iterate through elements with this class name
        for (
          g = 0;
          g < document.getElementsByClassName("req-5-s2").length;
          g++
        ) {
          if (spec2Req5Output[g].nextElementSibling) {
            //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
            if (
              spec2Req5Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              //applying this class name enables the button and gives green border
              if (!spec2Req5Output[g].className.includes("maxeds")) {
                spec2Req5Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");
              //switch determines class name of arrow, and replaces it with gold equivalent
              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req5Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req5Output[g].className.includes("maxeds")) {
                spec2Req5Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req5Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req5Output[g].className.includes("maxeds")) {
                spec2Req5Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req5Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req5Output[g].className.includes("maxeds")) {
                spec2Req5Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 10) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-10-s2").length;
          g++
        ) {
          if (spec2Req10Output[g].nextElementSibling) {
            if (
              spec2Req10Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req10Output[g].className.includes("maxeds")) {
                spec2Req10Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req10Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req10Output[g].className.includes("maxeds")) {
                spec2Req10Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req10Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req10Output[g].className.includes("maxeds")) {
                spec2Req10Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req10Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req10Output[g].className.includes("maxeds")) {
                spec2Req10Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 15) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-15-s2").length;
          g++
        ) {
          if (spec2Req15Output[g].nextElementSibling) {
            if (
              spec2Req15Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req15Output[g].className.includes("maxeds")) {
                spec2Req15Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req15Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req15Output[g].className.includes("maxeds")) {
                spec2Req15Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req15Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req15Output[g].className.includes("maxeds")) {
                spec2Req15Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req15Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req15Output[g].className.includes("maxeds")) {
                spec2Req15Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 20) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-20-s2").length;
          g++
        ) {
          if (spec2Req20Output[g].nextElementSibling) {
            if (
              spec2Req20Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req20Output[g].className.includes("maxeds")) {
                spec2Req20Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req20Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req20Output[g].className.includes("maxeds")) {
                spec2Req20Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req20Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req20Output[g].className.includes("maxeds")) {
                spec2Req20Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req20Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req20Output[g].className.includes("maxeds")) {
                spec2Req20Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 25) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-25-s2").length;
          g++
        ) {
          if (spec2Req25Output[g].nextElementSibling) {
            if (
              spec2Req25Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req25Output[g].className.includes("maxeds")) {
                spec2Req25Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req25Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req25Output[g].className.includes("maxeds")) {
                spec2Req25Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req25Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req25Output[g].className.includes("maxeds")) {
                spec2Req25Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req25Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req25Output[g].className.includes("maxeds")) {
                spec2Req25Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 30) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-30-s2").length;
          g++
        ) {
          if (spec2Req30Output[g].nextElementSibling) {
            if (
              spec2Req30Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req30Output[g].className.includes("maxeds")) {
                spec2Req30Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }

              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req30Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");

              if (!spec2Req30Output[g].className.includes("maxeds")) {
                spec2Req30Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req30Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req30Output[g].className.includes("maxeds")) {
                spec2Req30Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req30Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req30Output[g].className.includes("maxeds")) {
                spec2Req30Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 35) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-35-s2").length;
          g++
        ) {
          if (spec2Req35Output[g].nextElementSibling) {
            if (
              spec2Req35Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req35Output[g].className.includes("maxeds")) {
                spec2Req35Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req35Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req35Output[g].className.includes("maxeds")) {
                spec2Req35Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req35Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req35Output[g].className.includes("maxeds")) {
                spec2Req35Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req35Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req35Output[g].className.includes("maxeds")) {
                spec2Req35Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 40) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-40-s2").length;
          g++
        ) {
          if (spec2Req40Output[g].nextElementSibling) {
            if (
              spec2Req40Output[g].nextElementSibling.id.includes(
                "prioReq1Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq1Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req40Output[g].className.includes("maxeds")) {
                spec2Req40Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req40Output[g].nextElementSibling.id.includes(
                "prioReq2Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq2Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req40Output[g].className.includes("maxeds")) {
                spec2Req40Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec2Req40Output[g].nextElementSibling.id.includes(
                "prioReq3Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec2Req40Output[g].className.includes("maxeds")) {
                spec2Req40Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec2Req40Output[g].nextElementSibling.id.includes(
                "prioReq4Spec2"
              ) &&
              document
                .querySelector('[id*="subsReq4Spec2"]')
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              console.log("yo yo, what's up");
              if (!spec2Req40Output[g].className.includes("maxeds")) {
                spec2Req40Output[g].className =
                  "spec2 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec2");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }
    }

    function turnArrowGoldIndirectlySpec3() {
      console.log("Arrow Gold Indirectly");
      console.log(
        window.event.srcElement.nextElementSibling.nextElementSibling
      );
      //counter variable
      let g;
      //This variable determines which if statement we enter
      let reqVariable;

      if (iSpec3 >= 40) {
        reqVariable = 40;
      } else if (iSpec3 >= 35) {
        reqVariable = 35;
      } else if (iSpec3 >= 30) {
        reqVariable = 30;
      } else if (iSpec3 >= 25) {
        reqVariable = 25;
      } else if (iSpec3 >= 20) {
        reqVariable = 20;
      } else if (iSpec3 >= 15) {
        reqVariable = 15;
      } else if (iSpec3 >= 10) {
        reqVariable = 10;
      } else if (iSpec3 >= 5) {
        reqVariable = 5;
      }

      //Commenting reqVariable = 5 case only
      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 5) {
        //iterate through elements with this class name
        for (
          g = 0;
          g < document.getElementsByClassName("req-5-s3").length;
          g++
        ) {
          if (spec2Req5Output[g].nextElementSibling) {
            //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
            if (
              spec3Req5Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              //applying this class name enables the button and gives green border
              if (!spec3Req5Output[g].className.includes("maxeds")) {
                spec3Req5Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");
              //switch determines class name of arrow, and replaces it with gold equivalent
              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req5Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req5Output[g].className.includes("maxeds")) {
                spec3Req5Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req5Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req5Output[g].className.includes("maxeds")) {
                spec3Req5Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req5Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req5Output[g].className.includes("maxeds")) {
                spec3Req5Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 10) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-10-s3").length;
          g++
        ) {
          if (spec3Req10Output[g].nextElementSibling) {
            if (
              spec3Req10Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req10Output[g].className.includes("maxeds")) {
                spec3Req10Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req10Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req10Output[g].className.includes("maxeds")) {
                spec3Req10Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req10Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req10Output[g].className.includes("maxeds")) {
                spec3Req10Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req10Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req10Output[g].className.includes("maxeds")) {
                spec3Req10Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 15) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-15-s3").length;
          g++
        ) {
          if (spec3Req15Output[g].nextElementSibling) {
            if (
              spec3Req15Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req15Output[g].className.includes("maxeds")) {
                spec3Req15Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req15Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req15Output[g].className.includes("maxeds")) {
                spec3Req15Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req15Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req15Output[g].className.includes("maxeds")) {
                spec3Req15Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req15Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req15Output[g].className.includes("maxeds")) {
                spec3Req15Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 20) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-20-s3").length;
          g++
        ) {
          if (spec3Req20Output[g].nextElementSibling) {
            if (
              spec3Req20Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req20Output[g].className.includes("maxeds")) {
                spec3Req20Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req20Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req20Output[g].className.includes("maxeds")) {
                spec3Req20Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req20Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req20Output[g].className.includes("maxeds")) {
                spec3Req20Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req20Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req20Output[g].className.includes("maxeds")) {
                spec3Req20Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 25) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-25-s3").length;
          g++
        ) {
          if (spec3Req25Output[g].nextElementSibling) {
            if (
              spec3Req25Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req25Output[g].className.includes("maxeds")) {
                spec3Req25Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req25Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req25Output[g].className.includes("maxeds")) {
                spec3Req25Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req25Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req25Output[g].className.includes("maxeds")) {
                spec3Req25Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req25Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req25Output[g].className.includes("maxeds")) {
                spec3Req25Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 30) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-30-s3").length;
          g++
        ) {
          if (spec3Req30Output[g].nextElementSibling) {
            if (
              spec3Req30Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req30Output[g].className.includes("maxeds")) {
                spec3Req30Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req30Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req30Output[g].className.includes("maxeds")) {
                spec3Req30Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req30Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req30Output[g].className.includes("maxeds")) {
                spec3Req30Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req30Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req30Output[g].className.includes("maxeds")) {
                spec3Req30Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 35) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-35-s3").length;
          g++
        ) {
          if (spec3Req35Output[g].nextElementSibling) {
            if (
              spec3Req35Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req35Output[g].className.includes("maxeds")) {
                spec3Req35Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req35Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req35Output[g].className.includes("maxeds")) {
                spec3Req35Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req35Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req35Output[g].className.includes("maxeds")) {
                spec3Req35Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req35Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req35Output[g].className.includes("maxeds")) {
                spec3Req35Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }

      //////////////////////////////////////////////////////////////////////////////////

      if (reqVariable === 40) {
        for (
          g = 0;
          g < document.getElementsByClassName("req-40-s3").length;
          g++
        ) {
          if (spec3Req40Output[g].nextElementSibling) {
            if (
              spec3Req40Output[g].nextElementSibling.id.includes(
                "prioReq1Spec3"
              ) &&
              document
                .getElementById("subsReq1Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req40Output[g].className.includes("maxeds")) {
                spec3Req40Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq1Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req40Output[g].nextElementSibling.id.includes(
                "prioReq2Spec3"
              ) &&
              document
                .getElementById("subsReq2Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req40Output[g].className.includes("maxeds")) {
                spec3Req40Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq2Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }

            if (
              spec3Req40Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .getElementById("subsReq3Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req40Output[g].className.includes("maxeds")) {
                spec3Req40Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq3Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
            if (
              spec3Req40Output[g].nextElementSibling.id.includes(
                "prioReq4Spec3"
              ) &&
              document
                .getElementById("subsReq4Spec3")
                .previousElementSibling.className.includes("maxeds")
            ) {
              console.log("The arrow above me should be gold");
              if (!spec3Req40Output[g].className.includes("maxeds")) {
                spec3Req40Output[g].className =
                  "spec3 talentButton active-talent req-active";
              }
              let arrow;
              arrow = document.getElementById("arrwReq4Spec3");

              switch (arrow.className) {
                case "smArrow":
                  arrow.src = DownGoldSmall;
                  break;
                case "medArrow":
                  arrow.src = DownGoldMedium;
                  break;
                case "lgArrow":
                  arrow.src = DownGoldLarge;
                  break;

                default:
                  console.log("No arrow class match");
              }
            }
          }
        }
      }
    }

    //Get inner text of span element sibling to button user clicks
    valueString =
      window.event.srcElement.nextElementSibling.nextElementSibling.innerText;
    //Get inner text of element button user clicks and slice to determine spec1, 2, or 3
    specString = window.event.srcElement.nextElementSibling.className;
    console.log(`specString: ${specString}`);
    //
    pointRequirementString =
      window.event.srcElement.nextElementSibling.nextElementSibling.className.slice(
        17,
        22
      );
    console.log(
      `The value of pointRequirementString is: ${pointRequirementString}`
    );

    //Path taken if user left clicks the button
    if (window.event.button === 0) {
      //If user tries to add more points to a maxed talent, exit function, preventing user action
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[0] ===
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[2]
      ) {
        return;
      }

      //If User tries to add points to a talent that isn't active yet, exit function

      if (
        window.event.srcElement.nextElementSibling.className.includes(
          "inactive-talent"
        )
      ) {
        return;
      }

      if (i === 61) {

        alert("You don't have any more points to spend");
        return;
      }

      //if user clicked button in spec 1 tree update point counter for spec 1
      if (specString[4] === "1") {
        console.log("Point used in spec 1");
        iSpec1 = iSpec1 + 1;
        document.getElementById("point-counter1").innerText = `(${iSpec1})`;

        addGreenBorderSpec1();
      }
      //if user clicked button in spec 2 tree update point counter for spec 2
      else if (specString[4] === "2") {
        console.log("Point used in spec 2");
        iSpec2 = iSpec2 + 1;
        document.getElementById("point-counter2").innerText = `(${iSpec2})`;

        addGreenBorderSpec2();
      }
      //if user clicked button in spec 3 tree update point counter for spec 3
      else if (specString[4] === "3") {
        console.log("Point used in spec 3");
        iSpec3 = iSpec3 + 1;
        document.getElementById("point-counter3").innerText = `(${iSpec3})`;

        addGreenBorderSpec3();
      }
      console.log(`You Left Clicked: !`);
      console.log(window.event.srcElement.nextElementSibling);

      /*This switch takes the 3rd char (2nd index) of valueString 
        (inner text of sibling span) as it's argument. Commenting Case 1 only for clarity*/
      console.log("Code write before switch");
      console.log(valueString[2]);
      switch (valueString[2]) {
        //Path taken if talent point has max one point
        case "1":
          //Return first value in array that is greater than current value
          individualPointTracker = onePointArray.filter(
            (bracket) =>
              bracket >
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText
          );
          /*As long as above function was successful (meaning there are more
                elements of onepoint array greater than current value) update the span elements inner
                text*/
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          }

          //Path taken if above arrow function failed
          else {
            alert("You've already maxed out this talent!");
            //take away one point from i (global point counter)
            i = i - 1;
            /*Here will update spec specific point counter to where it 
                    should be (since user already maxed talent)*/
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");
              iSpec1 = iSpec1 - 1;
              removeGreenBorderSpec1();
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");
              iSpec2 = iSpec2 - 1;
              removeGreenBorderSpec2();
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");
              iSpec3 = iSpec3 - 1;
              removeGreenBorderSpec3();
              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("One Point Potential");

          i = i + 1;

          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is maxed out, change the class to give yellow border
          addYellowBorder();
          turnArrowGoldOnClick();
          break;
        case "2":
          individualPointTracker = twoPointArray.filter(
            (bracket) =>
              bracket >
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText
          );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You've already maxed out this talent!");
            i = i - 1;
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");
              iSpec1 = iSpec1 - 1;
              removeGreenBorderSpec1();
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");
              iSpec2 = iSpec2 - 1;
              removeGreenBorderSpec2();
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");
              iSpec3 = iSpec3 - 1;
              removeGreenBorderSpec3();
              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("Two Point Potential");
          i = i + 1;
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is maxed out, change the class to give yellow border
          addYellowBorder();
          turnArrowGoldOnClick();
          break;
        case "3":
          individualPointTracker = threePointArray.filter(
            (bracket) =>
              bracket >
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText
          );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You've already maxed out this talent!");
            i = i - 1;
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");
              iSpec1 = iSpec1 - 1;
              removeGreenBorderSpec1();
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");
              iSpec2 = iSpec2 - 1;
              removeGreenBorderSpec2();
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");
              iSpec3 = iSpec3 - 1;
              removeGreenBorderSpec3();
              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("Three Point Potential");
          i = i + 1;
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is maxed out, change the class to give yellow border
          addYellowBorder();
          turnArrowGoldOnClick();
          break;
        case "4":
          individualPointTracker = fourPointArray.filter(
            (bracket) =>
              bracket >
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText
          );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You've already maxed out this talent!");
            i = i - 1;
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");
              iSpec1 = iSpec1 - 1;
              removeGreenBorderSpec1();
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");
              iSpec2 = iSpec2 - 1;
              removeGreenBorderSpec2();
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");
              iSpec3 = iSpec3 - 1;
              removeGreenBorderSpec3();
              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("Four Point Potential");
          i = i + 1;
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is maxed out, change the class to give yellow border
          addYellowBorder();
          turnArrowGoldOnClick();
          break;
        case "5":
          individualPointTracker = fivePointArray.filter(
            (bracket) =>
              bracket >
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText
          );
          console.log(individualPointTracker);
          if (typeof individualPointTracker[0] != "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You've already maxed out this talent!");
            i = i - 1;
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");
              iSpec1 = iSpec1 - 1;
              removeGreenBorderSpec1();
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");
              iSpec2 = iSpec2 - 1;
              removeGreenBorderSpec2();
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");
              iSpec3 = iSpec3 - 1;
              removeGreenBorderSpec3();
              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("Five Point Potential");
          i = i + 1;
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is maxed out, change the class to give yellow border
          addYellowBorder();
          turnArrowGoldOnClick();
          break;
      }

      //A Level 70 Player won't have more than 61 talent points
      //if statement alerts user and resets the counter back a point along with the span element
      if (i > 61) {
        alert("You don't have any more talent points available!");
        console.log(`The value of loopHappenedBefore is ${loopHappenedBefore}`);
        i = 61;

        console.log(specString);
        if (specString[4] === "1") {
          if (loopHappenedBefore === false) {
            iSpec1 = iSpec1 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById("point-counter1").innerText = `(${iSpec1})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec1 = iSpec1 - 1;
            i = 61;
            document.getElementById("point-counter1").innerText = `(${iSpec1})`;
            document.getElementById("total-points").innerText = `${i}`;
          }
        }
        if (specString[4] === "2") {
          if (loopHappenedBefore === false) {
            iSpec2 = iSpec2 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById("point-counter2").innerText = `(${iSpec2})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec2 = iSpec2 - 1;
            i = 61;
            document.getElementById("point-counter2").innerText = `(${iSpec2})`;
            document.getElementById("total-points").innerText = `${i}`;
          }
        }
        if (specString[4] === "3") {
          if (loopHappenedBefore === false) {
            iSpec3 = iSpec3 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById("point-counter3").innerText = `(${iSpec3})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec3 = iSpec3 - 1;
            i = 61;
            document.getElementById("point-counter3").innerText = `(${iSpec3})`;
            document.getElementById("total-points").innerText = `${i}`;
          }
        }

        switch (valueString[2]) {
          case "1":
            individualPointTracker = onePointArray
              .reverse()
              .filter(
                (bracket) =>
                  bracket < window.event.srcElement.nextElementSibling.innerText
              );
            if (typeof individualPointTracker[0] !== "undefined") {
              window.event.srcElement.nextElementSibling.innerText =
                individualPointTracker[0];
            }
            break;
          case "2":
            individualPointTracker = twoPointArray
              .reverse()
              .filter(
                (bracket) =>
                  bracket < window.event.srcElement.nextElementSibling.innerText
              );
            if (typeof individualPointTracker[0] !== "undefined") {
              window.event.srcElement.nextElementSibling.innerText =
                individualPointTracker[0];
            }
            break;
          case "3":
            individualPointTracker = threePointArray
              .reverse()
              .filter(
                (bracket) =>
                  bracket < window.event.srcElement.nextElementSibling.innerText
              );
            if (typeof individualPointTracker[0] !== "undefined") {
              window.event.srcElement.nextElementSibling.innerText =
                individualPointTracker[0];
            }
            break;
          case "4":
            individualPointTracker = fourPointArray
              .reverse()
              .filter(
                (bracket) =>
                  bracket < window.event.srcElement.nextElementSibling.innerText
              );
            if (typeof individualPointTracker[0] !== "undefined") {
              window.event.srcElement.nextElementSibling.innerText =
                individualPointTracker[0];
            }
            break;
          case "5":
            individualPointTracker = fivePointArray
              .reverse()
              .filter(
                (bracket) =>
                  bracket < window.event.srcElement.nextElementSibling.innerText
              );
            if (typeof individualPointTracker[0] !== "undefined") {
              window.event.srcElement.nextElementSibling.innerText =
                individualPointTracker[0];
            }
            break;
        }
      }
    }

    //Path taken if user right clicks the button
    else if (window.event.button === 2) {
      //this prevents the user from taking away points if they have points in a dependant talent
      //spec 1
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq1Spec1"]') &&
        !(document.querySelector('[id*="prioReq1Spec1"]').innerText[0] === "0")
      ) {
        return;
      } else if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq2Spec1"]') &&
        !(document.querySelector('[id*="prioReq2Spec1"]').innerText[0] === "0")
      ) {
        return;
      } else if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq3Spec1"]') &&
        !(document.querySelector('[id*="prioReq3Spec1"]').innerText[0] === "0")
      ) {
        return;
      } else if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq4Spec1"]') &&
        !(document.querySelector('[id*="prioReq4Spec1"]').innerText[0] === "0")
      ) {
        return;
      }
      //spec 2
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq1Spec2"]') &&
        !(document.querySelector('[id*="prioReq1Spec2"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq2Spec2"]') &&
        !(document.querySelector('[id*="prioReq2Spec2"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq3Spec2"]') &&
        !(document.querySelector('[id*="prioReq3Spec2"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq4Spec2"]') &&
        !(document.querySelector('[id*="prioReq4Spec2"]').innerText[0] === "0")
      ) {
        return;
      }
      //spec 3
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq1Spec3"]') &&
        !(document.querySelector('[id*="prioReq1Spec3"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq2Spec3"]') &&
        !(document.querySelector('[id*="prioReq2Spec3"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq3Spec3"]') &&
        !(document.querySelector('[id*="prioReq3Spec3"]').innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling ===
          document.querySelector('[id*="subsReq4Spec3"]') &&
        !(document.querySelector('[id*="prioReq4Spec3"]').innerText[0] === "0")
      ) {
        return;
      }

      //if user tries to remove points in a talent they spent no points in, exit function to prevent action

      if (
        window.event.srcElement.nextElementSibling.nextElementSibling
          .innerText[0] === "0"
      ) {
        return;
      }

      /* This following if statement was added to fix the bug that prevented the arrow
      from reverting to silver when you took away the points in the subsReq talent
      */

      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "Spec"
        )
      ) {
        let arrowSrcSize;

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling
            .nextElementSibling
        ) {
          if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "sm"
            )
          ) {
            arrowSrcSize = "sm";
          } else if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "med"
            )
          ) {
            arrowSrcSize = "med";
          } else if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "lg"
            )
          ) {
            arrowSrcSize = "lg";
          } else if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "left"
            )
          ) {
            arrowSrcSize = "left";
          } else if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "right"
            )
          ) {
            arrowSrcSize = "right";
          } else if (
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.className.includes(
              "angle"
            )
          ) {
            arrowSrcSize = "angle";
          }
        }

        switch (arrowSrcSize) {
          case "sm":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              DownSilverSmall;
            break;

          case "med":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              DownSilverMedium;
            break;

          case "lg":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              DownSilverLarge;
            break;

          case "left":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              LeftSilverSmall;
            break;

          case "right":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              RightSilverSmall;
            break;

          case "angle":
            window.event.srcElement.nextElementSibling.nextElementSibling.nextElementSibling.src =
              AngleArrowSilver;
            break;
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq1Spec1"
          )
        ) {
          document.querySelector(
            '[id*="prioReq1Spec1"]'
          ).previousElementSibling.className =
            "spec1 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq2Spec1"
          )
        ) {
          document.querySelector(
            '[id*="prioReq2Spec1"]'
          ).previousElementSibling.className =
            "spec1 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq3Spec1"
          )
        ) {
          document.querySelector(
            '[id*="prioReq3Spec1"]'
          ).previousElementSibling.className =
            "spec1 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq4Spec1"
          )
        ) {
          document.querySelector(
            '[id*="prioReq4Spec1"]'
          ).previousElementSibling.className =
            "spec1 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq1Spec2"
          )
        ) {
          document.querySelector(
            '[id*="prioReq1Spec2"]'
          ).previousElementSibling.className =
            "spec2 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq2Spec2"
          )
        ) {
          document.querySelector(
            '[id*="prioReq2Spec2"]'
          ).previousElementSibling.className =
            "spec2 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq3Spec2"
          )
        ) {
          document.querySelector(
            '[id*="prioReq3Spec2"]'
          ).previousElementSibling.className =
            "spec2 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq4Spec2"
          )
        ) {
          document.querySelector(
            '[id*="prioReq4Spec2"]'
          ).previousElementSibling.className =
            "spec2 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq1Spec3"
          )
        ) {
          document.querySelector(
            '[id*="prioReq1Spec3"]'
          ).previousElementSibling.className =
            "spec3 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq2Spec3"
          )
        ) {
          document.querySelector(
            '[id*="prioReq2Spec3"]'
          ).previousElementSibling.className =
            "spec3 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq3Spec3"
          )
        ) {
          document.querySelector(
            '[id*="prioReq3Spec3"]'
          ).previousElementSibling.className =
            "spec3 talentButton inactive-talent req-inactive";
        }

        if (
          window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
            "subsReq4Spec3"
          )
        ) {
          document.querySelector(
            '[id*="prioReq4Spec3"]'
          ).previousElementSibling.className =
            "spec3 talentButton inactive-talent req-inactive";
        }
      }

      /* This following block of code prevents the user from removing points from a talent
      if doing so would bring the points spent in the spec lower than any of the elements in
      the spec 
      */

      pointRequirementString =
        window.event.srcElement.nextElementSibling.nextElementSibling.className.slice(
          17,
          19
        );

      console.log(pointRequirementString);

      let clickDecider;
      let arrayOfTalents = Array.from(
        document.querySelectorAll(".talentPoints")
      );
      let arrayOfTalentsFiltered = [];

      arrayOfTalentsFiltered = arrayOfTalents.filter(
        (talent) => talent.className.slice(17, 19) > pointRequirementString
      );
      console.log("arrayOfTalentsFiltered", arrayOfTalentsFiltered);
      for (let individualTalent of arrayOfTalentsFiltered) {
        if (
          individualTalent.className.slice(20, 22) === "s1" &&
          individualTalent.innerText[0] !== "0" &&
          individualTalent.className.slice(17, 19) >= iSpec1
        ) {
          clickDecider = false;
        }
        if (
          individualTalent.className.slice(20, 22) === "s2" &&
          individualTalent.innerText[0] !== "0" &&
          individualTalent.className.slice(17, 19) >= iSpec2
        ) {
          clickDecider = false;
        }
        if (
          individualTalent.className.slice(20, 22) === "s3" &&
          individualTalent.innerText[0] !== "0" &&
          individualTalent.className.slice(17, 19) >= iSpec3
        ) {
          clickDecider = false;
        }
      }

      if (clickDecider === false) {
        return;
      }

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //if user right clicked talent in spec1 subtract one point from point tracker if > 0
      if (specString[4] === "1") {
        console.log("Point taken from spec 1");
        if (iSpec1 > 0) {
          iSpec1 = iSpec1 - 1;
        }

        document.getElementById("point-counter1").innerText = `(${iSpec1})`;
        removeGreenBorderSpec1();
        turnArrowSilverSpec1();
      } else if (specString[4] === "2") {
        console.log("Point taken from spec 2");
        if (iSpec2 > 0) {
          iSpec2 = iSpec2 - 1;
        }
        document.getElementById("point-counter2").innerText = `(${iSpec2})`;
        removeGreenBorderSpec2();
      } else if (specString[4] === "3") {
        console.log("Point taken from spec 3");
        if (iSpec3 > 0) {
          iSpec3 = iSpec3 - 1;
          document.getElementById("point-counter3").innerText = `(${iSpec3})`;
          removeGreenBorderSpec3();
        }
      }
      console.log(`You Right Clicked: !`);
      console.log(window.event.srcElement.nextElementSibling);

      /*This switch takes the 3rd char (2nd index) of valueString 
        (inner text of sibling span) as it's argument. Commenting Case 1 only for clarity*/
      switch (valueString[2]) {
        case "1":
          /* First reverses onePointArray, then returns first element of array
                less than current span elements value*/
          individualPointTracker = onePointArray
            .reverse()
            .filter(
              (bracket) =>
                bracket <
                window.event.srcElement.nextElementSibling.nextElementSibling
                  .innerText
            );
          /*As long as above function was successful (meaning there are more
                elements of onepoint array lesser than current value) update the span elements inner
                text*/
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
            //Check which spec tree user clicked in before updating value
            if (specString[4] === "1") {
              console.log("Point taken back Spec 1");

              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point taken back Spec 2");

              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point taken back Spec 3");

              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          } else {
            alert("You have no points in this talent to remove!");
            i = i + 1;
            if (specString[4] === "1") {
              addGreenBorderSpec1();
            }
            if (specString[4] === "2") {
              addGreenBorderSpec2();
            }
            if (specString[4] === "3") {
              addGreenBorderSpec3();
            }

            if (specString[4] === "1") {
              console.log("Point added back Spec 1");
              console.log(`iSpec1: ${iSpec1}`);
              document.getElementById(
                "point-counter1"
              ).innerText = `(${iSpec1})`;
            } else if (specString[4] === "2") {
              console.log("Point added back Spec 2");
              console.log(`iSpec2: ${iSpec2}`);
              document.getElementById(
                "point-counter2"
              ).innerText = `(${iSpec2})`;
            } else if (specString[4] === "3") {
              console.log("Point added back Spec 3");

              console.log(`iSpec3: ${iSpec3}`);
              document.getElementById(
                "point-counter3"
              ).innerText = `(${iSpec3})`;
            }
          }
          console.log("One Point Potential");
          if (i >= 1) {
            i = i - 1;
          }
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is not maxed out, change the class to give green border

          if (
            !(
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[0] ===
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[2]
            )
          )
            if (specString[4] === "1") {
              removeYellowBorderSpec1();
            }
          if (specString[4] === "2") {
            removeYellowBorderSpec2();
          }
          if (specString[4] === "3") {
            removeYellowBorderSpec3();
          }

          break;
        case "2":
          individualPointTracker = twoPointArray
            .reverse()
            .filter(
              (bracket) =>
                bracket <
                window.event.srcElement.nextElementSibling.nextElementSibling
                  .innerText
            );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You have no points in this talent to remove!");
            i = i + 1;
            if (specString[4] === "1") {
              addGreenBorderSpec1();
            }
            if (specString[4] === "2") {
              addGreenBorderSpec2();
            }
            if (specString[4] === "3") {
              addGreenBorderSpec3();
            }
          }
          console.log("Two Point Potential");
          if (i >= 1) {
            i = i - 1;
          }
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is not maxed out, change the class to give green border

          if (
            !(
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[0] ===
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[2]
            )
          )
            if (specString[4] === "1") {
              removeYellowBorderSpec1();
            }
          if (specString[4] === "2") {
            removeYellowBorderSpec2();
          }
          if (specString[4] === "3") {
            removeYellowBorderSpec3();
          }
          break;
        case "3":
          individualPointTracker = threePointArray
            .reverse()
            .filter(
              (bracket) =>
                bracket <
                window.event.srcElement.nextElementSibling.nextElementSibling
                  .innerText
            );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You have no points in this talent to remove!");
            i = i + 1;
            if (specString[4] === "1") {
              addGreenBorderSpec1();
            }
            if (specString[4] === "2") {
              addGreenBorderSpec2();
            }
            if (specString[4] === "3") {
              addGreenBorderSpec3();
            }
          }

          console.log("Three Point Potential");
          if (i >= 1) {
            i = i - 1;
          }
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is not maxed out, change the class to give green border

          if (
            !(
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[0] ===
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[2]
            )
          )
            if (specString[4] === "1") {
              removeYellowBorderSpec1();
            }
          if (specString[4] === "2") {
            removeYellowBorderSpec2();
          }
          if (specString[4] === "3") {
            removeYellowBorderSpec3();
          }
          break;
        case "4":
          individualPointTracker = fourPointArray
            .reverse()
            .filter(
              (bracket) =>
                bracket <
                window.event.srcElement.nextElementSibling.nextElementSibling
                  .innerText
            );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You have no points in this talent to remove!");
            i = i + 1;
            if (specString[4] === "1") {
              addGreenBorderSpec1();
            }
            if (specString[4] === "2") {
              addGreenBorderSpec2();
            }
            if (specString[4] === "3") {
              addGreenBorderSpec3();
            }
          }
          console.log("Four Point Potential");
          if (i >= 1) {
            i = i - 1;
          }
          document.getElementById("total-points").innerText = i;
          console.log(i);
          // If Point is not maxed out, change the class to give green border
          if (
            !(
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[0] ===
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[2]
            )
          )
            if (specString[4] === "1") {
              removeYellowBorderSpec1();
            }
          if (specString[4] === "2") {
            removeYellowBorderSpec2();
          }
          if (specString[4] === "3") {
            removeYellowBorderSpec3();
          }
          break;
        case "5":
          individualPointTracker = fivePointArray
            .reverse()
            .filter(
              (bracket) =>
                bracket <
                window.event.srcElement.nextElementSibling.nextElementSibling
                  .innerText
            );
          if (typeof individualPointTracker[0] !== "undefined") {
            window.event.srcElement.nextElementSibling.nextElementSibling.innerText =
              individualPointTracker[0];
          } else {
            alert("You have no points in this talent to remove!");
            i = i + 1;
            if (specString[4] === "1") {
              addGreenBorderSpec1();
            }
            if (specString[4] === "2") {
              addGreenBorderSpec2();
            }
            if (specString[4] === "3") {
              addGreenBorderSpec3();
            }
          }
          console.log("Five Point Potential");
          if (i >= 1) {
            i = i - 1;
          }
          document.getElementById("total-points").innerText = i;
          console.log(i);
          console.log(iSpec1);
          // If Point is not maxed out, change the class to give green border

          if (
            !(
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[0] ===
              window.event.srcElement.nextElementSibling.nextElementSibling
                .innerText[2]
            )
          )
            if (specString[4] === "1") {
              removeYellowBorderSpec1();
            }
          if (specString[4] === "2") {
            removeYellowBorderSpec2();
          }
          if (specString[4] === "3") {
            removeYellowBorderSpec3();
          }

          break;
      }
    }
  }

  resetPoints() {
    let z;
    let y;
    let singleTooltip;
    let arrow;

    let spanArray = document.querySelectorAll(".talentPoints");
    let smArrowArray = document.querySelectorAll(".smArrow");
    let medArrowArray = document.querySelectorAll(".medArrow");
    let lgArrowArray = document.querySelectorAll(".lgArrow");
    let leftArrowArray = document.querySelectorAll(".leftArrow");
    let rightArrowArray = document.querySelectorAll(".rightArrow");
    let angleArrowArray = document.querySelectorAll(".angleArrow");

    let spanArrayPotential1 = [];
    let spanArrayPotential2 = [];
    let spanArrayPotential3 = [];
    let spanArrayPotential4 = [];
    let spanArrayPotential5 = [];

    let onePointArray = ["0/1", "1/1"];
    let twoPointArray = ["0/2", "1/2", "2/2"];
    let threePointArray = ["0/3", "1/3", "2/3", "3/3"];
    let fourPointArray = ["0/4", "1/4", "2/4", "3/4", "4/4"];
    let fivePointArray = ["0/5", "1/5", "2/5", "3/5", "4/5", "5/5"];

    let toolTipIDChecker;
    let toolTipSelector;
    let toolTipStepper;

    for (singleTooltip of spanArray) {
    }

    console.log("Beginning of reset test");
    for (y = 0; y < spanArray.length; y++) {
      toolTipIDChecker =
        spanArray[y].previousElementSibling.previousElementSibling.id;
      toolTipStepper = Hunter[toolTipIDChecker - 1];
      toolTipSelector = toolTipStepper.toolTip[0];
      document
        .getElementById(toolTipIDChecker)
        .setAttribute("data-tip", toolTipSelector);

      spanArray[y].previousElementSibling.previousElementSibling.setAttribute(
        "data-tip",
        toolTipSelector
      );

      if (
        !(
          spanArray[y].className[17] === "0" &&
          spanArray[y].className[18] === "0"
        )
      ) {
        if (spanArray[y].previousElementSibling.className[4] === "1") {
          spanArray[y].previousElementSibling.className =
            "spec1 talentButton inactive-talent req-inactive";
        }
        if (spanArray[y].previousElementSibling.className[4] === "2") {
          spanArray[y].previousElementSibling.className =
            "spec2 talentButton inactive-talent req-inactive";
        }
        if (spanArray[y].previousElementSibling.className[4] === "3") {
          spanArray[y].previousElementSibling.className =
            "spec3 talentButton inactive-talent req-inactive";
        }
      }

      if (
        spanArray[y].className[17] === "0" &&
        spanArray[y].className[18] === "0"
      ) {
        console.log(spanArray[y].previousElementSibling);
        if (spanArray[y].previousElementSibling.className[4] === "1") {
          spanArray[y].previousElementSibling.className =
            "spec1 talentButton active-talent req-active";
        }
        if (spanArray[y].previousElementSibling.className[4] === "2") {
          spanArray[y].previousElementSibling.className =
            "spec2 talentButton active-talent req-active";
        }
        if (spanArray[y].previousElementSibling.className[4] === "3") {
          spanArray[y].previousElementSibling.className =
            "spec3 talentButton active-talent req-active";
        }
      }
    }

    /* Iterate through array of all talent buttons and split them
      into separate arrays based off the 3rd char of the string*/

    for (z = 0; z < spanArray.length; z++) {
      if (spanArray[z].innerText[2] === "1") {
        spanArrayPotential1.push(spanArray[z]);
      }
      if (spanArray[z].innerText[2] === "2") {
        spanArrayPotential2.push(spanArray[z]);
      }
      if (spanArray[z].innerText[2] === "3") {
        spanArrayPotential3.push(spanArray[z]);
      }
      if (spanArray[z].innerText[2] === "4") {
        spanArrayPotential4.push(spanArray[z]);
      }
      if (spanArray[z].innerText[2] === "5") {
        spanArrayPotential5.push(spanArray[z]);
      }
    }

    /* Iterate through all of separate arrays of span elements and set their value
      back to their original values (index[0] of their respective valuePointArray) */
    for (y = 0; y < spanArrayPotential1.length; y++) {
      spanArrayPotential1[y].innerText = onePointArray[0];
    }
    for (y = 0; y < spanArrayPotential2.length; y++) {
      spanArrayPotential2[y].innerText = twoPointArray[0];
    }
    for (y = 0; y < spanArrayPotential3.length; y++) {
      spanArrayPotential3[y].innerText = threePointArray[0];
    }
    for (y = 0; y < spanArrayPotential4.length; y++) {
      spanArrayPotential4[y].innerText = fourPointArray[0];
    }
    for (y = 0; y < spanArrayPotential5.length; y++) {
      spanArrayPotential5[y].innerText = fivePointArray[0];
    }

    // Iterate through all arrow elements and set them back to silver

    for (arrow of smArrowArray) {
      arrow.src = DownSilverSmall;
    }
    for (arrow of medArrowArray) {
      arrow.src = DownSilverMedium;
    }
    for (arrow of lgArrowArray) {
      arrow.src = DownSilverLarge;
    }
    for (arrow of leftArrowArray) {
      arrow.src = LeftSilverSmall;
    }
    for (arrow of rightArrowArray) {
      arrow.src = RightSilverSmall;
    }
    for (arrow of angleArrowArray) {
      arrow.src = AngleArrowSilver;
    }

    //Resets all counter variables to 0/false
    i = 0;
    iSpec1 = 0;
    iSpec2 = 0;
    iSpec3 = 0;
    loopHappenedBefore = false;
    //Resets inner text value of DOM counters back to 0.
    document.getElementById("total-points").innerText = `${i}`;
    document.getElementById("point-counter1").innerText = `(${iSpec1})`;
    document.getElementById("point-counter2").innerText = `(${iSpec2})`;
    document.getElementById("point-counter3").innerText = `(${iSpec3})`;

    console.log("Reset Points!");
  }

  /*scrollComponentIntoView() {
    
  }*/

  componentDidMount() {
    const anchor = document.getElementsByClassName("btn")[0];
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div
        style={{ position: "relative", maxWidth: "1010px" }}
        onContextMenu={(e) => e.preventDefault()}
        className="frame-wrapper mx-auto"
        id="Hunter"
        onLoad={() => {
          this.rebuildToolTip();
        }}
      >
        <div
          className="row"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          <div className="col-sm-12">
            <button
              onClick={this.resetPoints}
              type="button"
              className="btn btn-success btn-hunter mb-2 mt-2"
              style={{ display: "inline-block", marginLeft: "6px" }}
            >
              Reset
            </button>
          </div>
          <div className="col-sm-4"></div>
          <div
            className="col-sm-4 mx-auto"
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            <h5
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: "6px",
              }}
            >
              Points Spent:
            </h5>
            <h5
              id="total-points"
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: "6px",
                marginTop: "1px",
              }}
            >
              0
            </h5>
          </div>
          <div className="col-sm-4"></div>
        </div>

        <div
          className="row ml-3 mr-3 mb-3 mx-auto"
          style={{ maxWidth: "1010px" }}
        >
          <div
            style={{
              backgroundImage: `url(${spec1BG})`,
              maxWidth: "305px",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col1"
          >
            <h5 id="spec1" style={{ display: "inline-block" }}>
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec1Logo}
              />
              Beast Mastery
            </h5>
            <h5
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: "2px",
              }}
              id="point-counter1"
            >
              (0)
            </h5>

            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedAspectHawkToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedAspectHawkToolTip = ref)}
                  data-tip={Hunter[0].toolTip[0]}
                  id="1"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={ImprovedAspectHawk}
                  alt=""
                />

                <span className="talentPoints req-00-s1">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.EnduranceTrainingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.EnduranceTrainingToolTip = ref)}
                  data-tip={Hunter[1].toolTip[0]}
                  id="2"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={EnduranceTraining}
                  alt=""
                />

                <span className="talentPoints req-00-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FocusedFireToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FocusedFireToolTip = ref)}
                  data-tip={Hunter[2].toolTip[0]}
                  id="3"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={FocusedFire}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedAspectMonkeyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedAspectMonkeyToolTip = ref)}
                  data-tip={Hunter[3].toolTip[0]}
                  id="4"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedAspectMonkey}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ThickHideToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ThickHideToolTip = ref)}
                  data-tip={Hunter[4].toolTip[0]}
                  id="5"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ThickHide}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedRevivePetToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedRevivePetToolTip = ref)}
                  data-tip={Hunter[5].toolTip[0]}
                  id="6"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedRevivePet}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.PathfindingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.PathfindingToolTip = ref)}
                  data-tip={Hunter[6].toolTip[0]}
                  id="7"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Pathfinding}
                  alt=""
                />

                <span className="talentPoints req-10-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BestialSwiftnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BestialSwiftnessToolTip = ref)}
                  data-tip={Hunter[7].toolTip[0]}
                  id="8"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={BestialSwiftness}
                  alt=""
                />

                <span className="talentPoints req-10-s1">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.UnleashedFuryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.UnleashedFuryToolTip = ref)}
                  data-tip={Hunter[8].toolTip[0]}
                  id="9"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={UnleashedFury}
                  alt=""
                />

                <span className="talentPoints req-10-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedMendPetToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedMendPetToolTip = ref)}
                  data-tip={Hunter[9].toolTip[0]}
                  id="10"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedMendPet}
                  alt=""
                />

                <span className="talentPoints req-15-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FerocityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FerocityToolTip = ref)}
                  data-tip={Hunter[10].toolTip[0]}
                  id="11"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Ferocity}
                  alt=""
                />

                <span id="subsReq1Spec1" className="talentPoints req-15-s1">
                  0/5
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq1Spec1"
                />
              </div>

              <div className="col col-xs-3"></div>
            </div>

            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SpiritBondToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SpiritBondToolTip = ref)}
                  data-tip={Hunter[11].toolTip[0]}
                  id="12"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={SpiritBond}
                  alt=""
                />

                <span className="talentPoints req-20-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.IntimidationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.IntimidationToolTip = ref)}
                  data-tip={Hunter[12].toolTip[0]}
                  id="13"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Intimidation}
                  alt=""
                />

                <span id="subsReq2Spec1" className="talentPoints req-20-s1">
                  0/1
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq2Spec1"
                />
              </div>
              <div style={{ zIndex: "0" }} className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BestialDisciplineToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BestialDisciplineToolTip = ref)}
                  data-tip={Hunter[13].toolTip[0]}
                  id="14"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={BestialDiscipline}
                  alt=""
                />

                <span className="talentPoints req-20-s1">0/2</span>
              </div>
            </div>

            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.AnimalHandlerToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.AnimalHandlerToolTip = ref)}
                  data-tip={Hunter[14].toolTip[0]}
                  id="15"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={AnimalHandler}
                  alt=""
                />

                <span className="talentPoints req-25-s1">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FrenzyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FrenzyToolTip = ref)}
                  data-tip={Hunter[15].toolTip[0]}
                  id="16"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Frenzy}
                  alt=""
                />

                <span id="prioReq1Spec1" className="talentPoints req-25-s1">
                  0/5
                </span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FerociousInspirationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FerociousInspirationToolTip = ref)}
                  data-tip={Hunter[16].toolTip[0]}
                  id="17"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={FerociousInspiration}
                  alt=""
                />

                <span className="talentPoints req-30-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BestialWrathToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BestialWrathToolTip = ref)}
                  data-tip={Hunter[17].toolTip[0]}
                  id="18"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={BestialWrath}
                  alt=""
                />

                <span
                  id="subsReq3Spec1 prioReq2Spec1"
                  className="talentPoints req-30-s1"
                >
                  0/1
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq3Spec1"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CatlikeReflexesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CatlikeReflexesToolTip = ref)}
                  data-tip={Hunter[18].toolTip[0]}
                  id="19"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={CatlikeReflexes}
                  alt=""
                />

                <span className="talentPoints req-30-s1">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SerpentsSwiftnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SerpentsSwiftnessToolTip = ref)}
                  data-tip={Hunter[19].toolTip[0]}
                  id="20"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={SerpentsSwiftness}
                  alt=""
                />

                <span className="talentPoints req-35-s1">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BeastWithinToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BeastWithinToolTip = ref)}
                  data-tip={Hunter[20].toolTip[0]}
                  id="21"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={TheBeastWithin}
                  alt=""
                />

                <span id="prioReq3Spec1" className="talentPoints req-40-s1">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${spec2BG})`,
              maxWidth: "305px",
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col2"
          >
            <h5 id="spec2" style={{ display: "inline-block" }}>
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec2Logo}
              />
              Marksmanship
            </h5>
            <h5
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: "2px",
              }}
              id="point-counter2"
            >
              (0)
            </h5>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedConcussiveShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedConcussiveShotToolTip = ref)}
                  data-tip={Hunter[21].toolTip[0]}
                  id="22"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={ImprovedConcussiveShot}
                  alt=""
                />

                <span className="talentPoints req-00-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.LethalShotsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.LethalShotsToolTip = ref)}
                  data-tip={Hunter[22].toolTip[0]}
                  id="23"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={LethalShots}
                  alt=""
                />

                <span className="talentPoints req-00-s2">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedHuntersMarkToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedHuntersMarkToolTip = ref)}
                  data-tip={Hunter[23].toolTip[0]}
                  id="24"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedHuntersMark}
                  alt=""
                />

                <span className="talentPoints req-05-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.EfficiencyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.EfficiencyToolTip = ref)}
                  data-tip={Hunter[24].toolTip[0]}
                  id="25"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Efficiency}
                  alt=""
                />

                <span className="talentPoints req-05-s2">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.GoForTheThroatToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.GoForTheThroatToolTip = ref)}
                  data-tip={Hunter[25].toolTip[0]}
                  id="26"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={GoForTheThroat}
                  alt=""
                />

                <span className="talentPoints req-10-s2">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedArcaneShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedArcaneShotToolTip = ref)}
                  data-tip={Hunter[26].toolTip[0]}
                  id="27"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedArcaneShot}
                  alt=""
                />

                <span className="talentPoints req-10-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.AimedShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.AimedShotToolTip = ref)}
                  data-tip={Hunter[27].toolTip[0]}
                  id="28"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={AimedShot}
                  alt=""
                />

                <span id="subsReq1Spec2" className="talentPoints req-10-s2">
                  0/1
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq1Spec2"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.RapidKillingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.RapidKillingToolTip = ref)}
                  data-tip={Hunter[28].toolTip[0]}
                  id="29"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={RapidKilling}
                  alt=""
                />

                <span className="talentPoints req-10-s2">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedStingsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedStingsToolTip = ref)}
                  data-tip={Hunter[29].toolTip[0]}
                  id="30"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedStings}
                  alt=""
                />

                <span className="talentPoints req-15-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MortalShotsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MortalShotsToolTip = ref)}
                  data-tip={Hunter[30].toolTip[0]}
                  id="31"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={MortalShots}
                  alt=""
                />

                <span id="prioReq1Spec2" className="talentPoints req-15-s2">
                  0/5
                </span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ConcussiveBarrageToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ConcussiveBarrageToolTip = ref)}
                  data-tip={Hunter[31].toolTip[0]}
                  id="32"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ConcussiveBarrage}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ScatterShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ScatterShotToolTip = ref)}
                  data-tip={Hunter[32].toolTip[0]}
                  id="33"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ScatterShot}
                  alt=""
                />

                <span id="subsReq2Spec2" className="talentPoints req-20-s2">
                  0/1
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq2Spec2"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BarrageToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BarrageToolTip = ref)}
                  data-tip={Hunter[33].toolTip[0]}
                  id="34"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={BarrageAndImprovedBarrage}
                  alt=""
                />

                <span id="subsReq3Spec2" className="talentPoints req-20-s2">
                  0/3
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq3Spec2"
                />
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CombatExperienceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CombatExperienceToolTip = ref)}
                  data-tip={Hunter[34].toolTip[0]}
                  id="35"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={CombatExperience}
                  alt=""
                />

                <span className="talentPoints req-25-s2">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.RangedWeaponSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.RangedWeaponSpecializationToolTip = ref)}
                  data-tip={Hunter[35].toolTip[0]}
                  id="36"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={RangedWeaponSpecialization}
                  alt=""
                />

                <span className="talentPoints req-25-s2">0/5</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CarefulAimToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CarefulAimToolTip = ref)}
                  data-tip={Hunter[36].toolTip[0]}
                  id="37"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={CarefulAim}
                  alt=""
                />

                <span className="talentPoints req-30-s2">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.TrueshotAuraToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.TrueshotAuraToolTip = ref)}
                  data-tip={Hunter[37].toolTip[0]}
                  id="38"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={TrueshotAura}
                  alt=""
                />

                <span id="prioReq2Spec2" className="talentPoints req-30-s2">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BarrageAndImprovedBarrageToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BarrageAndImprovedBarrageToolTip = ref)}
                  data-tip={Hunter[38].toolTip[0]}
                  id="39"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={BarrageAndImprovedBarrage}
                  alt=""
                />

                <span id="prioReq3Spec2" className="talentPoints req-30-s2">
                  0/3
                </span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MasterMarksmanToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MasterMarksmanToolTip = ref)}
                  data-tip={Hunter[39].toolTip[0]}
                  id="40"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={MasterMarksman}
                  alt=""
                />

                <span id="subsReq4Spec2" className="talentPoints req-35-s2">
                  0/5
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq4Spec2"
                />
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SilencingShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SilencingShotToolTip = ref)}
                  data-tip={Hunter[40].toolTip[0]}
                  id="41"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SilencingShot}
                  alt=""
                />

                <span id="prioReq4Spec2" className="talentPoints req-40-s2">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${spec3BG})`,
              maxWidth: "305px",
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col3"
          >
            <h5 id="spec3" style={{ display: "inline-block" }}>
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec3Logo}
              />
              Survival
            </h5>
            <h5
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: "2px",
              }}
              id="point-counter3"
            >
              (0)
            </h5>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MonsterSlayingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MonsterSlayingToolTip = ref)}
                  data-tip={Hunter[41].toolTip[0]}
                  id="42"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={MonsterSlaying}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.HumanoidSlayingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.HumanoidSlayingToolTip = ref)}
                  data-tip={Hunter[42].toolTip[0]}
                  id="43"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={HumanoidSlaying}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.HawkEyeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.HawkEyeToolTip = ref)}
                  data-tip={Hunter[43].toolTip[0]}
                  id="44"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={HawkEye}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SavageStrikesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SavageStrikesToolTip = ref)}
                  data-tip={Hunter[44].toolTip[0]}
                  id="45"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={SavageStrikes}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.EntrapmentToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.EntrapmentToolTip = ref)}
                  data-tip={Hunter[45].toolTip[0]}
                  id="46"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Entrapment}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.DeflectionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DeflectionToolTip = ref)}
                  data-tip={Hunter[46].toolTip[0]}
                  id="47"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Deflection}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedWingClipToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedWingClipToolTip = ref)}
                  data-tip={Hunter[47].toolTip[0]}
                  id="48"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedWingClip}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CleverTrapsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CleverTrapsToolTip = ref)}
                  data-tip={Hunter[48].toolTip[0]}
                  id="49"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={CleverTraps}
                  alt=""
                />

                <span className="talentPoints req-10-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SurvivalistToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SurvivalistToolTip = ref)}
                  data-tip={Hunter[49].toolTip[0]}
                  id="50"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Survivalist}
                  alt=""
                />

                <span className="talentPoints req-10-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.DeterrenceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DeterrenceToolTip = ref)}
                  data-tip={Hunter[50].toolTip[0]}
                  id="51"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Deterrence}
                  alt=""
                />

                <span id="subsReq1Spec3" className="talentPoints req-10-s3">
                  0/1
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq1Spec3"
                />
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.TrapMasteryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.TrapMasteryToolTip = ref)}
                  data-tip={Hunter[51].toolTip[0]}
                  id="52"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={TrapMastery}
                  alt=""
                />

                <span className="talentPoints req-15-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SurefootedToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SurefootedToolTip = ref)}
                  data-tip={Hunter[52].toolTip[0]}
                  id="53"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Surefooted}
                  alt=""
                />

                <span className="talentPoints req-15-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedFeignDeathToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedFeignDeathToolTip = ref)}
                  data-tip={Hunter[53].toolTip[0]}
                  id="54"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedFeignDeath}
                  alt=""
                />

                <span className="talentPoints req-15-s3">0/2</span>
              </div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SurvivalInstinctsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SurvivalInstinctsToolTip = ref)}
                  data-tip={Hunter[54].toolTip[0]}
                  id="55"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={SurvivalInstincts}
                  alt=""
                />

                <span className="talentPoints req-20-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.KillerInstinctToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.KillerInstinctToolTip = ref)}
                  data-tip={Hunter[55].toolTip[0]}
                  id="56"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={KillerInstinct}
                  alt=""
                />

                <span id="subsReq2Spec3" className="talentPoints req-20-s3">
                  0/3
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq2Spec3"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CounterattackToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CounterattackToolTip = ref)}
                  data-tip={Hunter[56].toolTip[0]}
                  id="57"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Counterattack}
                  alt=""
                />

                <span id="prioReq1Spec3" className="talentPoints req-20-s3">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ResourcefulnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ResourcefulnessToolTip = ref)}
                  data-tip={Hunter[57].toolTip[0]}
                  id="58"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Resourcefulness}
                  alt=""
                />

                <span className="talentPoints req-25-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.LightningReflexesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.LightningReflexesToolTip = ref)}
                  data-tip={Hunter[58].toolTip[0]}
                  id="59"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={LightningReflexes}
                  alt=""
                />

                <span className="talentPoints req-25-s3">0/5</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ThrillOfTheHuntToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ThrillOfTheHuntToolTip = ref)}
                  data-tip={Hunter[59].toolTip[0]}
                  id="60"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ThrillOfTheHunt}
                  alt=""
                />

                <span className="talentPoints req-30-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.WyvernStingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.WyvernStingToolTip = ref)}
                  data-tip={Hunter[60].toolTip[0]}
                  id="61"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={WyvernSting}
                  alt=""
                />

                <span id="prioReq2Spec3" className="talentPoints req-30-s3">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ExposeWeaknessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ExposeWeaknessToolTip = ref)}
                  data-tip={Hunter[61].toolTip[0]}
                  id="62"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ExposeWeakness}
                  alt=""
                />

                <span className="talentPoints req-30-s3">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MasterTacticianToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MasterTacticianToolTip = ref)}
                  data-tip={Hunter[62].toolTip[0]}
                  id="63"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={MasterTactician}
                  alt=""
                />

                <span id="subsReq3Spec3" className="talentPoints req-35-s3">
                  0/5
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq3Spec3"
                />
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
            <div className="row talent-row talent-row-inner">
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ReadinessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ReadinessToolTip = ref)}
                  data-tip={Hunter[63].toolTip[0]}
                  id="64"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Readiness}
                  alt=""
                />

                <span id="prioReq3Spec3" className="talentPoints req-40-s3">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<ReactTooltip data-html="true" />;

export default HunterComponent;
