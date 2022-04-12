import downSmallSilver from "../images/arrows/downSmallSilver.png";
import downSmallGold from "../images/arrows/downSmallGold.png";
import downMediumSilver from "../images/arrows/downMediumSilver.png";
import downMediumGold from "../images/arrows/downMediumGold.png";
import downLargeSilver from "../images/arrows/downLargeSilver.png";
import downLargeGold from "../images/arrows/downLargeGold.png";
import angleArrowSilver from "../images/arrows/angleArrowSilver.png";
import angleArrowGold from "../images/arrows/angleArrowGold.png";
import leftArrowSilver from "../images/arrows/leftArrowSilver.png";
import leftArrowGold from "../images/arrows/leftArrowGold.png";
import rightArrowSilver from "../images/arrows/rightArrowSilver.png";
import rightArrowGold from "../images/arrows/rightArrowGold.png";

export const Arrow = (props) => {
  //const [arrowColor, setArrowColor] = useState("silver");
  let arrowSource;
  console.log("arrowSource", arrowSource);

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
