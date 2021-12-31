export const displayMouseOverlayInnerElement = () => {
  if (window.event.target.previousElementSibling) {
    window.event.target.previousElementSibling.style.display = "inline";
  }
};
