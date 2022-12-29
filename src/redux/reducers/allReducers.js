import { combineReducers } from "redux";
import point1Reducer from "./point1Reducer";
import point2Reducer from "./point2Reducer";
import point3Reducer from "./point3Reducer";
import totalPointsReducer from "./totalPointsReducer";
import spec1ReqReducer from "./spec1ReqReducer";
import spec2ReqReducer from "./spec2ReqReducer";
import spec3ReqReducer from "./spec3ReqReducer";
import spec1ArrowReducer from "./spec1ArrowReducer";
import spec2ArrowReducer from "./spec2ArrowReducer";
import spec3ArrowReducer from "./spec3ArrowReducer";

const reducers = combineReducers({
  pointsSpec1: point1Reducer,
  pointsSpec2: point2Reducer,
  pointsSpec3: point3Reducer,
  totalPoints: totalPointsReducer,
  spec1Requirements: spec1ReqReducer,
  spec2Requirements: spec2ReqReducer,
  spec3Requirements: spec3ReqReducer,
  spec1Arrows: spec1ArrowReducer,
  spec2Arrows: spec2ArrowReducer,
  spec3Arrows: spec3ArrowReducer,
});

export default reducers;
