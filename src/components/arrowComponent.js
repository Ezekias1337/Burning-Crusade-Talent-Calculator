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

export const Arrow = (props) => {
  const [arrowSource, setArrowSource] = useState();
  console.log("props", props);

  useEffect(() => {
    switch (props.arrowType) {
      case "downSmall":
        if (props.color === "silver") {
          setArrowSource(downSmallSilver);
        } else if (props.color === "gold") {
          setArrowSource(downSmallGold);
        }
        break;
      case "downMedium":
        if (props.color === "silver") {
          setArrowSource(downMediumSilver);
        } else if (props.color === "gold") {
          setArrowSource(downMediumGold);
        }
        break;
      case "downLarge":
        if (props.color === "silver") {
          setArrowSource(downLargeSilver);
        } else if (props.color === "gold") {
          setArrowSource(downLargeGold);
        }
        break;
      case "angleArrow":
        if (props.color === "silver") {
          setArrowSource(angleArrowSilver);
        } else if (props.color === "gold") {
          setArrowSource(angleArrowGold);
        }
        break;
      case "leftArrow":
        if (props.color === "silver") {
          setArrowSource(leftArrowSilver);
        } else if (props.color === "gold") {
          setArrowSource(leftArrowGold);
        }
        break;
      case "rightArrow":
        if (props.color === "silver") {
          setArrowSource(rightArrowSilver);
        } else if (props.color === "gold") {
          setArrowSource(rightArrowGold);
        }
        break;
      default:
        console.log("No matching arrow type, check your spelling.");
    }
  }, [props.color, props.arrowType]);

  return (
    <img
      className={props.arrowType}
      src={arrowSource}
      alt={props.arrowType}
      id={`arrwReq${props.parentTalent}Spec${props.spec}`}
    />
  );
};
