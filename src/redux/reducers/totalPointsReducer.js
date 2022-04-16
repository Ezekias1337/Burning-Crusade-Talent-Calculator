const totalPointsReducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addTotalPoints":
      if (action?.payload !== undefined) {
        state.points = state.points + action.payload;
        return state;
      }
      break;

    case "removeTotalPoints":
      if (action?.payload !== undefined) {
        state.points = state.points - action.payload;
        return state;
      }
      break;

    default:
      return state;
  }
};

export default totalPointsReducer;
