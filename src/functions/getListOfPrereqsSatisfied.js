export const getListOfPrereqsSatisfied = (state, specNumber) => {
  const arrayOfPrereqsSatisfied = [];

  /* 
    Iterate over state, if the second value of the array is true,
    push the name of the requirement satisfied to the array
*/

  if (specNumber === "1") {
    const { spec1Requirements } = state;

    for (const item of Object.entries(spec1Requirements)) {
      if (item[1] === true) {
        arrayOfPrereqsSatisfied.push(item[0]);
      }
    }
  } else if (specNumber === "2") {
    const { spec2Requirements } = state;

    for (const item of Object.entries(spec2Requirements)) {
      if (item[1] === true) {
        arrayOfPrereqsSatisfied.push(item[0]);
      }
    }
  } else if (specNumber === "3") {
    const { spec3Requirements } = state;

    for (const item of Object.entries(spec3Requirements)) {
      if (item[1] === true) {
        arrayOfPrereqsSatisfied.push(item[0]);
      }
    }
  }

  return arrayOfPrereqsSatisfied;
};
