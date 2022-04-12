const reducer = (
  state = {
    spec1: 0,
    spec2: 0,
    spec3: 0,
    pointsTotal: 0,
  },
  action
) => {
  switch (action.type) {
    case "addPointSpec1":
      return [spec1++, pointsTotal++];
    case "addPointSpec2":
      return [spec1++, pointsTotal++];
    case "addPointSpec3":
      return [spec1++, pointsTotal++];
    case "removePointSpec1":
      return [spec1--, pointsTotal--];
    case "removePointSpec2":
      return [spec1--, pointsTotal--];
    case "removePointSpec3":
      return [spec1--, pointsTotal--];
    case "resetPoints":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
