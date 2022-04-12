/* 
  Need to account for smArrow, medArrow, lgArrow, 
  paladinArrow(NEED TO RENAME TO xlArrow[paladin/mage]),
  rightArrow(for Druid), angleArrow(for Rogue)
*/

export const arrowGold = (arrowChecker) => {
  const eventSource =
    window.event.target.nextElementSibling.nextElementSibling
      .nextElementSibling;

  /* if (arrowChecker.includes("angle")) {
    eventSource.src =
      AngleArrowGold;
  }
  if (arrowChecker.includes("left")) {
    eventSource.src =
      LeftGoldSmall;
  }
  if (arrowChecker.includes("right")) {
    eventSource.src =
      RightGoldSmall;
  }
  if (arrowChecker.includes("sm")) {
    eventSource.src =
      DownGoldSmall;
  }
  if (arrowChecker.includes("med")) {
    eventSource.src =
      DownGoldMedium;
  }
  if (arrowChecker.includes("lg")) {
    eventSource.src =
      DownGoldLarge;
  } */
};
