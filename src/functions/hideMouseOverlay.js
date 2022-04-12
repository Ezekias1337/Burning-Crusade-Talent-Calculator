export const hideMouseOverlay = () => {
  const eventSource = window.event.target.previousElementSibling;

  eventSource.style.display = "none";
};
