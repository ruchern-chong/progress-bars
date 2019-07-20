import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';

import { bars, buttons, limit } from '../__mocks__/data.json';

describe('App', () => {
  test('should render', () => {
    const { container } = render(
      <App bars={bars} buttons={buttons} limit={limit} fetchData={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  // TODO Fix the test
  test('should fire the click event when button is clicked', () => {
    const setBarValue = jest.fn();
    const { getByTestId, getByText } = render(
      <App
        bars={bars}
        buttons={buttons}
        limit={limit}
        setBarValue={setBarValue}
      />
    );

    expect(getByTestId('progress-bar-1-value')).toHaveTextContent('47%');
    fireEvent.click(getByText('20'));
    expect(setBarValue).toBeCalledWith(0, 20);
    // expect(getByTestId('progress-bar-1-value')).toHaveTextContent('67%');
  });

  test('should change the selected progress bar', () => {
    const { getByText } = render(
      <App bars={bars} buttons={buttons} limit={limit} />
    );

    fireEvent.click(getByText('Progress Bar 1'));
    fireEvent.click(getByText('Progress Bar 2'));
    fireEvent.change(getByText('Progress Bar 2').parentElement, {
      target: {
        value: 1
      }
    });

    expect(getByText('Progress Bar 2')).toBeVisible();
  });
});
