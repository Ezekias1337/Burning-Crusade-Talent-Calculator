export const idMatcherParse = (spanID, arrowSrc) => {
  if (spanID.includes("prioReq1Spec1")) {
    arrowSrc = document.getElementById("arrwReq1Spec1");
  } else if (spanID.includes("prioReq2Spec1")) {
    arrowSrc = document.getElementById("arrwReq2Spec1");
  } else if (spanID.includes("prioReq3Spec1")) {
    arrowSrc = document.getElementById("arrwReq3Spec1");
  } else if (spanID.includes("prioReq4Spec1")) {
    arrowSrc = document.getElementById("arrwReq4Spec1");
  }

  return arrowSrc;
};
