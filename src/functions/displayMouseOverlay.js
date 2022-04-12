export const displayMouseOverlay = () => {
  const eventSource = window.event.target.getElementsByTagName("img")[0];
  if (eventSource) {
    eventSource.style.display = "inline";
  }
};
