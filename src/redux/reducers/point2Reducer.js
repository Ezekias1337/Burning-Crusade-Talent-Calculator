const point2Reducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointsSpec2":
      if (action?.payload !== undefined) {
        return state.points + action.payload;
      }
      break;

    case "removePointsSpec2":
      if (action?.payload !== undefined) {
        return state.points - action.payload;
      }
      break;
      
    default:
      return state;
  }
};

export default point2Reducer;
