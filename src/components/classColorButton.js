import "../css/vanilla_css/class-color-button.css";

export const ClassColorButton = (props) => {
  return (
    <button
      /* onClick={() => this.resetPoints()} */
      type="button"
      className={`btn btn-success btn-${props.playableClass} mb-2 mt-2`}
    >
      Reset
    </button>
  );
};
