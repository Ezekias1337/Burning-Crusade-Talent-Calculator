const totalPointsReducer = (
  state = {
    points: 0,
  },
  action
) => {
  switch (action.type) {
    case "addTotalPoints":
      if (action?.payload !== undefined) {
        return state.points + action.payload;
      }
      break;

    case "removeTotalPoints":
      if (action?.payload !== undefined) {
        return state.points - action.payload;
      }
      break;

    default:
      return state;
  }
};

export default totalPointsReducer;
