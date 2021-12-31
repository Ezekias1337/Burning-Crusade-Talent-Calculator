export const removeGreenBorder = () => {
  /* let arrowSrc;
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
  } */
};
