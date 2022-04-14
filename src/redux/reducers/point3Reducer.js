const point3Reducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointsSpec3":
      if (action?.payload !== undefined) {
        return state.points + action.payload;
      }
      break;

    case "removePointsSpec3":
      if (action?.payload !== undefined) {
        return state.points - action.payload;
      }
      break;

    default:
      return state;
  }
};

export default point3Reducer;
