export const hideOverlayMobile = () => {
  const eventSource = window.event.target.previousElementSibling;
  eventSource.style.display = "none";
};
