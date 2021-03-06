import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Rogue } from "../talentinfo/Rogue";

import spec1BG from "../images/talents/Rogue/Background/Assassination.jpg";
import spec2BG from "../images/talents/Rogue/Background/Combat.jpg";
import spec3BG from "../images/talents/Rogue/Background/Subtlety.jpg";
import spec1Logo from "../images/talents/Rogue/Spec1Logo.jpg";
import spec2Logo from "../images/talents/Rogue/Spec2Logo.jpg";
import spec3Logo from "../images/talents/Rogue/Spec3Logo.jpg";

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

//spec1

import ColdBlood from "../images/talents/Rogue/Progression/spec1/ColdBlood.jpg";
import ImprovedExposeArmor from "../images/talents/Rogue/Progression/spec1/ImprovedExposeArmor.jpg";
import MasterPoisoner from "../images/talents/Rogue/Progression/spec1/MasterPoisoner.jpg";
import RelentlessStrikes from "../images/talents/Rogue/Progression/spec1/RelentlessStrikes.jpg";
import ruthlessness from "../images/talents/Rogue/Progression/spec1/ruthlessness.jpg";
import DeadenedNerves from "../images/talents/Rogue/Progression/spec1/DeadenedNerves.jpg";
import ImprovedKidneyShot from "../images/talents/Rogue/Progression/spec1/ImprovedKidneyShot.jpg";
import Murder from "../images/talents/Rogue/Progression/spec1/Murder.jpg";
import RemorselessAttacks from "../images/talents/Rogue/Progression/spec1/RemorselessAttacks.jpg";
import FindWeakness from "../images/talents/Rogue/Progression/spec1/FindWeakness.jpg";
import ImprovedPoisons from "../images/talents/Rogue/Progression/spec1/ImprovedPoisons.jpg";
import Mutilate from "../images/talents/Rogue/Progression/spec1/Mutilate.jpg";
import SealFate from "../images/talents/Rogue/Progression/spec1/SealFate.jpg";
import FleetFooted from "../images/talents/Rogue/Progression/spec1/FleetFooted.jpg";
import Lethality from "../images/talents/Rogue/Progression/spec1/Lethality.jpg";
import PuncturingWounds from "../images/talents/Rogue/Progression/spec1/PuncturingWounds.jpg";
import Vigor from "../images/talents/Rogue/Progression/spec1/Vigor.jpg";
import ImprovedEviscerate from "../images/talents/Rogue/Progression/spec1/ImprovedEviscerate.jpg";
import Malice from "../images/talents/Rogue/Progression/spec1/Malice.jpg";
import QuickRecovery from "../images/talents/Rogue/Progression/spec1/QuickRecovery.jpg";
import VilePoisons from "../images/talents/Rogue/Progression/spec1/VilePoisons.jpg";

//spec2

import AdrenalineRush from "../images/talents/Rogue/Progression/spec2/AdrenalineRush.jpg";
import Deflection from "../images/talents/Rogue/Progression/spec2/Deflection.jpg";
import ImprovedSinisterStrike from "../images/talents/Rogue/Progression/spec2/ImprovedSinisterStrike.jpg";
import Precision from "../images/talents/Rogue/Progression/spec2/Precision.jpg";
import Aggression from "../images/talents/Rogue/Progression/spec2/Aggression.jpg";
import DualWieldSpecialization from "../images/talents/Rogue/Progression/spec2/DualWieldSpecialization.jpg";
import ImprovedSliceNDice from "../images/talents/Rogue/Progression/spec2/ImprovedSliceNDice.jpg";
import Riposte from "../images/talents/Rogue/Progression/spec2/Riposte.jpg";
import BladeFlurry from "../images/talents/Rogue/Progression/spec2/BladeFlurry.jpg";
import Endurance from "../images/talents/Rogue/Progression/spec2/Endurance.jpg";
import ImprovedSprint from "../images/talents/Rogue/Progression/spec2/ImprovedSprint.jpg";
import SurpriseAttacks from "../images/talents/Rogue/Progression/spec2/SurpriseAttacks.jpg";
import BladeTwisting from "../images/talents/Rogue/Progression/spec2/BladeTwisting.jpg";
import FistWeaponSpecialization from "../images/talents/Rogue/Progression/spec2/FistWeaponSpecialization.jpg";
import LightningReflexes from "../images/talents/Rogue/Progression/spec2/LightningReflexes.jpg";
import SwordSpecialization from "../images/talents/Rogue/Progression/spec2/SwordSpecialization.jpg";
import CombatPotency from "../images/talents/Rogue/Progression/spec2/CombatPotency.jpg";
import ImprovedGouge from "../images/talents/Rogue/Progression/spec2/ImprovedGouge.jpg";
import MaceSpecialization from "../images/talents/Rogue/Progression/spec2/MaceSpecialization.jpg";
import Vitality from "../images/talents/Rogue/Progression/spec2/Vitality.jpg";
import DaggerSpecialization from "../images/talents/Rogue/Progression/spec2/DaggerSpecialization.jpg";
import ImprovedKick from "../images/talents/Rogue/Progression/spec2/ImprovedKick.jpg";
import NervesOfSteel from "../images/talents/Rogue/Progression/spec2/NervesOfSteel.jpg";
import WeaponExpertise from "../images/talents/Rogue/Progression/spec2/WeaponExpertise.jpg";

