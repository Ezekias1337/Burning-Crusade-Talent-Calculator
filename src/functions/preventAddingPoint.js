export const preventAddingPoint = () => {
  const eventSource = window.event.target.nextElementSibling;
  
  /*
    NEED TO CHECK IF USER HAS SPENT MORE THAN 61 POINTS, LOGIC NOT READY
  */
  
  //If user tries to add more points to a maxed talent, exit function, preventing user action
  if (
    eventSource.nextElementSibling.innerText[0] ===
    eventSource.nextElementSibling.innerText[2]
  ) {
    return true;
  }

  //If User tries to add points to a talent that isn't active yet, exit function

  if (eventSource.className.includes("inactive-talent")) {
    return true;
  }
};
