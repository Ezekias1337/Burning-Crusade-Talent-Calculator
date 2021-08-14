
import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Druid } from "../talentinfo/Druid";
import spec1BG from "../images/talents/Druid/Background/Balance.jpg";
import spec2BG from "../images/talents/Druid/Background/FeralCombat.jpg";
import spec3BG from "../images/talents/Druid/Background/Restoration.jpg";
import spec1Logo from "../images/talents/Druid/Spec1Logo.jpg";
import spec2Logo from "../images/talents/Druid/Spec2Logo.jpg";
import spec3Logo from "../images/talents/Druid/Spec3Logo.jpg";

/* 
DON'T FORGET TO IMPORT BACKGROUND FOR EACH SPEC
Things to update across all components
1.) Hardcoded images => Imported Images ✔
a.) Don't forget Arrows ✔
2.) Window.event.button[0] to handle left click on inactive talents ✔
3.) All functions handling Arrows
  a.) arrowSizeParse in removeGreenBorder (s1,s2,s3) ✔
  b.) turnArrowGoldOnClick ✔
  c.) turnArrowGoldIndirectly (s1,s2,s3) ✔
  d.) window.event.button[2] where code looks at arrows source and subsequent switch ✔
      in code directly after .nextElementSibling.id.includes("Spec") 
      1.) first if statement (reference classname instead of src) ✔
      2.) switch directly after (change .src = to reference imported img) ✔
  e.) Reset Function (the for of loops, don't forget left/right/angle arrow) ✔
4.) Import Background image for each spec ✔
5.) Change spec talent frame bootstrap breakpoints ✔
6.) Update formulas for mobile ✔
7.) Update HTML for Tooltip ✔
8.) add mb-3 to talent frame wrapper div ✔

*/

//consistent among classes

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
import BalanceOfPower from "../images/talents/Druid/Progression/spec1/BalanceOfPower.jpg";
import Dreamstate from "../images/talents/Druid/Progression/spec1/Dreamstate.jpg";
import ImprovedMoonfire from "../images/talents/Druid/Progression/spec1/ImprovedMoonfire.jpg";
import Moonfury from "../images/talents/Druid/Progression/spec1/Moonfury.jpg";
import NaturesReach from "../images/talents/Druid/Progression/spec1/NaturesReach.jpg";
import Brambles from "../images/talents/Druid/Progression/spec1/Brambles.jpg";
import FocusedStarlight from "../images/talents/Druid/Progression/spec1/FocusedStarlight.jpg";
import InsectSwarm from "../images/talents/Druid/Progression/spec1/InsectSwarm.jpg";
import MoonkinForm from "../images/talents/Druid/Progression/spec1/MoonkinForm.jpg";
import CelestialFocus from "../images/talents/Druid/Progression/spec1/CelestialFocus.jpg";
import ForceOfNature from "../images/talents/Druid/Progression/spec1/ForceOfNature.jpg";
import LunarGuidance from "../images/talents/Druid/Progression/spec1/LunarGuidance.jpg";
import NaturesGrace from "../images/talents/Druid/Progression/spec1/NaturesGrace.jpg";
import Vengeance from "../images/talents/Druid/Progression/spec1/Vengeance.jpg";
import ControlOfNature from "../images/talents/Druid/Progression/spec1/ControlOfNature.jpg";
import ImprovedFaerieFire from "../images/talents/Druid/Progression/spec1/ImprovedFaerieFire.jpg";
import MoonGlow from "../images/talents/Druid/Progression/spec1/MoonGlow.jpg";
import NaturesGrasp from "../images/talents/Druid/Progression/spec1/NaturesGrasp.jpg";
import WrathOfCenarius from "../images/talents/Druid/Progression/spec1/WrathOfCenarius.jpg";
import StarlightWrath from "../images/talents/Druid/Progression/spec1/StarlightWrath.jpg";

//spec2

