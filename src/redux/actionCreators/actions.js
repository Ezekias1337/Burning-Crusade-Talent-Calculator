/* 
-----------------------------------------------------------------------------
    Handle adding points to specs 1, 2, 3, and Total
-----------------------------------------------------------------------------
*/

export const addPointsSpec1 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "addPointsSpec1",
      payload: points,
    });
  };
};

export const addPointsSpec2 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "addPointsSpec2",
      payload: points,
    });
  };
};

export const addPointsSpec3 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "addPointsSpec3",
      payload: points,
    });
  };
};

export const addTotalPoints = (points) => {
  return (dispatch) => {
    dispatch({
      type: "addTotalPoints",
      payload: points,
    });
  };
};

export const removeTotalPoints = (points) => {
  return (dispatch) => {
    dispatch({
      type: "removeTotalPoints",
      payload: points,
    });
  };
};

export const removePointsSpec1 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "removePointsSpec1",
      payload: points,
    });
  };
};

export const removePointsSpec2 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "removePointsSpec2",
      payload: points,
    });
  };
};

export const removePointsSpec3 = (points) => {
  return (dispatch) => {
    dispatch({
      type: "removePointsSpec3",
      payload: points,
    });
  };
};

export const resetPoints = (points) => {
  return (dispatch) => {
    dispatch({
      type: "resetPoints",
      payload: points,
    });
  };
};

/* 
-----------------------------------------------------------------------------
    Handle unlocking/locking of talents Spec 1
-----------------------------------------------------------------------------
*/

export const unlockSpec1Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req1Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req1Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req2Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req2Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req3Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req3Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req4Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req4Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req5Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req5Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req6Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req6Lock",
      payload: false,
    });
  };
};

export const unlockSpec1Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req7Unlock",
      payload: true,
    });
  };
};

export const lockSpec1Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec1Req7Lock",
      payload: false,
    });
  };
};

/* 
-----------------------------------------------------------------------------
    Handle unlocking/locking of talents Spec 2
-----------------------------------------------------------------------------
*/

export const unlockSpec2Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req1Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req1Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req2Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req2Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req3Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req3Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req4Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req4Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req5Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req5Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req6Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req6Lock",
      payload: false,
    });
  };
};

export const unlockSpec2Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req7Unlock",
      payload: true,
    });
  };
};

export const lockSpec2Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec2Req7Lock",
      payload: false,
    });
  };
};

/* 
-----------------------------------------------------------------------------
    Handle unlocking/locking of talents Spec 3
-----------------------------------------------------------------------------
*/

export const unlockSpec3Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req1Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req1 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req1Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req2Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req2 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req2Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req3Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req3 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req3Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req4Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req4 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req4Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req5Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req5 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req5Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req6Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req6 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req6Lock",
      payload: false,
    });
  };
};

export const unlockSpec3Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req7Unlock",
      payload: true,
    });
  };
};

export const lockSpec3Req7 = () => {
  return (dispatch) => {
    dispatch({
      type: "spec3Req7Lock",
      payload: false,
    });
  };
};
