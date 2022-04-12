export const addYellowBorder = (specString) => {
  const eventSource = window.event.target.nextElementSibling;

  if (
    eventSource.nextElementSibling.innerText[0] ===
    eventSource.nextElementSibling.innerText[2]
  ) {
    if (specString[4] === "1") {
      eventSource.className = "spec1 talentButton maxeds req-active";
    }
    if (specString[4] === "2") {
      eventSource.className = "spec2 talentButton maxeds req-active";
    }
    if (specString[4] === "3") {
      eventSource.className = "spec3 talentButton maxeds req-active";
    }
  }
};
