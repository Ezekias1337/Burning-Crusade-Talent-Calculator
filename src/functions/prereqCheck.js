export const prereqCheck = (itemToParse) => {
  const parentTalent = itemToParse.parentTalent;
  let prereqCheckPassed = false;

  switch (parentTalent) {
    case "1":
      if (listOfPrereqsSatisfied.includes("Req1")) {
        prereqCheckPassed = true;
      }
      break;
    case "2":
      if (listOfPrereqsSatisfied.includes("Req2")) {
        prereqCheckPassed = true;
      }
      break;
    case "3":
      if (listOfPrereqsSatisfied.includes("Req3")) {
        prereqCheckPassed = true;
      }
      break;
    case "4":
      if (listOfPrereqsSatisfied.includes("Req4")) {
        prereqCheckPassed = true;
      }
      break;
    case "5":
      if (listOfPrereqsSatisfied.includes("Req5")) {
        prereqCheckPassed = true;
      }
      break;
    case "6":
      if (listOfPrereqsSatisfied.includes("Req6")) {
        prereqCheckPassed = true;
      }
      break;
    case "7":
      if (listOfPrereqsSatisfied.includes("Req7")) {
        prereqCheckPassed = true;
      }
      break;
    default:
      break;
  }
  return prereqCheckPassed;
};
