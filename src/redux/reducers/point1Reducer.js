const point1Reducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointsSpec1":
      if (action?.payload !== undefined) {
        return state.points + action.payload;
      }
      break;
    case "removePointsSpec1":
      if (action?.payload !== undefined) {
        return state.points - action.payload;
      }
      break;
    default:
      return state;
  }
};

export default point1Reducer;
