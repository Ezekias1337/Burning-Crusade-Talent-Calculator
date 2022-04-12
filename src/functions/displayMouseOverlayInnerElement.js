export const displayMouseOverlayInnerElement = () => {
  const eventSource = window.event.target.previousElementSibling;
  if (eventSource) {
    eventSource.style.display = "inline";
  }
};
