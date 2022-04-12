export const hideMouseOverlayInnerElement = () => {
  const eventSource = window.event.target;
  eventSource.style.display = "none";
};