//spec3

import Camouflage from "../images/talents/Rogue/Progression/spec3/Camouflage.jpg";
import Elusiveness from "../images/talents/Rogue/Progression/spec3/Elusiveness.jpg";
import ImprovedAmbush from "../images/talents/Rogue/Progression/spec3/ImprovedAmbush.jpg";
import Premeditation from "../images/talents/Rogue/Progression/spec3/Premeditation.jpg";
import SinisterCalling from "../images/talents/Rogue/Progression/spec3/SinisterCalling.jpg";
import CheatDeath from "../images/talents/Rogue/Progression/spec3/CheatDeath.jpg";
import EnvelopingShadows from "../images/talents/Rogue/Progression/spec3/EnvelopingShadows.jpg";
import Initiative from "../images/talents/Rogue/Progression/spec3/Initiative.jpg";
import Preparation from "../images/talents/Rogue/Progression/spec3/Preparation.jpg";
import SleightOfHand from "../images/talents/Rogue/Progression/spec3/SleightOfHand.jpg";
import Deadliness from "../images/talents/Rogue/Progression/spec3/Deadliness.jpg";
import GhostlyStrike from "../images/talents/Rogue/Progression/spec3/GhostlyStrike.jpg";
import MasterOfDeception from "../images/talents/Rogue/Progression/spec3/MasterOfDeception.jpg";
import SerratedBlades from "../images/talents/Rogue/Progression/spec3/SerratedBlades.jpg";
import DirtyDeeds from "../images/talents/Rogue/Progression/spec3/DirtyDeeds.jpg";
import HeightenedSenses from "../images/talents/Rogue/Progression/spec3/HeightenedSenses.jpg";
import MasterOfSubtlety from "../images/talents/Rogue/Progression/spec3/MasterOfSubtlety.jpg";
import Setup from "../images/talents/Rogue/Progression/spec3/Setup.jpg";
import DirtyTricks from "../images/talents/Rogue/Progression/spec3/DirtyTricks.jpg";
import Hemorrhage from "../images/talents/Rogue/Progression/spec3/Hemorrhage.jpg";
import Opportunity from "../images/talents/Rogue/Progression/spec3/Opportunity.jpg";
import Shadowstep from "../images/talents/Rogue/Progression/spec3/Shadowstep.jpg";

