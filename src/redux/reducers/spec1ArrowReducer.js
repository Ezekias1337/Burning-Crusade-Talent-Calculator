const spec1ArrowReducer = (
  state = {
    spec1Req1Arrow: "silver",
    spec1Req2Arrow: "silver",
    spec1Req3Arrow: "silver",
    spec1Req4Arrow: "silver",
    spec1Req5Arrow: "silver",
    spec1Req6Arrow: "silver",
    spec1Req7Arrow: "silver",
  },
  action
) => {
  switch (action.type) {
    case "spec1Req1ArrowGold":
      if (action?.payload !== undefined) {
        const newStateObject = {
          ...state
        }
        newStateObject.spec1Req1Arrow = "gold";

        return newStateObject;
      }
      break;
    case "spec1Req1ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req1Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req2ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req2Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req2ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req2Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req3ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req3Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req3ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req3Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req4ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req4Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req4ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req4Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req5ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req5Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req5ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req5Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req6ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req6Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req6ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req6Arrow = "silver";

        return newState;
      }
      break;

    case "spec1Req7ArrowGold":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req7Arrow = "gold";

        return newState;
      }
      break;
    case "spec1Req7ArrowSilver":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req7Arrow = "silver";

        return newState;
      }
      break;

    default:
      return state;
  }
};

export default spec1ArrowReducer;
