export const displayMouseOverlay = () => {
  if (window.event.target.getElementsByTagName("img")[0]) {
    window.event.target.getElementsByTagName("img")[0].style.display = "inline";
  }
};
