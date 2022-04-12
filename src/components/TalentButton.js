import ReactTooltip from "react-tooltip";
import { useState } from "react";
import { talentClick } from "../functions/combinedFunctions/talentClick"
import { Arrow } from "./arrowComponent";
import overlayImage from "../images/Item_Hover.png";
import * as talentInfo from "../talentinfo/combined/talentInfoCombined";
import {
  displayMouseOverlay,
  hideMouseOverlay,
  displayOverlayMobile,
  hideMouseOverlayInnerElement,
  displayMouseOverlayInnerElement
} from "../functions/combinedFunctions/talentClickHelpers";

/* 
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
NEED TO HANDLE DESCENDANTS OF TALENTS THAT HAVE AN ARROW REQUIREMENT
*/

export const TalentButton = (props) => {
  const [talentName, setTalentName] = useState("");
  const startInactive = props.req !== "00" ? true : false;
  
  return (
    <div className="col col-xs-3">
      <img
        onMouseEnter={() => displayMouseOverlayInnerElement()}
        onMouseLeave={() => hideMouseOverlayInnerElement()}
        onMouseDown={() => {
          talentClick(props.maxPoints, props.playableClass, talentInfo[props.playableClass][parseInt(props.id) -1].toolTip, parseInt(props.id));
          ReactTooltip.show(talentName);
        }}
        onTouchEnd={() => talentClick(props.maxPoints)}
        className="talentHover"
        src={overlayImage}
        style={{ display: "none" }}
        ref={(ref) => (setTalentName(ref))}
        //data-tip={talentInfo[props.playableClass][0].toolTip[0]}
        data-tip={talentInfo[props.playableClass][parseInt(props.id) -1].toolTip[0]}
        id={props.id}
      />
      <img
        onMouseEnter={() => displayMouseOverlay()}
        onMouseLeave={() => hideMouseOverlay()}
        onTouchStart={() => {
          displayOverlayMobile();
        }}
        className={`spec1 talentButton ${startInactive ? "inactive" : "active"}-talent req-${startInactive ? "inactive" : "active"}`}
        src={props.imgSrc}
        alt=""
      />

      <span className={`talentPoints req-${props.req}-s${props.spec}`}>0/{props.maxPoints}</span>
      {props?.arrows?.map((item) => {
        return (
          <Arrow arrowType={item.arrowType} reqNumber={item.reqNumber} spec={item.spec} />
        )
      })}
    </div>
  );
};
