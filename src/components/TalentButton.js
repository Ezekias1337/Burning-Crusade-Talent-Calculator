import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { talentClick } from "../functions/combinedFunctions/talentClick";
import { Arrow } from "./arrowComponent";
import overlayImage from "../images/Item_Hover.png";
import * as talentInfo from "../talentinfo/combined/talentInfoCombined";
import * as helper from "../functions/combinedFunctions/talentClickHelpers";
import {
  displayMouseOverlay,
  hideMouseOverlay,
  displayOverlayMobile,
  hideMouseOverlayInnerElement,
  displayMouseOverlayInnerElement,
} from "../functions/combinedFunctions/talentClickHelpers";
import "../css/vanilla_css/talent-button.css";
import "../css/vanilla_css/tooltip.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/allActions";

export const TalentButton = (props) => {
  const [talentName, setTalentName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);
  const [pointsSpent, setPointsSpent] = useState(0);
  const [stringForBorderColor, setStringForBorderColor] = useState("inactive");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addPointsSpec1, addPointsSpec2, addPointsSpec3, addTotalPoints } =
    bindActionCreators(actionCreators, dispatch);

  /* 
    Handle Unlocking when points are spent
  */

  useEffect(() => {
    if (isMaxed === true) {
      setStringForBorderColor("maxeds");
    } else if (isEnabled === true) {
      setStringForBorderColor("active-talent");
    } else {
      setStringForBorderColor("inactive-talent");
    }

    let currentPoints;

    if (props.spec === "1") {
      currentPoints = state.pointsSpec1.points;
    } else if (props.spec === "2") {
      currentPoints = state.pointsSpec2.points;
    } else if (props.spec === "3") {
      currentPoints = state.pointsSpec3.points;
    }

    if (props?.reqNumber === undefined) {
      const thisTalentButtonRequirement = props.req;
      if (currentPoints >= thisTalentButtonRequirement) {
        setIsEnabled(true);
      }
      if (props.maxPoints === pointsSpent.toString()) {
        setIsMaxed(true);
      }
    } else {
    }
  });

  return (
    <div className="col col-xs-3">
      <img
        onMouseEnter={() => displayMouseOverlayInnerElement()}
        onMouseLeave={() => hideMouseOverlayInnerElement()}
        onMouseDown={() => {
          talentClick(
            props,
            state,
            [addPointsSpec1, addPointsSpec2, addPointsSpec3, addTotalPoints],
            talentInfo[props.playableClass][parseInt(props.id) - 1].toolTip,
            pointsSpent
          );
          setPointsSpent(helper.addPoint(props.maxPoints, pointsSpent));
          ReactTooltip.show(talentName);
        }}
        onTouchEnd={() => talentClick(props.maxPoints)}
        className="talentHover"
        src={overlayImage}
        style={{ display: "none" }}
        ref={(ref) => setTalentName(ref)}
        data-tip={
          talentInfo[props.playableClass][parseInt(props.id) - 1].toolTip[0]
        }
        id={props.id}
      />
      <img
        onMouseEnter={() => displayMouseOverlay()}
        onMouseLeave={() => hideMouseOverlay()}
        onTouchStart={() => {
          displayOverlayMobile();
        }}
        className={`spec${
          props.spec
        } talentButton ${stringForBorderColor} req-${
          isEnabled ? "active" : "inactive"
        }`}
        src={props.imgSrc}
        alt="talent-button"
      />

      <span className={`talentPoints req-${props.req}-s${props.spec}`}>
        {pointsSpent}/{props.maxPoints}
      </span>
      {props?.arrows?.map((item) => {
        return (
          <Arrow
            arrowType={item.arrowType}
            reqNumber={item.reqNumber}
            spec={item.spec}
            key={item}
          />
        );
      })}
    </div>
  );
};
