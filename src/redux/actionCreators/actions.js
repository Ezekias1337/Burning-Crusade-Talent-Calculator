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
