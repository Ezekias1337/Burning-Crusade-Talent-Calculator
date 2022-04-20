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

export const Arrow = (props) => {
  let arrowSource;

  switch (props.arrowType) {
    case "downSmallSilver":
      arrowSource = downSmallSilver;
      break;
    case "downSmallGold":
      arrowSource = downSmallGold;
      break;
    case "downMediumSilver":
      arrowSource = downMediumSilver;
      break;
    case "downMediumGold":
      arrowSource = downMediumGold;
      break;
    case "downLargeSilver":
      arrowSource = downLargeSilver;
      break;
    case "downLargeGold":
      arrowSource = downLargeGold;
      break;
    case "downExtraLargeSilver":
      arrowSource = downLargeSilver;
      break;
    case "downExtraLargeGold":
      arrowSource = downLargeGold;
      break;
    case "angleArrowSilver":
      arrowSource = angleArrowSilver;
      break;
    case "angleArrowGold":
      arrowSource = angleArrowGold;
      break;
    case "leftArrowSilver":
      arrowSource = leftArrowSilver;
      break;
    case "leftArrowGold":
      arrowSource = leftArrowGold;
      break;
    case "rightArrowSilver":
      arrowSource = rightArrowSilver;
      break;
    case "rightArrowGold":
      arrowSource = rightArrowGold;
      break;
    default:
      console.log("No matching arrow type, check your spelling.");
  }

  return (
    <img
      className={props.arrowType}
      src={arrowSource}
      alt={props.arrowType}
      id={`arrwReq${props.reqNumber}Spec${props.spec}`}
    />
  );
};
