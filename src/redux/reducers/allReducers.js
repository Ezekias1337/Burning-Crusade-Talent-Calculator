import { combineReducers } from "redux";
import point1Reducer from "./point1Reducer";
import point2Reducer from "./point2Reducer";
import point3Reducer from "./point3Reducer";
import totalPointsReducer from "./totalPointsReducer";

const reducers = combineReducers({
  pointsSpec1: point1Reducer,
  pointsSpec2: point2Reducer,
  pointsSpec3: point3Reducer,
  totalPoints: totalPointsReducer,
});

export default reducers;
