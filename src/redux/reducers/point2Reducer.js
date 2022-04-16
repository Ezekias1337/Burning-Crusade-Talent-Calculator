const point2Reducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointsSpec2":
      if (action?.payload !== undefined) {
        const newPoints = state.points + action.payload;
        const newStateObject = {
          points: newPoints,
        };
        return newStateObject;
      }
      break;

    case "removePointsSpec2":
      if (action?.payload !== undefined) {
        const newPoints = state.points - action.payload;
        const newStateObject = {
          points: newPoints,
        };
        return newStateObject;
      }
      break;

    default:
      return state;
  }
};

export default point2Reducer;