import BrutalImpact from "../images/talents/Druid/Progression/spec2/BrutalImpact.jpg";
import FeralSwiftness from "../images/talents/Druid/Progression/spec2/FeralSwiftness.jpg";
import NurturingInstinct from "../images/talents/Druid/Progression/spec2/NurturingInstinct.jpg";
import SavageFury from "../images/talents/Druid/Progression/spec2/SavageFury.jpg";
import FaerieFireFeral from "../images/talents/Druid/Progression/spec2/FaerieFire(Feral).jpg";
import Ferocity from "../images/talents/Druid/Progression/spec2/Ferocity.jpg";
import PredatoryInstincts from "../images/talents/Druid/Progression/spec2/PredatoryInstincts.jpg";
import SharpenedClaws from "../images/talents/Druid/Progression/spec2/SharpenedClaws.jpg";
import FeralAggression from "../images/talents/Druid/Progression/spec2/FeralAggression.jpg";
import HeartOfTheWild from "../images/talents/Druid/Progression/spec2/HeartOfTheWild.jpg";
import PredatoryStrikes from "../images/talents/Druid/Progression/spec2/PredatoryStrikes.jpg";
import ShreddingAttacks from "../images/talents/Druid/Progression/spec2/ShreddingAttacks.jpg";
import FeralCharge from "../images/talents/Druid/Progression/spec2/FeralCharge.jpg";
import LeaderOfThePack from "../images/talents/Druid/Progression/spec2/LeaderOfThePack.jpg";
import PrimalFury from "../images/talents/Druid/Progression/spec2/PrimalFury.jpg";
import SurvivalOfTheFittest from "../images/talents/Druid/Progression/spec2/SurvivalOfTheFittest.jpg";
import FeralInstinct from "../images/talents/Druid/Progression/spec2/FeralInstinct.jpg";
import Mangle from "../images/talents/Druid/Progression/spec2/Mangle.jpg";
import PrimalTenacity from "../images/talents/Druid/Progression/spec2/PrimalTenacity.jpg";
import ThickHide from "../images/talents/Druid/Progression/spec2/ThickHide.jpg";

//spec3

import EmpoweredRejuvenation from "../images/talents/Druid/Progression/spec3/EmpoweredRejuvenation.jpg";
import ImprovedRegrowth from "../images/talents/Druid/Progression/spec3/ImprovedRegrowth.jpg";
import NaturalPerfection from "../images/talents/Druid/Progression/spec3/NaturalPerfection.jpg";
import OmenOfClarity from "../images/talents/Druid/Progression/spec3/OmenOfClarity.jpg";
import Empoweredtouch from "../images/talents/Druid/Progression/spec3/Empoweredtouch.jpg";
import ImprovedRejuvenation from "../images/talents/Druid/Progression/spec3/ImprovedRejuvenation.jpg";
import NaturalShapeshifter from "../images/talents/Druid/Progression/spec3/NaturalShapeshifter.jpg";
import Subtlety from "../images/talents/Druid/Progression/spec3/Subtlety.jpg";
import Furor from "../images/talents/Druid/Progression/spec3/Furor.jpg";
import ImprovedTranquility from "../images/talents/Druid/Progression/spec3/ImprovedTranquility.jpg";
import Naturalist from "../images/talents/Druid/Progression/spec3/Naturalist.jpg";
import Swiftmend from "../images/talents/Druid/Progression/spec3/Swiftmend.jpg";
import GiftOfNature from "../images/talents/Druid/Progression/spec3/GiftOfNature.jpg";
import Intensity from "../images/talents/Druid/Progression/spec3/Intensity.jpg";
import NaturesFocus from "../images/talents/Druid/Progression/spec3/NaturesFocus.jpg";
import TranquilSpirit from "../images/talents/Druid/Progression/spec3/TranquilSpirit.jpg";
import ImprovedMarkOfTheWild from "../images/talents/Druid/Progression/spec3/ImprovedMarkOfTheWild.jpg";
import LivingSpirit from "../images/talents/Druid/Progression/spec3/LivingSpirit.jpg";
import NaturesSwiftness from "../images/talents/Druid/Progression/spec3/NaturesSwiftness.jpg";
import TreeOfLife from "../images/talents/Druid/Progression/spec3/TreeOfLife.jpg";

//(Adjust section at line 6065)
let i = 0;
let iSpec1 = 0;
let iSpec2 = 0;
let iSpec3 = 0;
let loopHappenedBefore = false;

class DruidComponent extends Component {
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
    toolTipStepper = Druid[toolTipIDChecker - 1];

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

    let spec1Req0 = [];
    let spec1Req5 = [];
    let spec1Req10 = [];
    let spec1Req15 = [];
    let spec1Req20 = [];
    let spec1Req25 = [];
    let spec1Req30 = [];
    let spec1Req35 = [];
    let spec1Req40 = [];

