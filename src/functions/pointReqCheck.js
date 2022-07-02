export const pointReqCheck = (
  props,
  pointsSpentInSpec,
  pointsSpentInTalent
) => {
  const thisTalentButtonRequirement = props.req;
  const maxPoints = props.maxPoints;

  if (maxPoints === pointsSpentInTalent.toString()) {
    return "maxed";
  } else if (pointsSpentInSpec >= thisTalentButtonRequirement) {
    return "active";
  } else {
    return "inactive";
  }
};
