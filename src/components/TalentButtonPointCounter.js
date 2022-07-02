import { useParseUnlockTalents } from "../hooks/talents/useParseUnlockTalents";
import "../css/vanilla_css/talent-button-point-counter.css";

export const TalentButtonPointCounter = (props) => {
  useParseUnlockTalents(props);

  return (
    <>
      <span className={`talentPoints req-${props.req}-s${props.spec}`}>
        {props.pointsSpent}/{props.maxPoints}
      </span>
    </>
  );
};
