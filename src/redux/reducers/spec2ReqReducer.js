const spec2ReqReducer = (
  state = {
    spec2Req1: false,
    spec2Req2: false,
    spec2Req3: false,
    spec2Req4: false,
    spec2Req5: false,
    spec2Req6: false,
    spec2Req7: false,
  },
  action
) => {
  switch (action.type) {
    case "spec2Req1Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req1Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;

    case "spec2Req2Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req2Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;
    case "spec2Req3Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req3Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;
    case "spec2Req4Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req4Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;
    case "spec2Req5Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req5Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;
    case "spec2Req6Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req6Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;
    case "spec2Req7Unlock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = action.payload;

        return newState;
      }
      break;
    case "spec2Req7Lock":
      if (action?.payload !== undefined) {
        const newState = state;
        newState.spec2Req1 = false;

        return newState;
      }
      break;

    default:
      return state;
  }
};

export default spec2ReqReducer;