    let spec1Req0Output = [];
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
        console.log("spec1Req5", spec1Req5);
        for (let g = 0; g < spec1Req5.length; g++) {
          spec1Req5Output.push(spec1Req5[g].previousElementSibling);
        }
        console.log("spec1Req5Output", spec1Req5Output);
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
      let shouldArrowBeSilver = "";

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

      if (iSpec1 < 4) {
        spec1Req0 = document.getElementsByClassName("req-00-s1");

        for (let g = 0; g < spec1Req0.length; g++) {
          if (spec1Req0[g].id) {
            spanID = spec1Req0[g].id;
            console.log("spanID", spanID);

            idMatcherParse();
            arrowSizeParse();
          }
          spec1Req0Output.push(spec1Req0[g].previousElementSibling);
        }
        console.log(spec1Req0Output);
        for (let g = 0; g < spec1Req0Output.length; g++) {
          if (
            spec1Req0Output[g].className.includes("active-talent") &&
            spec1Req0Output[g].nextElementSibling.id.includes("prio")
          ) {
            spec1Req0Output[g].className =
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
        console.log("spanID", spanID);

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

      if (iSpec2 === 30) {
        spec2Req30 = document.getElementsByClassName("req-30-s2");

        for (let g = 0; g < spec2Req30.length; g++) {
          if (spec2Req30[g].id) {
            spanID = spec2Req30[g].id;
            idMatcherParse();
            arrowSizeParse();
          }
          spec2Req30Output.push(spec2Req30[g].previousElementSibling);
        }
        console.log("spec2Req30Output", spec2Req30Output);
        for (let g = 0; g < spec2Req30Output.length; g++) {
          if (
            spec2Req30Output[g].className.includes("active-talent") &&
            spec2Req30Output[g].nextElementSibling.id.includes("prio")
          ) {
            spec2Req30Output[g].className =
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
        console.log("spec2Req30Output", spec2Req30Output);
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
            console.log("altStr", altStr);

            switch (altStr) {
              case "00":
                buttonsArray = document.getElementsByClassName("req-00-s1");
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
                    console.log("Orale you know");
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
              if (spec2Req30Output[g].className.includes("maxeds")) {
                spec2Req30Output[g].className =
                  "spec2 talentButton maxeds req-active";
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
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq1Spec1"
        ) &&
        !(document.getElementById("prioReq1Spec1").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq2Spec1"
        ) &&
        !(document.getElementById("prioReq2Spec1").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq3Spec1"
        ) &&
        !(document.getElementById("prioReq3Spec1").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq4Spec1"
        ) &&
        !(document.getElementById("prioReq4Spec1").innerText[0] === "0")
      ) {
        return;
      }
      //spec 2
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq1Spec2"
        ) &&
        !(document.getElementById("prioReq1Spec2").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq2Spec2"
        ) &&
        !(document.getElementById("prioReq2Spec2").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq3Spec2"
        ) &&
        !(document.getElementById("prioReq3Spec2").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq4Spec2"
        ) &&
        !(document.getElementById("prioReq4Spec2").innerText[0] === "0")
      ) {
        return;
      }
      //spec 3
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq1Spec3"
        ) &&
        !(document.getElementById("prioReq1Spec3").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq2Spec3"
        ) &&
        !(document.getElementById("prioReq2Spec3").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq3Spec3"
        ) &&
        !(document.getElementById("prioReq3Spec3").innerText[0] === "0")
      ) {
        return;
      }
      if (
        window.event.srcElement.nextElementSibling.nextElementSibling.id.includes(
          "subsReq4Spec3"
        ) &&
        !(document.getElementById("prioReq4Spec3").innerText[0] === "0")
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
      toolTipStepper = Druid[toolTipIDChecker - 1];
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
        id="Druid"
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
              className="btn btn-success mb-2 mt-2"
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
              Balance
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
                    ReactTooltip.show(this.StarlightWrathToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.StarlightWrathToolTip = ref}
                  data-tip={Druid[0].toolTip[0]}
                  id="1"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={StarlightWrath}
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
                    ReactTooltip.show(this.NaturesGraspToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturesGraspToolTip = ref}
                  data-tip={Druid[1].toolTip[0]}
                  id="2"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton active-talent req-active"
                  src={NaturesGrasp}
                  alt=""
                />

                <span id="subsReq1Spec1" className="talentPoints req-00-s1">
                  0/1
                </span>
                <img
                  className="rightArrow"
                  src={RightSilverSmall}
                  alt=""
                  id="arrwReq1Spec1"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedNaturesGraspToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedNaturesGraspToolTip = ref)}
                  data-tip={Druid[2].toolTip[0]}
                  id="3"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={NaturesGrasp}
                  alt=""
                />

                <span id="prioReq1Spec1" className="talentPoints req-00-s1">
                  0/4
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
                    ReactTooltip.show(this.ControlOfNatureToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ControlOfNatureToolTip = ref}
                  data-tip={Druid[3].toolTip[0]}
                  id="4"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ControlOfNature}
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
                    ReactTooltip.show(this.FocusedStarlightToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FocusedStarlightToolTip = ref}
                  data-tip={Druid[4].toolTip[0]}
                  id="5"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={FocusedStarlight}
                  alt=""
                />

