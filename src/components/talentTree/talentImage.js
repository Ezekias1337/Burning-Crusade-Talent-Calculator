export const TalentImage = () => {
  return (
    <img
      onMouseEnter={() => displayMouseOverlay()}
      onMouseLeave={() => hideMouseOverlay()}
      onTouchStart={() => {
        displayOverlayMobile();
      }}
      className={`spec${props.spec} talentButton ${stringForBorderColor} req-${
        isEnabled ? "active" : "inactive"
      }`}
      src={props.imgSrc}
      alt="talent-button"
    />
  );
};
