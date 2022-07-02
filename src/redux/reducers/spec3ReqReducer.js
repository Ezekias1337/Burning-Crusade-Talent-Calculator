const spec3ReqReducer = (
  state = {
    spec3Req1: false,
    spec3Req2: false,
    spec3Req3: false,
    spec3Req4: false,
    spec3Req5: false,
    spec3Req6: false,
    spec3Req7: false,
  },
  action
) => {
  switch (action.type) {
    case "spec3Req1Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req1 = action.payload;

        return newState;
      }
      break;
    case "spec3Req1Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req1 = false;

        return newState;
      }
      break;

    case "spec3Req2Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req2 = action.payload;

        return newState;
      }
      break;
    case "spec3Req2Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req2 = false;

        return newState;
      }
      break;
    case "spec3Req3Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req3 = action.payload;

        return newState;
      }
      break;
    case "spec3Req3Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req3 = false;

        return newState;
      }
      break;
    case "spec3Req4Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req4 = action.payload;

        return newState;
      }
      break;
    case "spec3Req4Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req4 = false;

        return newState;
      }
      break;
    case "spec3Req5Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req5 = action.payload;

        return newState;
      }
      break;
    case "spec3Req5Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req5 = false;

        return newState;
      }
      break;
    case "spec3Req6Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req6 = action.payload;

        return newState;
      }
      break;
    case "spec3Req6Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req6 = false;

        return newState;
      }
      break;
    case "spec3Req7Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req7 = action.payload;

        return newState;
      }
      break;
    case "spec3Req7Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec3Req7 = false;

        return newState;
      }
      break;

    default:
      return state;
  }
};

export default spec3ReqReducer;
