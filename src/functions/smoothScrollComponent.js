/* Need to use hooks for this!!!!!!!!! */

export const smoothScrollComponent = () => {
  const anchor = document.getElementsByClassName("btn")[0];
  anchor.scrollIntoView({ behavior: "smooth", block: "start" });
};
