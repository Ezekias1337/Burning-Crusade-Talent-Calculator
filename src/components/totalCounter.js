import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/vanilla_css/total-counter.css";

export const TotalCounter = () => {
  const state = useSelector((state) => state);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(state.totalPoints.points);
  }, [state]);

  return (
    <div className="col-sm-4 mx-auto total-counter-wrapper">
      <h5 className="total-counter">Points Spent:</h5>
      <h5 id="total-points" className="total-points-value">
        {points}
      </h5>
    </div>
  );
};

