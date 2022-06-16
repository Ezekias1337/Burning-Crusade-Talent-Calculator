import { combineReducers } from "redux";
import point1Reducer from "./point1Reducer";
import point2Reducer from "./point2Reducer";
import point3Reducer from "./point3Reducer";
import totalPointsReducer from "./totalPointsReducer";
import spec1ReqReducer from "./spec1ReqReducer";
import spec2ReqReducer from "./spec2ReqReducer";
import spec3ReqReducer from "./spec3ReqReducer";

const reducers = combineReducers({
  pointsSpec1: point1Reducer,
  pointsSpec2: point2Reducer,
  pointsSpec3: point3Reducer,
  totalPoints: totalPointsReducer,
  spec1Requirements: spec1ReqReducer,
  spec2Requirements: spec2ReqReducer,
  spec3Requirements: spec3ReqReducer,
});

export default reducers;
