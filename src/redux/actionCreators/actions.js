export const updatePoints = (points) => {
    return (dispatch) => {
      dispatch({
        type: "updatePoints",
        payload: points,
      });
    };
  };
  