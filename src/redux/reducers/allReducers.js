import { combineReducers } from "redux";
import pointsReducer from "./pointsReducer";

const reducers = combineReducers({
  points: pointsReducer,
});

export default reducers;
