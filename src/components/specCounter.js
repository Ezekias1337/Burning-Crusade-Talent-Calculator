import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/vanilla_css/spec-counter.css";

export const SpecCounter = (props) => {
  const state = useSelector((state) => state);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    switch (props.spec) {
      case "1":
        setPoints(state.pointsSpec1.points);
        break;
      case "2":
        setPoints(state.pointsSpec2.points);
        break;
      case "3":
        setPoints(state.pointsSpec3.points);
        break;
      default:
        break;
    }
  }, [state, props.spec]);

  return (
    <>
      <h5 className="spec-header" id={props.spec}>
        <img
          className="spec-img"
          src={props.logo}
          alt={`${props.specName} logo`}
        />
        {props.specName}
      </h5>
      <h5 className="point-counter" id={props.spec + "counter"}>
        ({points})
      </h5>
    </>
  );
};
