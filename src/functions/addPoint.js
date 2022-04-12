import {
  onePointArray,
  twoPointArray,
  threePointArray,
  fourPointArray,
  fivePointArray,
} from "../talentinfo/combined/pointArrays";

export const addPoint = (maxPoints) => {
  const eventSource = window.event.target.nextElementSibling.nextElementSibling;
  let arrayToFilter;

  /* 
    Determine which array to filter based off talents maxPoints prop
  */

  switch (maxPoints) {
    case "1":
      arrayToFilter = onePointArray;
      break;
    case "2":
      arrayToFilter = twoPointArray;
      break;
    case "3":
      arrayToFilter = threePointArray;
      break;
    case "4":
      arrayToFilter = fourPointArray;
      break;
    case "5":
      arrayToFilter = fivePointArray;
      break;
    default:
      break;
  }

  /* 
    Get first value in array that is greater than current value 
  */
  const newPointValue = arrayToFilter.filter(
    (bracket) => bracket > eventSource.innerText
  );

  /*
    As long as above function was successful (meaning there are more
    elements of the array greater than current value) update the 
    span elements inner text
  */

  if (typeof newPointValue[0] !== "undefined") {
    eventSource.innerText = newPointValue[0];
  }
};
