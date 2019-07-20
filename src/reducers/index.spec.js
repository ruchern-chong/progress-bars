import reducer from './index';

describe('reducers', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  test('should fetch the data successfully', () => {
    const action = {
      type: 'FETCH_DATA_SUCCESS',
      payload: {
        buttons: [20, 22, -8, -32],
        bars: [47, 51, 13],
        limit: 180
      }
    };

    expect(reducer({}, action)).toEqual({
      bars: [47, 51, 13],
      buttons: [20, 22, -8, -32],
      limit: 180
    });
  });

  test('should set the errors', () => {
    const action = { type: 'FETCH_DATA_ERROR', payload: { error: true } };

    expect(reducer({}, action)).toEqual({ error: true });
  });

  test('should set the value of the bar accordingly', () => {
    const action = {
      type: 'SET_BAR_VALUE',
      payload: {
        selectedBar: 0,
        value: 10
      }
    };

    expect(reducer({ bars: [47, 51, 13] }, action)).toEqual({
      bars: [57, 51, 13]
    });
  });

  test('should not set the value under 0', () => {
    const action = {
      type: 'SET_BAR_VALUE',
      payload: {
        selectedBar: 0,
        value: -100
      }
    };

    expect(reducer({ bars: [47, 51, 13] }, action)).toEqual({
      bars: [0, 51, 13]
    });
  });
});
