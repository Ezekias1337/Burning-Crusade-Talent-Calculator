import { TalentButton } from "../TalentButton";

export const TalentRow = (props) => {
  const slotOneStatus = props.slotOne;
  const slotTwoStatus = props.slotTwo;
  const slotThreeStatus = props.slotThree;
  const slotFourStatus = props.slotFour;

  return (
    <div className="row talent-row talent-row-inner">
      <div className="col col-xs-3">
        {slotOneStatus !== "empty" ? <TalentButton /> : ""}
      </div>
      <div className="col col-xs-3">
        {slotTwoStatus !== "empty" ? <TalentButton /> : ""}
      </div>
      <div className="col col-xs-3">
        {slotThreeStatus !== "empty" ? <TalentButton /> : ""}
      </div>
      <div className="col col-xs-3">
        {slotFourStatus !== "empty" ? <TalentButton /> : ""}
      </div>
    </div>
  );
};
