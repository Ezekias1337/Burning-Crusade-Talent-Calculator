/* 
  Need to account for smArrow, medArrow, lgArrow, 
  paladinArrow(NEED TO RENAME TO xlArrow[paladin/mage]),
  rightArrow(for Druid), angleArrow(for Rogue)
*/

export const turnArrowGoldIndirectly = () => {
  /* console.log("Arrow Gold Indirectly");
  console.log(window.event.srcElement.nextElementSibling.nextElementSibling);
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
    for (g = 0; g < document.getElementsByClassName("req-5-s1").length; g++) {
      if (spec1Req5Output[g].nextElementSibling) {
        //only execute if the id includes prioReq... and if the button above it is maxed out (yellow border)
        if (
          spec1Req5Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req5Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req5Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req5Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-10-s1").length; g++) {
      if (spec1Req10Output[g].nextElementSibling) {
        if (
          spec1Req10Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req10Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req10Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req10Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-15-s1").length; g++) {
      if (spec1Req15Output[g].nextElementSibling) {
        if (
          spec1Req15Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req15Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req15Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req15Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-20-s1").length; g++) {
      if (spec1Req20Output[g].nextElementSibling) {
        if (
          spec1Req20Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req20Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req20Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req20Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-25-s1").length; g++) {
      if (spec1Req25Output[g].nextElementSibling) {
        if (
          spec1Req25Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req25Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req25Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req25Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-30-s1").length; g++) {
      if (spec1Req30Output[g].nextElementSibling) {
        if (
          spec1Req30Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req30Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req30Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req30Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-35-s1").length; g++) {
      if (spec1Req35Output[g].nextElementSibling) {
        if (
          spec1Req35Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req35Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req35Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req35Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
    for (g = 0; g < document.getElementsByClassName("req-40-s1").length; g++) {
      if (spec1Req40Output[g].nextElementSibling) {
        if (
          spec1Req40Output[g].nextElementSibling.id.includes("prioReq1Spec1") &&
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
          spec1Req40Output[g].nextElementSibling.id.includes("prioReq2Spec1") &&
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
          spec1Req40Output[g].nextElementSibling.id.includes("prioReq3Spec1") &&
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
          spec1Req40Output[g].nextElementSibling.id.includes("prioReq4Spec1") &&
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
  } */
};