let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class RogueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rebuildToolTip() {
    ReactTooltip.rebuild();
  }

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
    toolTipStepper = Rogue[toolTipIDChecker - 1];

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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq2Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq3Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                      '[id*="prioReq4Spec3"]'
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
                .querySelector('[id*="subsReq1Spec3"]')
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
                  arrow.src = "assets/images/DownGoldSmall.png";
                  break;
                case "medArrow":
                  arrow.src = "assets/images/DownGoldMedium.png";
                  break;
                case "lgArrow":
                  arrow.src = "assets/images/DownGoldLarge.png";
                  break;
                case "angleArrow":
                  arrow.src = "assets/images/AngleArrowGold.png";
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
              spec3Req35Output[g].nextElementSibling.id.includes(
                "prioReq3Spec3"
              ) &&
              document
                .querySelector('[id*="subsReq3Spec3"]')
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
        document.getElementById(
          "point-counter1"
        ).innerText = `(${iSpec1})`;

        addGreenBorderSpec1();
      }
      //if user clicked button in spec 2 tree update point counter for spec 2
      else if (specString[4] === "2") {
        console.log("Point used in spec 2");
        iSpec2 = iSpec2 + 1;
        document.getElementById(
          "point-counter2"
        ).innerText = `(${iSpec2})`;

        addGreenBorderSpec2();
      }
      //if user clicked button in spec 3 tree update point counter for spec 3
      else if (specString[4] === "3") {
        console.log("Point used in spec 3");
        iSpec3 = iSpec3 + 1;
        document.getElementById(
          "point-counter3"
        ).innerText = `(${iSpec3})`;

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
            document.getElementById(
              "point-counter1"
            ).innerText = `(${iSpec1})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec1 = iSpec1 - 1;
            i = 61;
            document.getElementById(
              "point-counter1"
            ).innerText = `(${iSpec1})`;
            document.getElementById("total-points").innerText = `${i}`;
          }
        }
        if (specString[4] === "2") {
          if (loopHappenedBefore === false) {
            iSpec2 = iSpec2 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById(
              "point-counter2"
            ).innerText = `(${iSpec2})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec2 = iSpec2 - 1;
            i = 61;
            document.getElementById(
              "point-counter2"
            ).innerText = `(${iSpec2})`;
            document.getElementById("total-points").innerText = `${i}`;
          }
        }
        if (specString[4] === "3") {
          if (loopHappenedBefore === false) {
            iSpec3 = iSpec3 - 1;
            i = 61;
            loopHappenedBefore = true;
            document.getElementById(
              "point-counter3"
            ).innerText = `(${iSpec3})`;
            document.getElementById("total-points").innerText = `${i}`;
          } else {
            iSpec3 = iSpec3 - 1;
            i = 61;
            document.getElementById(
              "point-counter3"
            ).innerText = `(${iSpec3})`;
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

        document.getElementById(
          "point-counter1"
        ).innerText = `(${iSpec1})`;
        removeGreenBorderSpec1();
        turnArrowSilverSpec1();
      } else if (specString[4] === "2") {
        console.log("Point taken from spec 2");
        if (iSpec2 > 0) {
          iSpec2 = iSpec2 - 1;
        }
        document.getElementById(
          "point-counter2"
        ).innerText = `(${iSpec2})`;
        removeGreenBorderSpec2();
      } else if (specString[4] === "3") {
        console.log("Point taken from spec 3");
        if (iSpec3 > 0) {
          iSpec3 = iSpec3 - 1;
          document.getElementById(
            "point-counter3"
          ).innerText = `(${iSpec3})`;
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
      toolTipStepper = Rogue[toolTipIDChecker - 1];
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


  componentDidMount(){
    const anchor = document.getElementsByClassName("btn")[0];
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div
        style={{ position: "relative", maxWidth: "1010px" }}
        onContextMenu={(e) => e.preventDefault()}
        className="frame-wrapper mx-auto"
        id="Rogue"
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
              className="btn btn-success btn-rogue mb-2 mt-2"
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
              whiteSpace: "nowrap"
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col1"
          >
            <h5 id="spec1"
              style={{display: "inline-block"}}
            >
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec1Logo}
              />
              Assassination
            </h5>
            <h5 style={{ color: "white", display: "inline-block", marginLeft: "2px" }} id="point-counter1">
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
                    ReactTooltip.show(this.ImprovedEviscerateToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedEviscerateToolTip = ref)}
                  data-tip={Rogue[0].toolTip[0]}
                  id="1"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={ImprovedEviscerate}
                  alt=""
                />

                <span className="talentPoints req-00-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.RemorselessAttacksToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.RemorselessAttacksToolTip = ref)}
                  data-tip={Rogue[1].toolTip[0]}
                  id="2"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={RemorselessAttacks}
                  alt=""
                />

                <span className="talentPoints req-00-s1">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MaliceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MaliceToolTip = ref)}
                  data-tip={Rogue[2].toolTip[0]}
                  id="3"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={Malice}
                  alt=""
                />

                <span id="subsReq1Spec1" className="talentPoints req-00-s1">
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
                    ReactTooltip.show(this.ruthlessnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ruthlessnessToolTip = ref)}
                  data-tip={Rogue[3].toolTip[0]}
                  id="4"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ruthlessness}
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
                    ReactTooltip.show(this.MurderToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MurderToolTip = ref)}
                  data-tip={Rogue[4].toolTip[0]}
                  id="5"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Murder}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.PuncturingWoundsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.PuncturingWoundsToolTip = ref)}
                  data-tip={Rogue[5].toolTip[0]}
                  id="6"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={PuncturingWounds}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/3</span>
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
                    ReactTooltip.show(this.RelentlessStrikesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.RelentlessStrikesToolTip = ref)}
                  data-tip={Rogue[6].toolTip[0]}
                  id="7"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={RelentlessStrikes}
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
                    ReactTooltip.show(this.ImprovedExposeArmorToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedExposeArmorToolTip = ref)}
                  data-tip={Rogue[7].toolTip[0]}
                  id="8"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedExposeArmor}
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
                    ReactTooltip.show(this.LethalityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.LethalityToolTip = ref)}
                  data-tip={Rogue[8].toolTip[0]}
                  id="9"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Lethality}
                  alt=""
                />

                <span id="prioReq1Spec1" className="talentPoints req-10-s1">
                  0/5
                </span>
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
                    ReactTooltip.show(this.VilePoisonsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.VilePoisonsToolTip = ref)}
                  data-tip={Rogue[9].toolTip[0]}
                  id="10"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={VilePoisons}
                  alt=""
                />

                <span className="talentPoints req-15-s1">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedPoisonsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedPoisonsToolTip = ref)}
                  data-tip={Rogue[10].toolTip[0]}
                  id="11"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedPoisons}
                  alt=""
                />

                <span className="talentPoints req-15-s1">0/5</span>
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
                    ReactTooltip.show(this.FleetFootedToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FleetFootedToolTip = ref)}
                  data-tip={Rogue[11].toolTip[0]}
                  id="12"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={FleetFooted}
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
                    ReactTooltip.show(this.ColdBloodToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ColdBloodToolTip = ref)}
                  data-tip={Rogue[12].toolTip[0]}
                  id="13"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ColdBlood}
                  alt=""
                />

                <span id="subsReq2Spec1" className="talentPoints req-20-s1">
                  0/1
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq2Spec1"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedKidneyShotToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedKidneyShotToolTip = ref)}
                  data-tip={Rogue[13].toolTip[0]}
                  id="14"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedKidneyShot}
                  alt=""
                />

                <span className="talentPoints req-20-s1">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.QuickRecoveryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.QuickRecoveryToolTip = ref)}
                  data-tip={Rogue[14].toolTip[0]}
                  id="15"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={QuickRecovery}
                  alt=""
                />

                <span className="talentPoints req-20-s1">0/2</span>
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
                    ReactTooltip.show(this.SealFateToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SealFateToolTip = ref)}
                  data-tip={Rogue[15].toolTip[0]}
                  id="16"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={SealFate}
                  alt=""
                />

                <span id="prioReq2Spec1" className="talentPoints req-25-s1">
                  0/5
                </span>
              </div>

              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.MasterPoisonerToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MasterPoisonerToolTip = ref)}
                  data-tip={Rogue[16].toolTip[0]}
                  id="17"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={MasterPoisoner}
                  alt=""
                />

                <span className="talentPoints req-25-s1">0/2</span>
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
                    ReactTooltip.show(this.VigorToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.VigorToolTip = ref)}
                  data-tip={Rogue[17].toolTip[0]}
                  id="18"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Vigor}
                  alt=""
                />

                <span className="talentPoints req-30-s1" id="subsReq3Spec1">
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
                    ReactTooltip.show(this.DeadenedNervesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DeadenedNervesToolTip = ref)}
                  data-tip={Rogue[18].toolTip[0]}
                  id="19"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={DeadenedNerves}
                  alt=""
                />

                <span className="talentPoints req-30-s1">0/5</span>
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
                    ReactTooltip.show(this.FindWeaknessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FindWeaknessToolTip = ref)}
                  data-tip={Rogue[19].toolTip[0]}
                  id="20"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={FindWeakness}
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
                    ReactTooltip.show(this.MutilateToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MutilateToolTip = ref)}
                  data-tip={Rogue[20].toolTip[0]}
                  id="21"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Mutilate}
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
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col2"
          >
            <h5 id="spec2"
              style={{display: "inline-block"}}
            >
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec2Logo}
              />
              Combat
            </h5>
            <h5 style={{ color: "white", display: "inline-block", marginLeft: "2px" }} id="point-counter2">
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
                    ReactTooltip.show(this.ImprovedGougeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedGougeToolTip = ref)}
                  data-tip={Rogue[21].toolTip[0]}
                  id="22"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={ImprovedGouge}
                  alt=""
                />

                <span className="talentPoints req-00-s2">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedSinisterStrikeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedSinisterStrikeToolTip = ref)}
                  data-tip={Rogue[22].toolTip[0]}
                  id="23"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={ImprovedSinisterStrike}
                  alt=""
                />

                <span className="talentPoints req-00-s2">0/2</span>
              </div>
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
                  data-tip={Rogue[23].toolTip[0]}
                  id="24"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={LightningReflexes}
                  alt=""
                />

                <span className="talentPoints req-00-s2">0/5</span>
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
                    ReactTooltip.show(this.ImprovedSliceNDiceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedSliceNDiceToolTip = ref)}
                  data-tip={Rogue[24].toolTip[0]}
                  id="25"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedSliceNDice}
                  alt=""
                />

                <span className="talentPoints req-05-s2">0/3</span>
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
                  data-tip={Rogue[25].toolTip[0]}
                  id="26"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Deflection}
                  alt=""
                />

                <span id="subsReq1Spec2" className="talentPoints req-05-s2">
                  0/5
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
                    ReactTooltip.show(this.PrecisionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.PrecisionToolTip = ref)}
                  data-tip={Rogue[26].toolTip[0]}
                  id="27"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Precision}
                  alt=""
                />

                <span id="subsReq2Spec2" className="talentPoints req-05-s2">
                  0/5
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq2Spec2"
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
                    ReactTooltip.show(this.EnduranceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.EnduranceToolTip = ref)}
                  data-tip={Rogue[27].toolTip[0]}
                  id="28"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Endurance}
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
                    ReactTooltip.show(this.RiposteToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.RiposteToolTip = ref)}
                  data-tip={Rogue[28].toolTip[0]}
                  id="29"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Riposte}
                  alt=""
                />

                <span id="prioReq1Spec2" className="talentPoints req-10-s2">
                  0/1
                </span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedSprintToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedSprintToolTip = ref)}
                  data-tip={Rogue[29].toolTip[0]}
                  id="30"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedSprint}
                  alt=""
                />

                <span className="talentPoints req-10-s2">0/2</span>
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
                    ReactTooltip.show(this.ImprovedKickToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedKickToolTip = ref)}
                  data-tip={Rogue[30].toolTip[0]}
                  id="31"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ImprovedKick}
                  alt=""
                />

                <span className="talentPoints req-15-s2">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.DaggerSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DaggerSpecializationToolTip = ref)}
                  data-tip={Rogue[31].toolTip[0]}
                  id="32"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={DaggerSpecialization}
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
                    ReactTooltip.show(this.DualWieldSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DualWieldSpecializationToolTip = ref)}
                  data-tip={Rogue[32].toolTip[0]}
                  id="33"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={DualWieldSpecialization}
                  alt=""
                />

                <span id="prioReq2Spec2" className="talentPoints req-15-s2">
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
                    ReactTooltip.show(this.MaceSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MaceSpecializationToolTip = ref)}
                  data-tip={Rogue[33].toolTip[0]}
                  id="34"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={MaceSpecialization}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.BladeFlurryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BladeFlurryToolTip = ref)}
                  data-tip={Rogue[34].toolTip[0]}
                  id="35"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={BladeFlurry}
                  alt=""
                />

                <span id="subsReq3Spec2" className="talentPoints req-20-s2">
                  0/1
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq3Spec2"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SwordSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SwordSpecializationToolTip = ref)}
                  data-tip={Rogue[35].toolTip[0]}
                  id="36"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SwordSpecialization}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FistWeaponSpecializationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FistWeaponSpecializationToolTip = ref)}
                  data-tip={Rogue[36].toolTip[0]}
                  id="37"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={FistWeaponSpecialization}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/5</span>
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
                    ReactTooltip.show(this.BladeTwistingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.BladeTwistingToolTip = ref)}
                  data-tip={Rogue[37].toolTip[0]}
                  id="38"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={BladeTwisting}
                  alt=""
                />

                <span className="talentPoints req-25-s2">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.WeaponExpertiseToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.WeaponExpertiseToolTip = ref)}
                  data-tip={Rogue[38].toolTip[0]}
                  id="39"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={WeaponExpertise}
                  alt=""
                />

                <span id="prioReq3Spec2" className="talentPoints req-25-s2">
                  0/2
                </span>
              </div>

              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.AggressionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.AggressionToolTip = ref)}
                  data-tip={Rogue[39].toolTip[0]}
                  id="40"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Aggression}
                  alt=""
                />

                <span className="talentPoints req-25-s2">0/3</span>
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
                    ReactTooltip.show(this.VitalityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.VitalityToolTip = ref)}
                  data-tip={Rogue[40].toolTip[0]}
                  id="41"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Vitality}
                  alt=""
                />

                <span className="talentPoints req-30-s2">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.AdrenalineRushToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.AdrenalineRushToolTip = ref)}
                  data-tip={Rogue[41].toolTip[0]}
                  id="42"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={AdrenalineRush}
                  alt=""
                />

                <span id="subsReq4Spec2" className="talentPoints req-30-s2">
                  0/1
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq4Spec2"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.NervesOfSteelToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.NervesOfSteelToolTip = ref)}
                  data-tip={Rogue[42].toolTip[0]}
                  id="43"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={NervesOfSteel}
                  alt=""
                />

                <span className="talentPoints req-30-s2">0/2</span>
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
                    ReactTooltip.show(this.CombatPotencyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CombatPotencyToolTip = ref)}
                  data-tip={Rogue[43].toolTip[0]}
                  id="44"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={CombatPotency}
                  alt=""
                />

                <span className="talentPoints req-35-s2">0/5</span>
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
                    ReactTooltip.show(this.SurpriseAttacksToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SurpriseAttacksToolTip = ref)}
                  data-tip={Rogue[44].toolTip[0]}
                  id="45"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SurpriseAttacks}
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
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
            className="mb-2 mx-auto col-10 col-sm-8 col-xs-4 col-md-6 col-lg-4 col-xl-4 talent-frame talent-bg"
            id="Col3"
          >
            <h5 id="spec3"
              style={{display: "inline-block"}}
            >
              <img
                style={{
                  marginRight: ".5rem",
                  borderRadius: "2px",
                  border: "1.3px solid white",
                }}
                src={spec3Logo}
              />
              Subtlety
            </h5>
            <h5 style={{ color: "white", display: "inline-block", marginLeft: "2px" }} id="point-counter3">
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
                    ReactTooltip.show(this.MasterOfDeceptionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MasterOfDeceptionToolTip = ref)}
                  data-tip={Rogue[45].toolTip[0]}
                  id="46"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={MasterOfDeception}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.OpportunityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.OpportunityToolTip = ref)}
                  data-tip={Rogue[46].toolTip[0]}
                  id="47"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={Opportunity}
                  alt=""
                />

                <span className="talentPoints req-00-s3">0/5</span>
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
                    ReactTooltip.show(this.SleightOfHandToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SleightOfHandToolTip = ref)}
                  data-tip={Rogue[47].toolTip[0]}
                  id="48"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={SleightOfHand}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.DirtyTricksToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DirtyTricksToolTip = ref)}
                  data-tip={Rogue[48].toolTip[0]}
                  id="49"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={DirtyTricks}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/2</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CamouflageToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CamouflageToolTip = ref)}
                  data-tip={Rogue[49].toolTip[0]}
                  id="50"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Camouflage}
                  alt=""
                />

                <span className="talentPoints req-05-s3">0/5</span>
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
                    ReactTooltip.show(this.InitiativeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.InitiativeToolTip = ref)}
                  data-tip={Rogue[50].toolTip[0]}
                  id="51"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Initiative}
                  alt=""
                />

                <span className="talentPoints req-10-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.GhostlyStrikeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.GhostlyStrikeToolTip = ref)}
                  data-tip={Rogue[51].toolTip[0]}
                  id="52"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={GhostlyStrike}
                  alt=""
                />

                <span className="talentPoints req-10-s3">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedAmbushToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedAmbushToolTip = ref)}
                  data-tip={Rogue[52].toolTip[0]}
                  id="53"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedAmbush}
                  alt=""
                />

                <span className="talentPoints req-10-s3">0/3</span>
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
                    ReactTooltip.show(this.SetupToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SetupToolTip = ref)}
                  data-tip={Rogue[53].toolTip[0]}
                  id="54"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Setup}
                  alt=""
                />

                <span className="talentPoints req-15-s3">0/3</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ElusivenessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ElusivenessToolTip = ref)}
                  data-tip={Rogue[54].toolTip[0]}
                  id="55"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Elusiveness}
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
                    ReactTooltip.show(this.SerratedBladesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SerratedBladesToolTip = ref)}
                  data-tip={Rogue[55].toolTip[0]}
                  id="56"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={SerratedBlades}
                  alt=""
                />

                <span id="subsReq1Spec3" className="talentPoints req-15-s3">
                  0/3
                </span>
                <img
                  className="angleArrow"
                  src={AngleArrowSilver}
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
                    ReactTooltip.show(this.HeightenedSensesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.HeightenedSensesToolTip = ref)}
                  data-tip={Rogue[56].toolTip[0]}
                  id="57"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={HeightenedSenses}
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
                    ReactTooltip.show(this.PreparationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.PreparationToolTip = ref)}
                  data-tip={Rogue[57].toolTip[0]}
                  id="58"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Preparation}
                  alt=""
                />

                <span id="subsReq2Spec3" className="talentPoints req-20-s3">
                  0/1
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
                    ReactTooltip.show(this.DirtyDeedsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DirtyDeedsToolTip = ref)}
                  data-tip={Rogue[58].toolTip[0]}
                  id="59"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={DirtyDeeds}
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
                    ReactTooltip.show(this.HemorrhageToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.HemorrhageToolTip = ref)}
                  data-tip={Rogue[59].toolTip[0]}
                  id="60"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Hemorrhage}
                  alt=""
                />

                <span id="prioReq1Spec3" className="talentPoints req-20-s3">
                  0/1
                </span>
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
                    ReactTooltip.show(this.MasterOfSubtletyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.MasterOfSubtletyToolTip = ref)}
                  data-tip={Rogue[60].toolTip[0]}
                  id="61"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={MasterOfSubtlety}
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
                    ReactTooltip.show(this.DeadlinessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.DeadlinessToolTip = ref)}
                  data-tip={Rogue[61].toolTip[0]}
                  id="62"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Deadliness}
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
                    ReactTooltip.show(this.EnvelopingShadowsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.EnvelopingShadowsToolTip = ref)}
                  data-tip={Rogue[62].toolTip[0]}
                  id="63"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={EnvelopingShadows}
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
                    ReactTooltip.show(this.PremeditationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.PremeditationToolTip = ref)}
                  data-tip={Rogue[63].toolTip[0]}
                  id="64"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Premeditation}
                  alt=""
                />

                <span
                  id="prioReq2Spec3 subsReq3Spec3"
                  className="talentPoints req-30-s3"
                >
                  0/1
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq3Spec3"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.CheatDeathToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.CheatDeathToolTip = ref)}
                  data-tip={Rogue[64].toolTip[0]}
                  id="65"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={CheatDeath}
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
                    ReactTooltip.show(this.SinisterCallingToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.SinisterCallingToolTip = ref)}
                  data-tip={Rogue[65].toolTip[0]}
                  id="66"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={SinisterCalling}
                  alt=""
                />

                <span id="prioReq3Spec3" className="talentPoints req-35-s3">
                  0/5
                </span>
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
                    ReactTooltip.show(this.ShadowstepToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ShadowstepToolTip = ref)}
                  data-tip={Rogue[66].toolTip[0]}
                  id="67"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Shadowstep}
                  alt=""
                />

                <span className="talentPoints req-40-s3">0/1</span>
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

<ReactTooltip html={true} />;

export default RogueComponent;
