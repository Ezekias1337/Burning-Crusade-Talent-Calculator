/* 
    NEED TO CHECK IF IT'S NECESSARY FOR TALENTCLICK TO HAVE
    ONMOUSEDOWN AND ONTOUCHEND EVENT LISTENER
*/

/* 
    Used by: 
        - talentHover element || onMouseDown
        - talentHover element || onTouchEnd
*/

export const talentClick = () => {};

/* 
    Used by: 
        - talentHover element || onMouseDown
*/

export const toolTipFunction = () => {};

/* 
    Used by: 
        - individual talent icon || onMouseEnter
*/

export const displayMouseOverlay = () => {
  if (window.event.target.getElementsByTagName("img")[0]) {
    window.event.target.getElementsByTagName("img")[0].style.display = "inline";
  }
};

/* 
    Used by: 
        - talentHover element || onMouseEnter
*/

export const displayMouseOverlayInnerElement = () => {
  if (window.event.target.previousElementSibling) {
    window.event.target.previousElementSibling.style.display = "inline";
  }
};

/* 
    Used by: 
        - individual talent icon || onTouchStart
*/

export const displayOverlayMobile = () => {
  window.event.target.previousElementSibling.style.display = "inline";
};

/* 
    Used by: 
        - individual talent icon || onTouchStart
*/

export const hideMouseOverlay = () => {
  console.log(window.event.target.previousElementSibling);
  window.event.target.previousElementSibling.style.display = "none";
};

/* 
    Used by: 
        - talentHover element || onMouseLeave
*/

export const hideMouseOverlayInnerElement = () => {
  window.event.target.style.display = "none";
};
