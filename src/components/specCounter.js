import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/vanilla_css/spec-counter.css";

export const specCounter = (props) => {
  const state = useSelector((state) => state);
  const [points, setPoints] = useState(0);

  switch (props.spec) {
    case "spec1":
      setPoints(state.pointsSpec1.points);
      break;
    case "spec2":
      setPoints(state.pointsSpec2.points);
      break;
    case "spec3":
      setPoints(state.pointsSpec3.points);
      break;
    default:
      break;
  }

  return (
    <>
      <h5 id="spec1" style={{ display: "inline-block" }}>
        <img
          style={{
            marginRight: ".5rem",
            borderRadius: "2px",
            border: "1.3px solid white",
          }}
          src={spec1Logo}
        />
        Beast Mastery
      </h5>
      <h5
        style={{
          color: "white",
          display: "inline-block",
          marginLeft: "2px",
        }}
        id="point-counter1"
      >
        ({points})
      </h5>
    </>
  );
};
