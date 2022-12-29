export const TalentOverlay = () => {
  return (
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
  );
};