                <span id="subsReq2Spec1" className="talentPoints req-05-s1">
                  0/2
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
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
                    ReactTooltip.show(this.ImprovedMoonfireToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedMoonfireToolTip = ref}
                  data-tip={Druid[5].toolTip[0]}
                  id="6"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedMoonfire}
                  alt=""
                />

                <span className="talentPoints req-05-s1">0/2</span>
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
                    ReactTooltip.show(this.BramblesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.BramblesToolTip = ref}
                  data-tip={Druid[6].toolTip[0]}
                  id="7"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Brambles}
                  alt=""
                />

                <span className="talentPoints req-10-s1">0/3</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.InsectSwarmToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.InsectSwarmToolTip = ref}
                  data-tip={Druid[7].toolTip[0]}
                  id="8"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={InsectSwarm}
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
                    ReactTooltip.show(this.NaturesReachToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturesReachToolTip = ref}
                  data-tip={Druid[8].toolTip[0]}
                  id="9"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={NaturesReach}
                  alt=""
                />

                <span className="talentPoints req-10-s1">0/2</span>
              </div>
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
                    ReactTooltip.show(this.VengeanceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.VengeanceToolTip = ref}
                  data-tip={Druid[9].toolTip[0]}
                  id="10"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Vengeance}
                  alt=""
                />

                <span id="prioReq2Spec1" className="talentPoints req-15-s1">
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
                    ReactTooltip.show(this.CelestialFocusToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.CelestialFocusToolTip = ref}
                  data-tip={Druid[10].toolTip[0]}
                  id="11"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={CelestialFocus}
                  alt=""
                />

                <span id="" className="talentPoints req-15-s1">
                  0/3
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
                    ReactTooltip.show(this.LunarGuidanceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.LunarGuidanceToolTip = ref}
                  data-tip={Druid[11].toolTip[0]}
                  id="12"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={LunarGuidance}
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
                    ReactTooltip.show(this.NaturesGraceToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturesGraceToolTip = ref}
                  data-tip={Druid[12].toolTip[0]}
                  id="13"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={NaturesGrace}
                  alt=""
                />

                <span id="subsReq3Spec1" className="talentPoints req-20-s1">
                  0/1
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
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
                    ReactTooltip.show(this.MoonGlowToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.MoonGlowToolTip = ref}
                  data-tip={Druid[13].toolTip[0]}
                  id="14"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={MoonGlow}
                  alt=""
                />

                <span className="talentPoints req-20-s1">0/3</span>
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
                    ReactTooltip.show(this.MoonfuryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.MoonfuryToolTip = ref}
                  data-tip={Druid[14].toolTip[0]}
                  id="15"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Moonfury}
                  alt=""
                />

                <span id="prioReq3Spec1" className="talentPoints req-25-s1">
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
                    ReactTooltip.show(this.BalanceOfPowerToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.BalanceOfPowerToolTip = ref}
                  data-tip={Druid[15].toolTip[0]}
                  id="16"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={BalanceOfPower}
                  alt=""
                />

                <span id="" className="talentPoints req-25-s1">
                  0/2
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
                    ReactTooltip.show(this.DreamstateToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.DreamstateToolTip = ref}
                  data-tip={Druid[16].toolTip[0]}
                  id="17"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={Dreamstate}
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
                    ReactTooltip.show(this.MoonkinFormToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.MoonkinFormToolTip = ref}
                  data-tip={Druid[17].toolTip[0]}
                  id="18"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={MoonkinForm}
                  alt=""
                />

                <span className="talentPoints req-30-s1">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedFaerieFireToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedFaerieFireToolTip = ref}
                  data-tip={Druid[18].toolTip[0]}
                  id="19"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ImprovedFaerieFire}
                  alt=""
                />

                <span className="talentPoints req-30-s1">0/3</span>
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
                    ReactTooltip.show(this.WrathOfCenariusToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.WrathOfCenariusToolTip = ref}
                  data-tip={Druid[19].toolTip[0]}
                  id="20"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={WrathOfCenarius}
                  alt=""
                />

                <span className="talentPoints req-35-s1">0/5</span>
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
                    ReactTooltip.show(this.ForceOfNatureToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ForceOfNatureToolTip = ref}
                  data-tip={Druid[20].toolTip[0]}
                  id="21"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec1 talentButton inactive-talent req-inactive"
                  src={ForceOfNature}
                  alt=""
                />

                <span className="talentPoints req-40-s1">0/1</span>
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
              Feral Combat
            </h5>
            <h5 style={{ color: "white", display: "inline-block", marginLeft: "2px" }} id="point-counter2">
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
                    ReactTooltip.show(this.FerocityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FerocityToolTip = ref}
                  data-tip={Druid[21].toolTip[0]}
                  id="22"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={Ferocity}
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
                    ReactTooltip.show(this.FeralAggressionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FeralAggressionToolTip = ref}
                  data-tip={Druid[22].toolTip[0]}
                  id="23"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton active-talent req-active"
                  src={FeralAggression}
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
                    ReactTooltip.show(this.FeralInstinctToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FeralInstinctToolTip = ref}
                  data-tip={Druid[23].toolTip[0]}
                  id="24"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={FeralInstinct}
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
                    ReactTooltip.show(this.BrutalImpactToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.BrutalImpactToolTip = ref}
                  data-tip={Druid[24].toolTip[0]}
                  id="25"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={BrutalImpact}
                  alt=""
                />

                <span className="talentPoints req-05-s2">0/2</span>
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
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ThickHideToolTip = ref}
                  data-tip={Druid[25].toolTip[0]}
                  id="26"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ThickHide}
                  alt=""
                />

                <span className="talentPoints req-05-s2">0/3</span>
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
                    ReactTooltip.show(this.FeralSwiftnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FeralSwiftnessToolTip = ref}
                  data-tip={Druid[26].toolTip[0]}
                  id="27"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={FeralSwiftness}
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
                    ReactTooltip.show(this.FeralChargeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FeralChargeToolTip = ref}
                  data-tip={Druid[27].toolTip[0]}
                  id="28"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={FeralCharge}
                  alt=""
                />

                <span className="talentPoints req-10-s2">0/1</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SharpenedClawsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.SharpenedClawsToolTip = ref}
                  data-tip={Druid[28].toolTip[0]}
                  id="29"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SharpenedClaws}
                  alt=""
                />

                <span id="subsReq1Spec2" className="talentPoints req-10-s2">
                  0/3
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq1Spec2"
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
                    ReactTooltip.show(this.ShreddingAttacksToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ShreddingAttacksToolTip = ref}
                  data-tip={Druid[29].toolTip[0]}
                  id="30"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={ShreddingAttacks}
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
                    ReactTooltip.show(this.PredatoryStrikesToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.PredatoryStrikesToolTip = ref}
                  data-tip={Druid[30].toolTip[0]}
                  id="31"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={PredatoryStrikes}
                  alt=""
                />

                <span id="subsReq2Spec2" className="talentPoints req-15-s2">
                  0/3
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
                    ReactTooltip.show(this.PrimalFuryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.PrimalFuryToolTip = ref}
                  data-tip={Druid[31].toolTip[0]}
                  id="32"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={PrimalFury}
                  alt=""
                />

                <span id="prioReq1Spec2" className="talentPoints req-15-s2">
                  0/2
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
                    ReactTooltip.show(this.SavageFuryToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.SavageFuryToolTip = ref}
                  data-tip={Druid[32].toolTip[0]}
                  id="33"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SavageFury}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.FaerieFireFeralToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.FaerieFireFeralToolTip = ref)}
                  data-tip={Druid[33].toolTip[0]}
                  id="34"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={FaerieFireFeral}
                  alt=""
                />

                <span id="subsReq2Spec2" className="talentPoints req-20-s2">
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
                    ReactTooltip.show(this.NurturingInstinctToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NurturingInstinctToolTip = ref}
                  data-tip={Druid[34].toolTip[0]}
                  id="35"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={NurturingInstinct}
                  alt=""
                />

                <span className="talentPoints req-20-s2">0/2</span>
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
                    ReactTooltip.show(this.HeartOfTheWildToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.HeartOfTheWildToolTip = ref}
                  data-tip={Druid[35].toolTip[0]}
                  id="36"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={HeartOfTheWild}
                  alt=""
                />

                <span id="prioReq2Spec2" className="talentPoints req-25-s2">
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
                    ReactTooltip.show(this.SurvivalOfTheFittestToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.SurvivalOfTheFittestToolTip = ref}
                  data-tip={Druid[36].toolTip[0]}
                  id="37"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={SurvivalOfTheFittest}
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
                    ReactTooltip.show(this.PrimalTenacityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.PrimalTenacityToolTip = ref}
                  data-tip={Druid[37].toolTip[0]}
                  id="38"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={PrimalTenacity}
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
                    ReactTooltip.show(this.LeaderOfThePackToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.LeaderOfThePackToolTip = ref}
                  data-tip={Druid[38].toolTip[0]}
                  id="39"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={LeaderOfThePack}
                  alt=""
                />

                <span
                  id="subsReq3Spec2 subsReq4Spec2"
                  className="talentPoints req-30-s2"
                >
                  0/1
                </span>
                <img
                  className="rightArrow"
                  src={RightSilverSmall}
                  alt=""
                  id="arrwReq3Spec2"
                />
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
                    ReactTooltip.show(this.ImprovedLeaderOfThePackToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage}
                  style={{ display: "none" }}
                  ref={(ref) => (this.ImprovedLeaderOfThePackToolTip = ref)}
                  data-tip={Druid[39].toolTip[0]}
                  id="40"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={LeaderOfThePack}
                  alt=""
                />

                <span id="prioReq3Spec2" className="talentPoints req-30-s2">
                  0/2
                </span>
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
                    ReactTooltip.show(this.PredatoryInstinctsToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.PredatoryInstinctsToolTip = ref}
                  data-tip={Druid[40].toolTip[0]}
                  id="41"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={PredatoryInstincts}
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
                    ReactTooltip.show(this.MangleToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.MangleToolTip = ref}
                  data-tip={Druid[41].toolTip[0]}
                  id="42"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec2 talentButton inactive-talent req-inactive"
                  src={Mangle}
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
              Restoration
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
                    ReactTooltip.show(this.ImprovedMarkOfTheWildToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedMarkOfTheWildToolTip = ref}
                  data-tip={Druid[42].toolTip[0]}
                  id="43"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={ImprovedMarkOfTheWild}
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
                    ReactTooltip.show(this.FurorToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.FurorToolTip = ref}
                  data-tip={Druid[43].toolTip[0]}
                  id="44"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton active-talent req-active"
                  src={Furor}
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
                    ReactTooltip.show(this.NaturalistToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturalistToolTip = ref}
                  data-tip={Druid[44].toolTip[0]}
                  id="45"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Naturalist}
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
                    ReactTooltip.show(this.NaturesFocusToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturesFocusToolTip = ref}
                  data-tip={Druid[45].toolTip[0]}
                  id="46"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={NaturesFocus}
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
                    ReactTooltip.show(this.NaturalShapeshifterToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturalShapeshifterToolTip = ref}
                  data-tip={Druid[46].toolTip[0]}
                  id="47"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={NaturalShapeshifter}
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
                    ReactTooltip.show(this.IntensityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.IntensityToolTip = ref}
                  data-tip={Druid[47].toolTip[0]}
                  id="48"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Intensity}
                  alt=""
                />

                <span id="subsReq1Spec3" className="talentPoints req-10-s3">
                  0/3
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq1Spec3"
                />
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.SubtletyToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.SubtletyToolTip = ref}
                  data-tip={Druid[48].toolTip[0]}
                  id="49"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Subtlety}
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
                    ReactTooltip.show(this.OmenOfClarityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.OmenOfClarityToolTip = ref}
                  data-tip={Druid[49].toolTip[0]}
                  id="50"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={OmenOfClarity}
                  alt=""
                />

                <span id="subsReq1Spec3" className="talentPoints req-10-s3">
                  0/1
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
                    ReactTooltip.show(this.TranquilSpiritToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.TranquilSpiritToolTip = ref}
                  data-tip={Druid[50].toolTip[0]}
                  id="51"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={TranquilSpirit}
                  alt=""
                />

                <span className="talentPoints req-15-s3">0/5</span>
              </div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedRejuvenationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedRejuvenationToolTip = ref}
                  data-tip={Druid[51].toolTip[0]}
                  id="52"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedRejuvenation}
                  alt=""
                />

                <span id="subsReq2Spec3" className="talentPoints req-15-s3">
                  0/3
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq2Spec3"
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
                    ReactTooltip.show(this.NaturesSwiftnessToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturesSwiftnessToolTip = ref}
                  data-tip={Druid[52].toolTip[0]}
                  id="53"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={NaturesSwiftness}
                  alt=""
                />

                <span id="prioReq1Spec3" className="talentPoints req-20-s3">
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
                    ReactTooltip.show(this.GiftOfNatureToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.GiftOfNatureToolTip = ref}
                  data-tip={Druid[53].toolTip[0]}
                  id="54"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={GiftOfNature}
                  alt=""
                />

                <span id="subsReq3Spec3" className="talentPoints req-20-s3">
                  0/5
                </span>
                <img
                  className="medArrow"
                  src={DownSilverMedium}
                  alt=""
                  id="arrwReq3Spec3"
                />
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedTranquilityToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedTranquilityToolTip = ref}
                  data-tip={Druid[54].toolTip[0]}
                  id="55"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedTranquility}
                  alt=""
                />

                <span id="prioReq1Spec3" className="talentPoints req-20-s3">
                  0/2
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
                    ReactTooltip.show(this.EmpoweredtouchToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.EmpoweredtouchToolTip = ref}
                  data-tip={Druid[55].toolTip[0]}
                  id="56"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Empoweredtouch}
                  alt=""
                />

                <span className="talentPoints req-25-s3">0/2</span>
              </div>
              <div className="col col-xs-3"></div>
              <div className="col col-xs-3">
                <img
                  onMouseEnter={this.displayMouseOverlayInnerElement}
                  onMouseLeave={this.hideMouseOverlayInnerElement}
                  onMouseDown={() => {
                    this.talentClick();
                    this.toolTipFunction();
                    ReactTooltip.show(this.ImprovedRegrowthToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.ImprovedRegrowthToolTip = ref}
                  data-tip={Druid[56].toolTip[0]}
                  id="57"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={ImprovedRegrowth}
                  alt=""
                />

                <span id="prioReq2Spec3" className="talentPoints req-25-s3">
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
                    ReactTooltip.show(this.LivingSpiritToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.LivingSpiritToolTip = ref}
                  data-tip={Druid[57].toolTip[0]}
                  id="58"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={LivingSpirit}
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
                    ReactTooltip.show(this.SwiftmendToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.SwiftmendToolTip = ref}
                  data-tip={Druid[58].toolTip[0]}
                  id="59"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={Swiftmend}
                  alt=""
                />

                <span id="prioReq3Spec3" className="talentPoints req-30-s3">
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
                    ReactTooltip.show(this.NaturalPerfectionToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.NaturalPerfectionToolTip = ref}
                  data-tip={Druid[59].toolTip[0]}
                  id="60"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={NaturalPerfection}
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
                    ReactTooltip.show(this.EmpoweredRejuvenationToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.EmpoweredRejuvenationToolTip = ref}
                  data-tip={Druid[60].toolTip[0]}
                  id="61"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={EmpoweredRejuvenation}
                  alt=""
                />

                <span id="subsReq4Spec3" className="talentPoints req-35-s3">
                  0/5
                </span>
                <img
                  className="smArrow"
                  src={DownSilverSmall}
                  alt=""
                  id="arrwReq4Spec3"
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
                    ReactTooltip.show(this.TreeOfLifeToolTip);
                  }}
                  onTouchEnd={this.talentClick}
                  className="talentHover"
                  src={overlayImage} style={{ display: "none" }} ref={ref => this.TreeOfLifeToolTip = ref}
                  data-tip={Druid[61].toolTip[0]}
                  id="62"
                />
                <img
                  onMouseEnter={this.displayMouseOverlay}
                  onMouseLeave={this.hideMouseOverlay}
                  onTouchStart={() => {
                    this.displayOverlayMobile();
                  }}
                  className="spec3 talentButton inactive-talent req-inactive"
                  src={TreeOfLife}
                  alt=""
                />

                <span id="prioReq4Spec3" className="talentPoints req-40-s3">
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

<ReactTooltip html={true} />;

export default DruidComponent;
