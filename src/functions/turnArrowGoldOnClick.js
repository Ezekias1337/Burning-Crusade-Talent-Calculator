/* 
  Need to account for smArrow, medArrow, lgArrow, 
  paladinArrow(NEED TO RENAME TO xlArrow[paladin/mage]),
  rightArrow(for Druid), angleArrow(for Rogue)
*/

export const turnArrowGoldOnClick = () => {
  /* function ArrowGold() {
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
    window.event.srcElement.nextElementSibling.nextElementSibling.innerText[2]
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
        let newStr = document.querySelector('[id*="prioReq1Spec1"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log("altStr", altStr);

        switch (altStr) {
          case "00":
            buttonsArray = document.getElementsByClassName("req-00-s1");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq2Spec1"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s1");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq3Spec1"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s1");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq4Spec1"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s1");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq1Spec2"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s2");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq2Spec2"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s2");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq3Spec2"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s2");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq4Spec2"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s2");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq1Spec3"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s3");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq2Spec3"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s3");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq3Spec3"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s3");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
        let newStr = document.querySelector('[id*="prioReq4Spec3"]').className;
        let altStr = newStr.match(/\d+/g)[0];
        console.log(altStr);

        switch (altStr) {
          case "05":
            buttonsArray = document.getElementsByClassName("req-05-s3");
            for (button of buttonsArray) {
              console.log(button.previousElementSibling);
              if (
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
                button.previousElementSibling.className.includes("req-active")
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
  } */
};
