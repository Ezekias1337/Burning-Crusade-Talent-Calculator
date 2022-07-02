const spec1ReqReducer = (
  state = {
    spec1Req1: false,
    spec1Req2: false,
    spec1Req3: false,
    spec1Req4: false,
    spec1Req5: false,
    spec1Req6: false,
    spec1Req7: false,
  },
  action
) => {
  switch (action.type) {
    case "spec1Req1Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req1 = action.payload;

        return newState;
      }
      break;
    case "spec1Req1Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req1 = false;

        return newState;
      }
      break;

    case "spec1Req2Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req2 = action.payload;

        return newState;
      }
      break;
    case "spec1Req2Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req2 = false;

        return newState;
      }
      break;
    case "spec1Req3Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req3 = action.payload;

        return newState;
      }
      break;
    case "spec1Req3Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req3 = false;

        return newState;
      }
      break;
    case "spec1Req4Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req4 = action.payload;

        return newState;
      }
      break;
    case "spec1Req4Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req4 = false;

        return newState;
      }
      break;
    case "spec1Req5Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req5 = action.payload;

        return newState;
      }
      break;
    case "spec1Req5Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req5 = false;

        return newState;
      }
      break;
    case "spec1Req6Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req6 = action.payload;

        return newState;
      }
      break;
    case "spec1Req6Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req6 = false;

        return newState;
      }
      break;
    case "spec1Req7Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req7 = action.payload;

        return newState;
      }
      break;
    case "spec1Req7Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec1Req7 = false;

        return newState;
      }
      break;

    default:
      return state;
  }
};

export default spec1ReqReducer;
