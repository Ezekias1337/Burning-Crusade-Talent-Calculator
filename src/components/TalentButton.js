import ReactTooltip from "react-tooltip";
import { useState, useEffect } from "react";
import { talentClick } from "../functions/combinedFunctions/talentClick";
import { Arrow } from "./arrowComponent";
import { TalentButtonPointCounter } from "./TalentButtonPointCounter";
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
import { getListOfPrereqsSatisfied } from "../functions/getListOfPrereqsSatisfied";
import { pointReqCheck } from "../functions/pointReqCheck";

export const TalentButton = (props) => {
  const [talentName, setTalentName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);
  const [pointsSpentInTalent, setPointsSpentInTalent] = useState(0);
  const [stringForBorderColor, setStringForBorderColor] = useState("inactive");
  const [arrowColor, setArrowColor] = useState("silver");
  const [pointsSpentInSpec, setPointsSpentInTalentInSpec] = useState(0);
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const { addPointsSpec1, addPointsSpec2, addPointsSpec3, addTotalPoints } =
    bindActionCreators(actionCreators, dispatch);

  //  Handle Unlocking when points are spent
  useEffect(() => {
    if (isMaxed === true) {
      setStringForBorderColor("maxeds");
    } else if (isEnabled === true) {
      setStringForBorderColor("active-talent");
    } else {
      setStringForBorderColor("inactive-talent");
    }

    if (props.spec === "1") {
      setPointsSpentInTalentInSpec(state.pointsSpec1.points);
    } else if (props.spec === "2") {
      setPointsSpentInTalentInSpec(state.pointsSpec2.points);
    } else if (props.spec === "3") {
      setPointsSpentInTalentInSpec(state.pointsSpec3.points);
    }

    let isParentTalent = false;
    let isChildTalent = false;

    if (props?.parentTalent) {
      isParentTalent = true;
    }
    if (props?.childTalent) {
      isChildTalent = true;
    }

    if (isParentTalent === true && isChildTalent === false) {
      const resultsFromPointReqCheck = pointReqCheck(
        props,
        pointsSpentInSpec,
        pointsSpentInTalent
      );

      if (resultsFromPointReqCheck === "maxed") {
        setIsMaxed(true);
      } else if (resultsFromPointReqCheck === "active") {
        setIsEnabled(true);
      }
    } else if (isChildTalent === true) {
      const listOfPrereqsSatisfied = getListOfPrereqsSatisfied(
        state,
        props.spec
      );

      const resultsFromPointReqCheck = pointReqCheck(
        props,
        pointsSpentInSpec,
        pointsSpentInTalent
      );
      let filteredPreReq;
      let prereqCheckPassed = false;
      let pointReqCheckPassed = false;

      for (const item of props.childTalent) {
        switch (item) {
          case "1":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req1")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "2":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req2")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "3":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req3")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "4":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req4")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "5":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req5")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "6":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req6")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
          case "7":
            filteredPreReq = listOfPrereqsSatisfied.filter((listItem) =>
              listItem.includes("Req7")
            );
            if (filteredPreReq.length > 0) {
              prereqCheckPassed = true;
            }
            if (resultsFromPointReqCheck === "active") {
              pointReqCheckPassed = true;
            }

            break;
        }

        if (prereqCheckPassed === true && pointReqCheckPassed === true) {
          if (resultsFromPointReqCheck === "maxed") {
            setStringForBorderColor("maxeds");
          } else if (resultsFromPointReqCheck === "active") {
            setStringForBorderColor("active-talent");
            setIsEnabled(true);
          } else if (resultsFromPointReqCheck === "inactive") {
            setStringForBorderColor("inactive-talent");
            setIsEnabled(false);
          }
        }
      }
    } else if (isParentTalent === false && isChildTalent === false) {
      const resultsFromPointReqCheck = pointReqCheck(
        props,
        pointsSpentInSpec,
        pointsSpentInTalent
      );

      if (resultsFromPointReqCheck === "maxed") {
        setIsMaxed(true);
      } else if (resultsFromPointReqCheck === "active") {
        setIsEnabled(true);
      } else if (resultsFromPointReqCheck === "inactive") {
        setIsEnabled(false);
      }
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
            pointsSpentInTalent,
            setPointsSpentInTalent
          );
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
      <TalentButtonPointCounter
        req={props.req}
        spec={props.spec}
        pointsSpent={pointsSpentInTalent}
        maxPoints={props.maxPoints}
        arrows={props?.arrows ? props.arrows : null}
        parentTalent={
          props?.parentTalent !== undefined ? props.parentTalent : null
        }
      />
      {props?.arrows?.map((item) => {
        return (
          <Arrow
            arrowType={item.arrowType}
            color={arrowColor}
            parentTalent={item.parentTalent}
            spec={item.spec}
            key={item}
          />
        );
      })}
    </div>
  );
};
