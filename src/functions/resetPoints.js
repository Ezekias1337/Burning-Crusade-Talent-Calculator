export const resetPoints = () => {
  /* let z;
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
        spanArray[y].className[17] === "0" && spanArray[y].className[18] === "0"
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
  } */

  /* Iterate through array of all talent buttons and split them
      into separate arrays based off the 3rd char of the string*/

  /* for (z = 0; z < spanArray.length; z++) {
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
  } */

  /* Iterate through all of separate arrays of span elements and set their value
      back to their original values (index[0] of their respective valuePointArray) */
  /* for (y = 0; y < spanArrayPotential1.length; y++) {
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
 */
  // Iterate through all arrow elements and set them back to silver

  /* for (arrow of smArrowArray) {
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
  } */

  //Resets all counter variables to 0/false
  /* i = 0;
  iSpec1 = 0;
  iSpec2 = 0;
  iSpec3 = 0;
  loopHappenedBefore = false;
  //Resets inner text value of DOM counters back to 0.
  document.getElementById("total-points").innerText = `${i}`;
  document.getElementById("point-counter1").innerText = `(${iSpec1})`;
  document.getElementById("point-counter2").innerText = `(${iSpec2})`;
  document.getElementById("point-counter3").innerText = `(${iSpec3})`;

  console.log("Reset Points!"); */
};
