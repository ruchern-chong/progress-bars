export const fetchDataSuccess = data => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

export const fetchDataFailure = error => ({
  type: 'FETCH_DATA_ERROR',
  payload: error
});

/**
 *
 * @param {Number} selectedBar
 * @param {Number} value
 * @returns {Object}
 */
export const setBarValue = (selectedBar, value) => ({
  type: 'SET_BAR_VALUE',
  payload: { selectedBar, value }
});

export const fetchData = () => {
  return async dispatch => {
    return await fetch('http://pb-api.herokuapp.com/bars')
      .then(response => response.json())
      .then(response => {
        dispatch(fetchDataSuccess(response));
        return response;
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
};
