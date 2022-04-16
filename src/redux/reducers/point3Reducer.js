const point3Reducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointsSpec3":
      if (action?.payload !== undefined) {
        const newPoints = state.points + action.payload;
        const newStateObject = {
          points: newPoints,
        };
        return newStateObject;
      }
      break;

    case "removePointsSpec3":
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

export default point3Reducer;
