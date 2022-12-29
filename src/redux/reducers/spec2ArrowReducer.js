const spec2ArrowReducer = (
    state = {
      spec2Req1Arrow: "silver",
      spec2Req2Arrow: "silver",
      spec2Req3Arrow: "silver",
      spec2Req4Arrow: "silver",
      spec2Req5Arrow: "silver",
      spec2Req6Arrow: "silver",
      spec2Req7Arrow: "silver",
    },
    action
  ) => {
    switch (action.type) {
      case "spec2Req1ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req1Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req1ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req1Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req2ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req2Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req2ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req2Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req3ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req3Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req3ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req3Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req4ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req4Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req4ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req4Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req5ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req5Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req5ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req5Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req6ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req6Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req6ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req6Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec2Req7ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req7Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec2Req7ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec2Req7Arrow = "silver";
  
          return newState;
        }
        break;
  
      default:
        return state;
    }
  };
  
  export default spec2ArrowReducer;
  