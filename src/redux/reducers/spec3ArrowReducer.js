const spec3ArrowReducer = (
    state = {
      spec3Req1Arrow: "silver",
      spec3Req2Arrow: "silver",
      spec3Req3Arrow: "silver",
      spec3Req4Arrow: "silver",
      spec3Req5Arrow: "silver",
      spec3Req6Arrow: "silver",
      spec3Req7Arrow: "silver",
    },
    action
  ) => {
    switch (action.type) {
      case "spec3Req1ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req1Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req1ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req1Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req2ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req2Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req2ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req2Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req3ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req3Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req3ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req3Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req4ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req4Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req4ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req4Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req5ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req5Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req5ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req5Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req6ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req6Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req6ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req6Arrow = "silver";
  
          return newState;
        }
        break;
  
      case "spec3Req7ArrowGold":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req7Arrow = "gold";
  
          return newState;
        }
        break;
      case "spec3Req7ArrowSilver":
        if (action?.payload !== undefined) {
          const newState = state;
          newState.spec3Req7Arrow = "silver";
  
          return newState;
        }
        break;
  
      default:
        return state;
    }
  };
  
  export default spec3ArrowReducer;
  