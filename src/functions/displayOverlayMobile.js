export const displayOverlayMobile = () => {
  const eventSource = window.event.target.previousElementSibling;
  eventSource.style.display = "inline";
};
