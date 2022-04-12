export const preventRemovingPoint = () => {
  const eventSource = window.event.target.nextElementSibling.nextElementSibling;
  const idStringSplit = eventSource.split("Req")[1];
  const requirementNumber = idStringSplit.slice(0, 1);
  const specNumber = idStringSplit.charAt(idStringSplit.length - 1);

  /* 
    This prevents the user from taking away points if they have points 
    in a dependant talent 
  */
  if (
    eventSource ===
      document.querySelector(
        `[id*="subsReq${requirementNumber}Spec${specNumber}"]`
      ) &&
    !(
      document.querySelector(
        `[id*="prioReq${requirementNumber}Spec${specNumber}"]`
      ).innerText[0] === "0"
    )
  ) {
    return;
  }

  /* 
    Prevents user from removing points if there are no points to remove
  */

  if (eventSource.innerText[0] === "0") {
    return;
  }
  
  
};
