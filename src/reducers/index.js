const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      const { bars, buttons, limit } = action.payload;

      return { ...state, bars, buttons, limit };
    case 'FETCH_DATA_ERROR':
      return { ...state, error: true };
    case 'SET_BAR_VALUE':
      const { selectedBar, value } = action.payload;

      let newValue;

      newValue = state.bars[selectedBar] + value;

      if (newValue <= 0) newValue = 0;

      return {
        ...state,
        bars: Object.assign([...state.bars], { [selectedBar]: newValue })
      };
    default:
      return state;
  }
};

export default rootReducer;
