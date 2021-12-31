export const hideMouseOverlay = () => {
  console.log(window.event.target.previousElementSibling);
  window.event.target.previousElementSibling.style.display = "none";
};
