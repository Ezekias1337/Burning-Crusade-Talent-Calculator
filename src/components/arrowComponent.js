import downSmallSilver from "../images/arrows/downSmallSilver.jpg";
import downSmallGold from "../images/arrows/downSmallGold.jpg";
import downMediumSilver from "../images/arrows/downMediumSilver.jpg";
import downMediumGold from "../images/arrows/downMediumGold.jpg";
import downLargeSilver from "../images/arrows/downLargeSilver.jpg";
import downLargeGold from "../images/arrows/downLargeGold.jpg";
import angleArrowSilver from "../images/arrows/angleArrowSilver.jpg";
import angleArrowGold from "../images/arrows/angleArrowGold.jpg";
import leftArrowSilver from "../images/arrows/leftArrowSilver.jpg";
import leftArrowGold from "../images/arrows/leftArrowGold.jpg";
import rightArrowSilver from "../images/arrows/rightArrowSilver.jpg";
import rightArrowGold from "../images/arrows/rightArrowGold.jpg";
import "./../css/vanilla_css/arrow.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Arrow = (props) => {
  const [arrowSource, setArrowSource] = useState(null);
  const [color, setColor] = useState("silver");
  const state = useSelector((state) => state);

  useEffect(() => {

    switch (props.spec) {
      case "1":
        if (props.parentTalent === "1") {
          setColor(state.spec1Arrows.spec1Req1Arrow);
        } else if (props.parentTalent === "2") {
          setColor(state.spec1Arrows.spec1Req2Arrow);
        } else if (props.parentTalent === "3") {
          setColor(state.spec1Arrows.spec1Req3Arrow);
        } else if (props.parentTalent === "4") {
          setColor(state.spec1Arrows.spec1Req4Arrow);
        } else if (props.parentTalent === "5") {
          setColor(state.spec1Arrows.spec1Req6Arrow);
        } else if (props.parentTalent === "6") {
          setColor(state.spec1Arrows.spec1Req6Arrow);
        } else if (props.parentTalent === "7") {
          setColor(state.spec1Arrows.spec1Req7Arrow);
        }
        break;
      case "2":
        if (props.parentTalent === "1") {
          setColor(state.spec2Arrows.spec2Req1Arrow);
        } else if (props.parentTalent === "2") {
          setColor(state.spec2Arrows.spec2Req2Arrow);
        } else if (props.parentTalent === "3") {
          setColor(state.spec2Arrows.spec2Req3Arrow);
        } else if (props.parentTalent === "4") {
          setColor(state.spec2Arrows.spec2Req4Arrow);
        } else if (props.parentTalent === "5") {
          setColor(state.spec2Arrows.spec2Req6Arrow);
        } else if (props.parentTalent === "6") {
          setColor(state.spec2Arrows.spec2Req6Arrow);
        } else if (props.parentTalent === "7") {
          setColor(state.spec2Arrows.spec2Req7Arrow);
        }
        break;
      case "3":
        if (props.parentTalent === "1") {
          setColor(state.spec3Arrows.spec3Req1Arrow);
        } else if (props.parentTalent === "2") {
          setColor(state.spec3Arrows.spec3Req2Arrow);
        } else if (props.parentTalent === "3") {
          setColor(state.spec3Arrows.spec3Req3Arrow);
        } else if (props.parentTalent === "4") {
          setColor(state.spec3Arrows.spec3Req4Arrow);
        } else if (props.parentTalent === "5") {
          setColor(state.spec3Arrows.spec3Req6Arrow);
        } else if (props.parentTalent === "6") {
          setColor(state.spec3Arrows.spec3Req6Arrow);
        } else if (props.parentTalent === "7") {
          setColor(state.spec3Arrows.spec3Req7Arrow);
        }
        break;
      default:
        break;
    }
  }, [state, props]);

  useEffect(() => {
    switch (props.arrowType) {
      case "downSmall":
        if (color === "silver") {
          setArrowSource(downSmallSilver);
        } else if (color === "gold") {
          setArrowSource(downSmallGold);
        }
        break;
      case "downMedium":
        if (color === "silver") {
          setArrowSource(downMediumSilver);
        } else if (color === "gold") {
          setArrowSource(downMediumGold);
        }
        break;
      case "downLarge":
        if (color === "silver") {
          setArrowSource(downLargeSilver);
        } else if (color === "gold") {
          setArrowSource(downLargeGold);
        }
        break;
      case "angleArrow":
        if (color === "silver") {
          setArrowSource(angleArrowSilver);
        } else if (color === "gold") {
          setArrowSource(angleArrowGold);
        }
        break;
      case "leftArrow":
        if (color === "silver") {
          setArrowSource(leftArrowSilver);
        } else if (color === "gold") {
          setArrowSource(leftArrowGold);
        }
        break;
      case "rightArrow":
        if (color === "silver") {
          setArrowSource(rightArrowSilver);
        } else if (color === "gold") {
          setArrowSource(rightArrowGold);
        }
        break;
      default:
        console.log("No matching arrow type, check your spelling.");
    }
  }, [state, props]);

  return (
    <img
      className={props.arrowType}
      src={arrowSource}
      alt={props.arrowType}
      id={`arrwReq${props.parentTalent}Spec${props.spec}`}
    />
  );
};
