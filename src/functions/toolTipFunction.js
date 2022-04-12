export const toolTipFunction = (addOrRemove, talentInfo, playableClass, id) => {
  const elementToUpdate = window.event.target;
  const eventSource = elementToUpdate.nextElementSibling.nextElementSibling;
  const currentPoints = parseInt(eventSource.innerText[0]);
  let newToolTipData;
  
  if (addOrRemove === "add") {
    newToolTipData = talentInfo[currentPoints];
  } else if (addOrRemove === "remove") {
    newToolTipData = talentInfo[currentPoints - 1];
  }

  if (newToolTipData !== undefined) {
    elementToUpdate.setAttribute("data-tip", newToolTipData);
  }

};
